<script>
import Popover from './Popover.svelte';
import {
  ACCESSIBILITY_TYPE,
  PLACEMENT,
  TRIGGER_TYPE,
  POPOVER_MARGIN,
} from './constants.js';

export let accessibilityType = ACCESSIBILITY_TYPE.menu;
export let ignoreBoundary = false;
export let overrides = {};
export let onMouseEnterDelay = 200;
export let onMouseLeaveDelay = 200;
export let placement = PLACEMENT.auto;
export let popperOptions = {};
export let showArrow = false;
export let triggerType = TRIGGER_TYPE.click;
export let dismissOnClickOutside = true;
export let dismissOnEsc = true;
export let popoverMargin = POPOVER_MARGIN;
export let onBlur = () => {};
export let onClick = () => {};
export let onFocus = () => {};
export let onMouseEnter = () => {};
export let onMouseLeave = () => {};
export let onOpen = () => {};
export let autoFocus = false;
export let mountNode = undefined;
export let onClose = () => {};

let isOpen = false;

const handleBlur = (e) => {
  if (onBlur) {
    onBlur(e);
  }
  close();
};

const handleClick = (e) => {
  if (onClick) {
    onClick(e);
  }
  if (isOpen) {
    close();
  } else {
    open();
  }
};

const onClickOutside = () => {
  close();
};

const onEscape = () => {
  close();
};

const handleFocus = (e) => {
  if (onFocus) {
    onFocus(e);
  }
  open();
};

const handleMouseEnter = (e) => {
  if (onMouseEnter) {
    onMouseEnter(e);
  }
  open();
};

const handleMouseLeave = (e) => {
  if (onMouseLeave) {
    onMouseLeave(e);
  }
  close();
};

const open = () => {
  isOpen = true;
  if (onOpen) {
    onOpen();
  }
};

const close = () => {
  isOpen = false;
  if (onClose) {
    onClose();
  }
};
</script>

<Popover
  accessibilityType="{accessibilityType}"
  autoFocus="{autoFocus}"
  ignoreBoundary="{ignoreBoundary}"
  onEscape="{dismissOnEsc ? onEscape : null}"
  isOpen="{isOpen}"
  mountNode="{mountNode}"
  onBlur="{onBlur}"
  onClick="{onClick}"
  onClickOutside="{dismissOnClickOutside ? onClickOutside : null}"
  {...triggerType === TRIGGER_TYPE.hover
    ? {
        onBlur: handleBlur,
        onFocus: handleFocus,
        onMouseEnter: handleMouseEnter,
        onMouseLeave: handleMouseLeave,
      }
    : {
        onClick: handleClick,
      }}
  onMouseEnterDelay="{onMouseEnterDelay}"
  onMouseLeaveDelay="{onMouseLeaveDelay}"
  overrides="{overrides}"
  placement="{placement}"
  popperOptions="{popperOptions}"
  showArrow="{showArrow}"
  triggerType="{triggerType}"
  popoverMargin="{popoverMargin}">
  <svelte:fragment slot="anchor">
    <slot name="anchor" />
  </svelte:fragment>

  <svelte:fragment slot="content">
    <slot name="content" />
  </svelte:fragment>
</Popover>
