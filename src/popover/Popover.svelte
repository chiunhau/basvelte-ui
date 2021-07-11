<script>
import { onMount, onDestroy } from 'svelte';
import { getOverride, getOverrideProps } from '../styles';
import {
  PLACEMENT,
  ANIMATE_OUT_TIME,
  ANIMATE_IN_TIME,
  POPOVER_MARGIN,
} from './constants.js';
import { Layer, TetherBehavior } from '../layer/index.js';
import {
  Arrow as StyledArrow,
  Body as StyledBody,
  Inner as StyledInner,
} from './styled/index.js';
import { fromPopperPlacement } from './utils.js';

// props
export let animateOutTime;
export let showArrow = false;
export let ignoreBoundary = false;
export let popoverMargin = POPOVER_MARGIN;
export let popperOptions;
export let isOpen = false;
export let mountNode;
export let onEscape;
export let onMouseEnterDelay = 200;
export let onMouseLeaveDelay = 200;
export let placement = PLACEMENT.auto;
export let overrides = {};
export let onClick = () => {};
export let onClickOutside = () => {};

// states
let isAnimating = false;
let arrowOffset = { left: 0, top: 0 };
let popoverOffset = { left: 0, top: 0 };
let placementState = placement;
let isMounted = false;
let isLayerMounted = false;

// refs
let animateInTimer;
let animateOutTimer;
let animateOutCompleteTimer;
let onMouseEnterTimer;
let onMouseLeaveTimer;
let anchorRef;
let popperRef;
let arrowRef;

const defaultPopperOptions = {
  modifiers: {
    preventOverflow: { enabled: !ignoreBoundary },
  },
};

$: {
  if (isOpen && isLayerMounted) {
    clearTimers();
  }
}

$: {
  if (!isOpen) {
    animateOutTimer = setTimeout(animateOut, 20);
  }
}

onMount(() => {
  isMounted = true;
});

onDestroy(() => {
  clearTimers();
});

const animateIn = () => {
  if (isOpen) {
    isAnimating = true;
  }
};

const animateOut = () => {
  if (!isOpen) {
    isAnimating = true;
    animateOutCompleteTimer = setTimeout(() => {
      isAnimating = false;
      placementState = placement;
    }, animateOutTime || ANIMATE_OUT_TIME);
  }
};

const clearTimers = () => {
  [
    animateInTimer,
    animateOutTimer,
    animateOutCompleteTimer,
    onMouseEnterTimer,
    onMouseLeaveTimer,
  ].forEach((timerId) => {
    if (timerId) {
      clearTimeout(timerId);
    }
  });
};

const onAnchorClick = (e) => {
  if (onClick) {
    onClick(e);
  }
};

const onPopperUpdate = (normalizedOffsets, data) => {
  const placement = fromPopperPlacement(data.placement) || PLACEMENT.top;

  arrowOffset = normalizedOffsets.arrow;
  popoverOffset = normalizedOffsets.popper;
  placementState = placement;

  // Now that element has been positioned, we can animate it in
  animateInTimer = setTimeout(animateIn, ANIMATE_IN_TIME);

  return data;
};

const triggerOnMouseLeaveWithDelay = (e) => {
  if (onMouseLeaveDelay) {
    onMouseLeaveTimer = setTimeout(
      () => triggerOnMouseLeave(e),
      onMouseLeaveDelay
    );
    return;
  }
  triggerOnMouseLeave(e);
};

const triggerOnMouseLeave = (e) => {
  if (onMouseLeave) {
    onMouseLeave(e);
  }
};

const triggerOnMouseEnterWithDelay = (e) => {
  if (onMouseEnterDelay) {
    onMouseEnterTimer = setTimeout(
      () => triggerOnMouseEnter(e),
      onMouseEnterDelay
    );
    return;
  }
  triggerOnMouseEnter(e);
};

const triggerOnMouseEnter = (e) => {
  if (onMouseEnter) {
    onMouseEnter(e);
  }
};

const onDocumentClick = (evt) => {
  const target = evt.target;
  const popper = popperRef;
  const anchor = anchorRef;
  // Ignore document click if it came from popover or anchor
  if (!popper || popper === target || popper.contains(target)) {
    return;
  }
  if (!anchor || anchor === target || anchor.contains(target)) {
    return;
  }
  if (onClickOutside) {
    onClickOutside(evt);
  }
};

$: sharedProps = {
  _$showArrow: !!showArrow,
  _$arrowOffset: arrowOffset,
  _$popoverOffset: popoverOffset,
  _$placement: placementState,
  _$isAnimating: isAnimating,
  _$isOpen: isOpen,
  _$popoverMargin: popoverMargin,
};

const {
  Arrow: ArrowOverride,
  Body: BodyOverride,
  Inner: InnerOverride,
} = overrides;

const Arrow = getOverride(ArrowOverride) || StyledArrow;
const Body = getOverride(BodyOverride) || StyledBody;
const Inner = getOverride(InnerOverride) || StyledInner;
</script>

<span
  data-basvelte="popover-anchor"
  aria-haspopup="true"
  aria-expanded="{isOpen ? 'true' : 'false'}"
  key="popover-anchor"
  bind:this="{anchorRef}"
  on:click="{onAnchorClick}">
  <slot name="anchor" />
</span>
{#if isMounted && isOpen}
  <Layer
    key="new-layer"
    mountNode="{mountNode}"
    onEscape="{onEscape}"
    onDocumentClick="{onDocumentClick}"
    onMount="{() => {
      isLayerMounted = true;
    }}"
    onUnmount="{() => {
      isLayerMounted = false;
    }}">
    <TetherBehavior
      anchorRef="{anchorRef}"
      arrowRef="{arrowRef}"
      popperRef="{popperRef}"
      popperOptions="{{
        ...defaultPopperOptions,
        ...popperOptions,
      }}"
      onPopperUpdate="{onPopperUpdate}"
      placement="{placementState}">
      <Body
        bind:ref="{popperRef}"
        data-basvelte="popover"
        {...sharedProps}
        {...getOverrideProps(BodyOverride)}>
        {#if showArrow}
          <Arrow
            key="popover-arrow"
            bind:ref="{arrowRef}"
            {...sharedProps}
            {...getOverrideProps(ArrowOverride)} />
        {/if}
        <Inner {...sharedProps} {...getOverrideProps(InnerOverride)}>
          <slot name="content" />
        </Inner>
      </Body>
    </TetherBehavior>
  </Layer>
{/if}
