<script>
import Div from '../../common/Div.svelte';
</script>

<Div
  styled="{({ $theme }) => ({
    ...$theme.typography.font200,
    color: $theme.colors.contentSecondary,
    marginTop: $theme.sizing.scale600,
    marginLeft: $theme.sizing.scale800,
    marginRight: $theme.sizing.scale800,
    marginBottom: $theme.sizing.scale700,
  })}"
  {...$$restProps}><slot /></Div>
