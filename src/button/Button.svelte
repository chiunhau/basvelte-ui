<script>
import { createEventDispatcher } from 'svelte';
import { getOverrides } from '../styles';
import {
  BaseButton as StyledBaseButton,
  LoadingSpinner as StyledLoadingSpinner,
  LoadingSpinnerContainer as StyledLoadingSpinnerContainer,
} from './styled/index.js';
import ButtonInternals from './ButtonInternals.svelte';
import { isFocusVisible as checkIsFocusVisible } from '../utils/focusVisible';
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
  {...buttonProps}
  {...sharedProps}>
  {#if isLoading}
    <div style="opacity: 0; display: flex; height: 0px;">
      <ButtonInternals
        startEnhancer="{startEnhancer}"
        endEnhancer="{endEnhancer}"
        sharedProps="{sharedProps}">
        <slot />
      </ButtonInternals>
    </div>
    <LoadingSpinnerContainer {...sharedProps} {...loadingSpinnerContainerProps}>
      <LoadingSpinner {...sharedProps} {...loadingSpinnerProps} />
    </LoadingSpinnerContainer>
  {:else}
    <ButtonInternals
      startEnhancer="{startEnhancer}"
      endEnhancer="{endEnhancer}"
      sharedProps="{sharedProps}">
      <slot />
    </ButtonInternals>
  {/if}
</Button>
