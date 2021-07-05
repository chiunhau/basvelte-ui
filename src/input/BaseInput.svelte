<script>
import { onMount } from 'svelte';
import { getOverrides } from '../styles';
import { ADJOINED, SIZE, CUSTOM_INPUT_TYPE } from './constants.js';
import {
  InputContainer as StyledInputContainer,
  Input as StyledInput,
  // ClearIcon as StyledClearIcon,
  // ClearIconContainer as StyledClearIconContainer,
  // MaskToggleButton as StyledMaskToggleButton,
} from './styled/index.js';

export let autoComplete = 'on';
export let autoFocus = false;
export let disabled = false;
export let name = '';
export let error = false;
export let onBlur = () => {};
export let onFocus = () => {};
export let overrides = {};
export let required = false;
export let size = SIZE.default;
export let type = 'text';
export let adjoined = ADJOINED.none;
export let positive = false;
export let inputMode = 'text';
export let placeholder = '';
export let inputRef;
export let value;
export let id;

let isFocused = autoFocus;

const sharedProps = {
  _$isFocused: isFocused,
  _$disabled: disabled,
  _$error: error,
  _$positive: positive,
  _$adjoined: adjoined,
  _$size: size,
  _$required: required,
};

onMount(() => {
  if (inputRef) {
    if (autoFocus) {
      inputRef.focus();
    }
  }
});

const handleFocus = (e) => {
  isFocused = true;
  onFocus(e);
};

const handleBlur = (e) => {
  isFocused = false;
  onBlur(e);
};

const [InputContainer, inputContainerProps] = getOverrides(
  overrides.InputContainer,
  StyledInputContainer
);
const [Input, inputProps] = getOverrides(overrides.Input, StyledInput);
</script>

<InputContainer
  data-baseweb="base-input"
  {...sharedProps}
  {...inputContainerProps}>
  <Input
    bind:this="{inputRef}"
    autoComplete="{autoComplete}"
    disabled="{disabled}"
    id="{id}"
    inputMode="{inputMode}"
    name="{name}"
    on:blur="{handleBlur}"
    on:focus="{handleFocus}"
    placeholder="{placeholder}"
    type="{type}"
    required="{required}"
    bind:value
    {...sharedProps}
    {...inputProps} />
</InputContainer>
