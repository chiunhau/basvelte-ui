<script>
import Div from '../../common/Div.svelte';
import { getSizeStyles } from '../utils';
</script>

<Div
  styled="{({ $theme }) => ({
    ...$theme.typography.font200,
    marginTop: $theme.sizing.scale700,
    marginLeft: $theme.sizing.scale800,
    marginRight: $theme.sizing.scale800,
    paddingTop: $theme.sizing.scale500,
    paddingBottom: $theme.sizing.scale500,
    textAlign: $theme.direction === 'rtl' ? 'left' : 'right',
  })}"
  {...$$restProps}><slot /></Div>
