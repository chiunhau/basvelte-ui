<script>
import { getOverrides } from '../styles';
import { BaseInput, SIZE, CUSTOM_INPUT_TYPE } from '../input/index.js';
import {
  TextareaRoot as StyledTextAreaRoot,
  Textarea as StyledTextarea,
  TextareaContainer as StyledTextareaContainer,
} from './styled/index.js';

export let autoFocus = false;
export let disabled = false;
export let error = false;
export let positive = false;
export let name = '';

export let onChange = () => {};
export let onKeyDown = () => {};
export let onKeyPress = () => {};
export let onKeyUp = () => {};
export let onFocus = () => {};
export let overrides = {};
export let placeholder = '';
export let required = false;
export let rows = 3;
export let size = SIZE.default;
export let value = '';

let isFocused = autoFocus || false;

const handleFocus = (e) => {
  isFocused = true;
  onFocus(e);
};

const handleBlur = (e) => {
  isFocused = false;
  onBlur(e);
};

const [Root, rootProps] = getOverrides(overrides.Root, StyledTextAreaRoot);
const inputOverrides = {
  Input: { component: StyledTextarea },
  InputContainer: { component: StyledTextareaContainer },
};
</script>

<Root
  data-baseweb="textarea"
  _$isFocused="{isFocused}"
  _$disabled="{disabled}"
  _$error="{error}"
  _$positive="{positive}"
  _$required="{required}"
  {...rootProps}>
  <BaseInput
    bind:value
    placeholder="{placeholder}"
    required="{required}"
    rows="{rows}"
    name="{name}"
    size="{size}"
    {...$$restProps}
    type="{CUSTOM_INPUT_TYPE.textarea}"
    overrides="{inputOverrides}"
    on:focus="{handleFocus}"
    on:blur="{handleBlur}" />
</Root>
