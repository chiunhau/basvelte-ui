<script>
import { setContext } from 'svelte';
import { getOverrides } from '../styles';
import { Grid as DefaultStyledGrid } from './styled/index.js';

export let align;
export let behavior;
export let gridColumns;
export let gridGaps;
export let gridGutters;
export let gridMargins;
export let gridMaxWidth;
export let gridUnit;
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
