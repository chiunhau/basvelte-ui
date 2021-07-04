<script>
import { createEventDispatcher } from 'svelte';
import { getOverrides } from '../styles';
import { BaseButton as StyledButton } from './styled-components';
import ButtonInternals from './ButtonInternals.svelte';
import { KIND, SHAPE, SIZE } from './constants';

export let disabled = false;
export let isLoading = false;
export let isSelected = false;
export let kind = KIND.primary;
export let startEnhancer = null;
export let endEnhancer = null;
export let overrides = {};
export let ref = null;
export let shape = SHAPE.default;
export let size = SIZE.default;

const dispatch = createEventDispatcher();

const internalOnClick = (e) => {
  if (isLoading) {
    e.preventDefault();
    return;
  }
  console.log('internalOnClick');
  dispatch('click', e);
};

const [Button, buttonProps] = getOverrides(overrides.Button, StyledButton);

const sharedProps = {
  _$disabled: disabled,
  _$isLoading: isLoading,
  _$isSelected: isSelected,
  _$kind: kind,
  _$shape: shape,
  _$size: size,
};
</script>

<Button
  data-baseweb="button"
  bind:this="{ref}"
  on:click="{internalOnClick}"
  on:blur
  on:focus
  {...buttonProps}
  {...sharedProps}>
  <ButtonInternals
    startEnhancer="{startEnhancer}"
    endEnhancer="{endEnhancer}"
    sharedProps="{sharedProps}">
    <slot />
  </ButtonInternals>
</Button>
