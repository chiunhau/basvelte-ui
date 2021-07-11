<script>
import { onDestroy } from 'svelte';
import Popper from 'popper.js';
import { toPopperPlacement, parsePopperOffset } from './utils.js';
import { TETHER_PLACEMENT } from './constants.js';

export let anchorRef = null;
export let onPopperUpdate = () => null;
export let placement = TETHER_PLACEMENT.auto;
export let popperRef = null;
export let popperOptions = {};
export let arrowRef = null;

let popper;
let popperHeight = 0;
let popperWidth = 0;
let popperInitialized = false;

onDestroy(() => {
  destroyPopover();
});

$: {
  if (popperRef) {
    const { height, width } = popperRef.getBoundingClientRect();

    if (popperHeight !== height || popperWidth !== width) {
      popperHeight = height;
      popperWidth = width;
      popper && popper.scheduleUpdate();
    }

    if (anchorRef && !popperInitialized) {
      initializePopper();
      popperInitialized = true;
    }
  }
}

const initializePopper = () => {
  const { modifiers, ...restOptions } = popperOptions;

  if (!anchorRef || !popperRef) return;

  popper = new Popper(anchorRef, popperRef, {
    // Recommended placement (popper may ignore if it causes a viewport overflow, etc)
    placement: toPopperPlacement(placement),
    modifiers: {
      // Passing the arrow ref will measure the arrow when calculating styles
      arrow: {
        element: arrowRef,
        enabled: !!arrowRef,
      },
      computeStyle: {
        // Make popper use top/left instead of transform translate, this is because
        // we use transform for animations and we dont want them to conflict
        gpuAcceleration: false,
      },
      applyStyle: {
        // Disable default styling modifier, we'll apply styles on our own
        enabled: false,
      },
      applyReactStyle: {
        enabled: true,
        fn: handlePopperUpdate,
        order: 900,
      },
      preventOverflow: { enabled: true },
      ...modifiers,
    },
    ...restOptions,
  });
};

const handlePopperUpdate = (data) => {
  const normalizedOffsets = {
    popper: parsePopperOffset(data.offsets.popper),
    arrow: data.offsets.arrow
      ? parsePopperOffset(data.offsets.arrow)
      : { top: 0, left: 0 },
  };
  onPopperUpdate(normalizedOffsets, data);
};

const destroyPopover = () => {
  if (popper) {
    popper.destroy();
    popper = null;
  }
};
</script>

<slot />
