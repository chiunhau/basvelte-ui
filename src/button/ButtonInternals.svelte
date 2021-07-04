<script>
import { getOverrides } from '../styles';

import {
  StartEnhancer as StyledStartEnhancer,
  EndEnhancer as StyledEndEnhancer,
} from './styled/index.js';

export let overrides = {};
export let startEnhancer = null;
export let endEnhancer = null;
export let sharedProps = {};

const [StartEnhancer, startEnhancerProps] = getOverrides(
  overrides.StartEnhancer,
  StyledStartEnhancer
);
const [EndEnhancer, endEnhancerProps] = getOverrides(
  overrides.EndEnhancer,
  StyledEndEnhancer
);
</script>

{#if startEnhancer !== null && startEnhancer !== undefined}
  <StartEnhancer {...startEnhancerProps} {...sharedProps}>
    {startEnhancer}
  </StartEnhancer>
{/if}
<slot />
{#if endEnhancer !== null && endEnhancer !== undefined}
  <EndEnhancer {...endEnhancerProps} {...sharedProps}>
    {endEnhancer}
  </EndEnhancer>
{/if}
