<script>
import { onMount, afterUpdate } from 'svelte';
import { getOverrides } from '../styles';
import { Layer } from '../layer/index.js';
import { SIZE, ROLE, CLOSE_SOURCE } from './constants.js';
import {
  StyledRoot,
  StyledBackdrop,
  StyledDialog,
  StyledDialogContainer,
  StyledClose,
} from './styled/index.js';

export let animate = true;
export let mountNode;
export let isOpen = false;
export let closeable = true;
export let overrides = {};
export let role = ROLE.dialog;
export let size = SIZE.default;
export let unstable_ModalBackdropScroll = false;
export let onClose = () => {};

let animateOutTimer;
let animateStartTimer;
let lastMountNodeOverflowStyle;
let rootRef;
let backdropRef;
let dialogContainerRef;
let dialogRef;

// state
let isVisible = true;
let mounted = false;
let isFocusVisible = false;

onMount(() => {
  mounted = true;
});

$: {
  if (isOpen) {
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

const onEscape = () => {
  if (!closeable) {
    return;
  }
  triggerClose(CLOSE_SOURCE.escape);
};

const onDocumentClick = (e) => {
  if (
    e.target &&
    e.target instanceof HTMLElement &&
    (e.target.contains(dialogContainerRef) || e.target.contains(backdropRef))
  ) {
    onBackdropClick();
  }
};

const onBackdropClick = () => {
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
  _$animate: animate,
  _$isVisible: isVisible,
  _$isOpen: !!isOpen,
  _$size: size,
  _$role: role,
  _$closeable: !!closeable,
  _$unstable_ModalBackdropScroll: unstable_ModalBackdropScroll,
  _$isFocusVisible: isFocusVisible,
};

const getMountNode = () => {
  if (mountNode) {
    return mountNode;
  }
  return document.body;
};

const [Root, rootProps] = getOverrides(overrides.Root, StyledRoot);
const [Backdrop, backdropProps] = getOverrides(
  overrides.Backdrop,
  StyledBackdrop
);
const [DialogContainer, dialogContainerProps] = getOverrides(
  overrides.DialogContainer,
  StyledDialogContainer
);
const [Dialog, dialogProps] = getOverrides(overrides.Dialog, StyledDialog);
const [Close, closeProps] = getOverrides(overrides.Close, StyledClose);
</script>

{#if mounted && (isOpen || isVisible)}
  <Layer onEscape="{onEscape}" onDocumentClick="{onDocumentClick}">
    <Root
      data-basvelte="modal"
      bind:ref="{rootRef}"
      {...sharedProps}
      {...rootProps}>
      <Backdrop bind:ref="{backdropRef}" {...sharedProps} {...backdropProps} />
      <DialogContainer
        bind:ref="{dialogContainerRef}"
        {...sharedProps}
        {...dialogContainerProps}>
        <Dialog
          bind:ref="{dialogRef}"
          tabIndex="{-1}"
          aria-modal="{true}"
          role="{role}"
          {...sharedProps}
          {...dialogProps}>
          <slot />
          {#if closeable}
            <Close
              aria-label="close"
              on:click="{onCloseClick}"
              {...sharedProps}
              {...closeProps}
              ><svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                style="stroke: #000000"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M9 1L5 5M1 9L5 5M5 5L1 1M5 5L9 9"
                  strokeWidth="2"
                  strokeLinecap="round"></path>
              </svg></Close>
          {/if}
        </Dialog>
      </DialogContainer>
    </Root>
  </Layer>
{/if}
