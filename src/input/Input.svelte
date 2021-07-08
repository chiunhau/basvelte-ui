<script>
import {
  Root as StyledRoot,
  InputEnhancer as StyledInputEnhancer,
} from './styled/index.js';
import BaseInput from './BaseInput.svelte';
import { SIZE, ADJOINED, ENHANCER_POSITION } from './constants.js';
import { getOverrides } from '../styles';
import { getAdjoinedProp } from './utils';

export let overrides = {};
export let size = SIZE.default;
export let startEnhancer = null;
export let endEnhancer = null;
export let autoFocus = false;
export let required = false;
export let disabled = false;
export let value = '';

let isFocused = autoFocus;

const [Root, rootProps] = getOverrides(overrides.Root, StyledRoot);
const [StartEnhancer, startEnhancerProps] = getOverrides(
  overrides.StartEnhancer,
  StyledInputEnhancer
);
const [EndEnhancer, endEnhancerProps] = getOverrides(
  overrides.EndEnhancer,
  StyledInputEnhancer
);

const sharedProps = {
  _$isFocused: isFocused,
  _$disabled: disabled,
  _$error: false,
  _$positive: false,
  _$adjoined: false,
  _$size: size,
  _$required: required,
};
</script>

<Root data-basvelte="input" {...sharedProps} {...rootProps}>
  {#if startEnhancer !== null}
    <StartEnhancer
      {...sharedProps}
      {...startEnhancerProps}
      _$position="{ENHANCER_POSITION.start}">
      {startEnhancer}
    </StartEnhancer>
  {/if}
  <BaseInput
    {...$$restProps}
    bind:value
    overrides="{overrides}"
    adjoined="{getAdjoinedProp(startEnhancer, endEnhancer)}" />
  {#if endEnhancer !== null}
    <EndEnhancer
      {...sharedProps}
      {...endEnhancerProps}
      _$position="{ENHANCER_POSITION.end}">
      {endEnhancer}
    </EndEnhancer>
  {/if}
</Root>
