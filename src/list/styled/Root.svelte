<script>
import Div from '../../common/Div.svelte';
</script>

<Div
  styled="{({ $theme }) => {
    return {
      alignItems: 'center',
      backgroundColor: $theme.colors.backgroundPrimary,
      display: 'flex',
      listStyleType: 'none',
      width: '100%',
    };
  }}"
  {...$$restProps}><slot /></Div>
