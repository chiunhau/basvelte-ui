<script>
import { createEventDispatcher } from 'svelte';
import { getOverrides } from '../styles';
import {
  BaseButton as StyledBaseButton,
  LoadingSpinner as StyledLoadingSpinner,
  LoadingSpinnerContainer as StyledLoadingSpinnerContainer,
  StartEnhancer as StyledStartEnhancer,
  EndEnhancer as StyledEndEnhancer,
  Internal as StyledInternal,
} from './styled/index.js';
import { isFocusVisible as checkIsFocusVisible } from '../utils/focusVisible';
import { KIND, SHAPE, SIZE } from './constants';

export let disabled = false;
export let isLoading = false;
export let isSelected = false;
export let kind = KIND.primary;
export let overrides = {};
export let ref = null;
export let shape = SHAPE.default;
export let size = SIZE.default;

let isFocusVisible = false;

const dispatch = createEventDispatcher();

const internalOnClick = (e) => {
  if (isLoading) {
    e.preventDefault();
    return;
  }

  dispatch('click', e);
};

const handleFocus = (e) => {
  if (checkIsFocusVisible(e)) {
    isFocusVisible = true;
  }

  dispatch('focus', e);
};

const handleBlur = (e) => {
  if (isFocusVisible !== false) {
    isFocusVisible = false;
  }

  dispatch('blur', e);
};

const [Button, buttonProps] = getOverrides(overrides.Button, StyledBaseButton);
const [LoadingSpinner, loadingSpinnerProps] = getOverrides(
  overrides.LoadingSpinner,
  StyledLoadingSpinner
);
const [LoadingSpinnerContainer, loadingSpinnerContainerProps] = getOverrides(
  overrides.LoadingSpinnerContainer,
  StyledLoadingSpinnerContainer
);
const [StartEnhancer, startEnhancerProps] = getOverrides(
  overrides.StartEnhancer,
  StyledStartEnhancer
);
const [EndEnhancer, endEnhancerProps] = getOverrides(
  overrides.EndEnhancer,
  StyledEndEnhancer
);

const [Internal, internalProps] = getOverrides(
  overrides.Internal,
  StyledInternal
);

$: sharedProps = {
  _$disabled: disabled,
  _$isLoading: isLoading,
  _$isSelected: isSelected,
  _$kind: kind,
  _$shape: shape,
  _$size: size,
  _$isFocusVisible: isFocusVisible,
};
</script>

<Button
  data-basvelte="button"
  bind:ref
  on:click="{internalOnClick}"
  on:blur="{handleBlur}"
  on:focus="{handleFocus}"
  {...isLoading
    ? {
        'aria-label': 'loading',
        'aria-busy': 'true',
      }
    : {}}
  {...buttonProps}
  {...sharedProps}
  {...$$restProps}>
  <Internal {...internalProps} {...sharedProps}>
    {#if $$slots.startEnhancer}
      <StartEnhancer {...startEnhancerProps} {...sharedProps}>
        <slot name="startEnhancer" />
      </StartEnhancer>
    {/if}
    <slot />
    {#if $$slots.endEnhancer}
      <EndEnhancer {...endEnhancerProps} {...sharedProps}>
        <slot name="endEnhancer" />
      </EndEnhancer>
    {/if}
  </Internal>
  {#if isLoading}
    <LoadingSpinnerContainer {...sharedProps} {...loadingSpinnerContainerProps}>
      <LoadingSpinner {...sharedProps} {...loadingSpinnerProps} />
    </LoadingSpinnerContainer>
  {/if}
</Button>
