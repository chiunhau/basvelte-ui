<script>
import Div from '../../common/Div.svelte';
</script>

<Div
  styled="{({ $theme }) => {
    return {
      ...$theme.typography.LabelMedium,
      color: $theme.colors.contentPrimary,
      marginTop: 0,
      marginBottom: 0,
    };
  }}"
  {...$$restProps}><slot /></Div>
