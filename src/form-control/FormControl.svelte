<script>
import { getOverrides } from '../styles';

import {
  Label as StyledLabel,
  Caption as StyledCaption,
  ControlContainer as StyledControlContainer,
} from './styled/index.js';

function chooseRenderedHint(caption, error, positive, sharedProps) {
  if (error && typeof error !== 'boolean') {
    return typeof error === 'function' ? error(sharedProps) : error;
  }

  if (positive && typeof positive !== 'boolean') {
    return typeof positive === 'function' ? positive(sharedProps) : positive;
  }

  if (caption) {
    return typeof caption === 'function' ? caption(sharedProps) : caption;
  }

  return null;
}

export let overrides = {};
export let label = null;
export let caption = null;
export let disabled = false;
export let error;
export let positive;
export let htmlFor;

$: sharedProps = {
  _$disabled: !!disabled,
  _$error: !!error,
  _$positive: !!positive,
};

const [Label, labelProps] = getOverrides(overrides.Label, StyledLabel);
const [Caption, captionProps] = getOverrides(overrides.Caption, StyledCaption);
const [ControlContainer, controlContainerProps] = getOverrides(
  overrides.ControlContainer,
  StyledControlContainer
);

const hint = chooseRenderedHint(caption, error, positive, sharedProps);
</script>

{#if label}
  <Label
    data-basvelte="form-control-label"
    htmlFor="{htmlFor}"
    {...sharedProps}
    {...labelProps}>
    {label}
  </Label>
{/if}
<ControlContainer
  data-basvelte="form-control-container"
  {...sharedProps}
  {...controlContainerProps}>
  <slot />
  {#if caption || error || positive}
    <Caption
      data-basvelte="form-control-caption"
      {...sharedProps}
      {...captionProps}>
      {hint}
    </Caption>
  {/if}
</ControlContainer>
