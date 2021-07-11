<script>
import { getContext } from 'svelte';
import { getOverrides } from '../styles';
import { Cell as DefaultStyledCell } from './styled/index.js';

export let align = undefined;
export let order = undefined;
export let skip = undefined;
export let span = undefined;
export let overrides = {};

const gridContext = getContext('basvelte-ui:layoutGrid');

const [StyledCell, overrideProps] = getOverrides(
  overrides.Cell,
  DefaultStyledCell
);
</script>

<StyledCell
  _$align="{align}"
  _$gridColumns="{gridContext.gridColumns}"
  _$gridGap="{gridContext.gridGap}"
  _$gridGutters="{gridContext.gridGutters}"
  _$gridUnit="{gridContext.gridUnit}"
  _$order="{order}"
  _$skip="{skip}"
  _$span="{span}"
  {...overrideProps}>
  <slot />
</StyledCell>
