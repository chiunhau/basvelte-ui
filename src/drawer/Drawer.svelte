<script>
import { onMount, onDestroy } from 'svelte';
import { getOverrides } from '../styles';
import { Layer } from '../layer/index.js';
import { SIZE, CLOSE_SOURCE, ANCHOR } from './constants.js';
import {
  StyledRoot,
  StyledBackdrop,
  StyledDrawerContainer,
  StyledDrawerBody,
  StyledClose,
} from './styled/index.js';

export let animate = true;
export let closeable = true;
export let isOpen = false;
export let overrides = {};
export let size = SIZE.default;
export let anchor = ANCHOR.right;
export let showBackdrop = true;
export let mountNode;
export let onClose = () => {};
export let onBackdropClick = () => {};

let animateOutTimer;
let animateStartTimer;
let lastFocus = null;
let lastMountNodeOverflowStyle = null;
let rootRef;

let isVisible = false;
let mounted = false;
let isFocusVisible = false;

onMount(() => {
  mounted = true;
});

onDestroy(() => {
  resetMountNodeScroll();
  clearTimers();
});

$: {
  if (isOpen || (mounted && isOpen)) {
    didOpen();
  } else {
    didClose();
  }
}

const disableMountNodeScroll = () => {
  const mountNode = getMountNode();
  lastMountNodeOverflowStyle = mountNode.style.overflow || '';
  mountNode.style.overflow = 'hidden';
};

const resetMountNodeScroll = () => {
  const mountNode = getMountNode();
  const lastStyle = lastMountNodeOverflowStyle;
  if (mountNode && lastStyle !== null) {
    if (mountNode.style.overflow === 'hidden') {
      mountNode.style.overflow = lastStyle || '';
    }
    lastMountNodeOverflowStyle = null;
  }
};

const getMountNode = () => {
  if (mountNode) {
    return mountNode;
  }
  return document.body;
};

const onEscape = () => {
  if (!closeable) {
    return;
  }
  triggerClose(CLOSE_SOURCE.escape);
};

const handleBackdropClick = (event) => {
  if (onBackdropClick) {
    onBackdropClick(event);
  }
  if (!closeable) {
    return;
  }
  triggerClose(CLOSE_SOURCE.backdrop);
};

const onCloseClick = () => {
  triggerClose(CLOSE_SOURCE.closeButton);
};

const clearTimers = () => {
  if (animateOutTimer) {
    clearTimeout(animateOutTimer);
  }
  if (animateStartTimer) {
    cancelAnimationFrame(animateStartTimer);
  }
};

const didOpen = () => {
  if (rootRef) {
    rootRef.scrollTop = 0;
  }

  clearTimers();
  disableMountNodeScroll();

  animateStartTimer = requestAnimationFrame(() => {
    isVisible = true;
  });
};

const didClose = () => {
  resetMountNodeScroll();
  animateOutTimer = setTimeout(animateOutComplete, 500);
};

const triggerClose = (source) => {
  if (onClose && source) {
    onClose({
      closeSource: source,
    });
  }
};

const animateOutComplete = () => {
  isVisible = false;
};

$: sharedProps = {
  _$animating: animate,
  _$isVisible: isVisible,
  _$isOpen: !!isOpen,
  _$size: size,
  _$closeable: !!closeable,
  _$anchor: anchor,
  _$isFocusVisible: isFocusVisible,
  _$showBackdrop: showBackdrop,
};

const [Root, rootProps] = getOverrides(overrides.Root, StyledRoot);
const [Backdrop, backdropProps] = getOverrides(
  overrides.Backdrop,
  StyledBackdrop
);
const [DrawerContainer, drawerContainerProps] = getOverrides(
  overrides.DrawerContainer,
  StyledDrawerContainer
);
const [DrawerBody, drawerBodyProps] = getOverrides(
  overrides.DrawerBody,
  StyledDrawerBody
);
const [Close, closeProps] = getOverrides(overrides.Close, StyledClose);
</script>

{#if mounted && (isOpen || isVisible)}
  <Layer onEscape="{onEscape}" mountNode="{mountNode}">
    <Root
      data-baseweb="drawer"
      bind:ref="{rootRef}"
      {...sharedProps}
      {...rootProps}>
      <Backdrop
        on:click="{handleBackdropClick}"
        {...sharedProps}
        {...backdropProps} />
      <DrawerContainer
        aria-label="drawer"
        {...sharedProps}
        {...drawerContainerProps}>
        <DrawerBody {...sharedProps} {...drawerBodyProps}>
          <slot />
        </DrawerBody>
        {#if closeable}
          <Close
            aria-label="close"
            on:click="{onCloseClick}"
            {...sharedProps}
            {...closeProps}>
            <svg
              width="10"
              height="10"
              viewBox="0 0 10 10"
              style="stroke: #000000"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M9 1L5 5M1 9L5 5M5 5L1 1M5 5L9 9"
                strokeWidth="2"
                strokeLinecap="round"></path>
            </svg>
          </Close>
        {/if}
      </DrawerContainer>
    </Root>
  </Layer>
{/if}
