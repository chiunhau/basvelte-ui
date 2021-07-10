<script>
import Div from '../../common/Div.svelte';
</script>

<Div
  styled="{({ $theme }) => {
    return {
      ...$theme.typography.ParagraphMedium,
      color: $theme.colors.contentPrimary,
    };
  }}"
  {...$$restProps}><slot /></Div>
