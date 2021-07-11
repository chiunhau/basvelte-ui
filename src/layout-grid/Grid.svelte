<script>
import { setContext } from 'svelte';
import { getOverrides } from '../styles';
import { Grid as DefaultStyledGrid } from './styled/index.js';

export let align = undefined;
export let behavior = undefined;
export let gridColumns = undefined;
export let gridGaps = undefined;
export let gridGutters = undefined;
export let gridMargins = undefined;
export let gridMaxWidth = undefined;
export let gridUnit = undefined;
export let overrides = {};

setContext('basvelte-ui:layoutGrid', {
  gridColumns,
  gridGaps,
  gridGutters,
  gridUnit,
});

const [StyledGrid, overrideProps] = getOverrides(
  overrides.Grid,
  DefaultStyledGrid
);
</script>

<StyledGrid
  _$align="{align}"
  _$behavior="{behavior}"
  _$gridGutters="{gridGutters}"
  _$gridMargins="{gridMargins}"
  _$gridMaxWidth="{gridMaxWidth}"
  _$gridUnit="{gridUnit}"
  {...overrideProps}>
  <slot />
</StyledGrid>
