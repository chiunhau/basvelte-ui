<script>
import { onMount } from 'svelte';
import { getOverride, getOverrideProps } from '../styles/index.js';

import {
  Checkmark as StyledCheckmark,
  Input as StyledInput,
  Label as StyledLabel,
  Root as StyledRoot,
  Toggle as StyledToggle,
  ToggleInner as StyledToggleInner,
  ToggleTrack as StyledToggleTrack,
} from './styled/index.js';
import { STYLE_TYPE } from './constants.js';

const stopPropagation = (e) => e.stopPropagation();
export let overrides = {};
export let checked = false;
export let disabled = false;
export let autoFocus = false;
export let isIndeterminate = false;
export let inputRef = undefined;
export let isError = false;
export let error = false;
export let type = 'checkbox';
export let checkmarkType = STYLE_TYPE.default;

export let onChange = () => {};
export let onMouseEnter = () => {};
export let onMouseLeave = () => {};
export let onMouseDown = () => {};
export let onMouseUp = () => {};
export let onFocus = () => {};
export let onBlur = () => {};
export let value = null;
export let name = '';
export let required = false;
export let title = '';
export let ariaLabel = '';

let isFocused = autoFocus || false;
let isFocusVisible = false;
let isHovered = false;
let isActive = false;

onMount(() => {
  if (autoFocus && inputRef) {
    inputRef.focus();
  }
});

const handleMouseEnter = (e) => {
  isHovered = true;
  onMouseEnter(e);
};

const handleMouseLeave = (e) => {
  isHovered = false;
  isActive = false;
  onMouseLeave(e);
};

const handleMouseDown = (e) => {
  isActive = true;
  onMouseDown(e);
};

const handleMouseUp = (e) => {
  isActive = false;
  onMouseUp(e);
};

const handleFocus = (e) => {
  isFocused = true;
  onFocus(e);
  if (isFocusVisible(e)) {
    isFocusVisible = true;
  }
};

const handleBlur = (e) => {
  isFocused = false;
  onBlur(e);
  if (isFocusVisible !== false) {
    isFocusVisible = false;
  }
};

const isToggle = () => {
  return (
    checkmarkType === STYLE_TYPE.toggle ||
    checkmarkType === STYLE_TYPE.toggle_round
  );
};

export let labelPlacement = isToggle() ? 'left' : 'right';

const {
  Root: RootOverride,
  Checkmark: CheckmarkOverride,
  Label: LabelOverride,
  Input: InputOverride,
  Toggle: ToggleOverride,
  ToggleInner: ToggleInnerOverride,
  ToggleTrack: ToggleTrackOverride,
} = overrides;

const Root = getOverride(RootOverride) || StyledRoot;
const Checkmark = getOverride(CheckmarkOverride) || StyledCheckmark;
const Label = getOverride(LabelOverride) || StyledLabel;
const Input = getOverride(InputOverride) || StyledInput;
const Toggle = getOverride(ToggleOverride) || StyledToggle;
const ToggleInner = getOverride(ToggleInnerOverride) || StyledToggleInner;
const ToggleTrack = getOverride(ToggleTrackOverride) || StyledToggleTrack;

const inputEvents = {
  onChange,
  onFocus: handleFocus,
  onBlur: handleBlur,
};
const mouseEvents = {
  onMouseEnter: handleMouseEnter,
  onMouseLeave: handleMouseLeave,
  onMouseDown: handleMouseDown,
  onMouseUp: handleMouseUp,
};

$: sharedProps = {
  _$isFocused: isFocused,
  _$isFocusVisible: isFocusVisible,
  _$isHovered: isHovered,
  _$isActive: isActive,
  _$isError: isError,
  _$error: error,
  _$checked: checked,
  _$isIndeterminate: isIndeterminate,
  _$required: required,
  _$disabled: disabled,
  _$value: value,
  _$checkmarkType: checkmarkType,
};
</script>

<Root
  data-baseweb="checkbox"
  title="{title || null}"
  $labelPlacement="{labelPlacement}"
  {...sharedProps}
  {...mouseEvents}
  {...getOverrideProps(RootOverride)}>
  {#if labelPlacement === 'top' || labelPlacement === 'left'}
    <Label
      $labelPlacement="{labelPlacement}"
      {...sharedProps}
      {...getOverrideProps(LabelOverride)}>
      <slot />
    </Label>
  {/if}
  {#if isToggle()}
    <ToggleTrack
      role="checkbox"
      aria-checked="{isIndeterminate ? 'mixed' : checked}"
      aria-invalid="{error || isError || null}"
      {...sharedProps}
      {...getOverrideProps(ToggleTrackOverride)}>
      <Toggle {...sharedProps} {...getOverrideProps(ToggleOverride)}>
        <ToggleInner
          {...sharedProps}
          {...getOverrideProps(ToggleInnerOverride)} />
      </Toggle>
    </ToggleTrack>
  {:else}
    <Checkmark
      role="checkbox"
      checked="{checked}"
      aria-checked="{isIndeterminate ? 'mixed' : checked}"
      aria-invalid="{error || isError || null}"
      {...sharedProps}
      {...getOverrideProps(CheckmarkOverride)} />
  {/if}
  <Input
    value="{value}"
    name="{name}"
    checked="{checked}"
    required="{required}"
    aria-label="{ariaLabel}"
    aria-checked="{isIndeterminate ? 'mixed' : checked}"
    aria-invalid="{error || isError || null}"
    aria-required="{required || null}"
    disabled="{disabled}"
    type="{type}"
    bind:ref="{inputRef}"
    onClick="{stopPropagation}"
    {...sharedProps}
    {...inputEvents}
    {...getOverrideProps(InputOverride)} />
  {#if labelPlacement === 'bottom' || labelPlacement === 'right'}
    <Label
      $labelPlacement="{labelPlacement}"
      {...sharedProps}
      {...getOverrideProps(LabelOverride)}>
      <slot />
    </Label>
  {/if}
</Root>
