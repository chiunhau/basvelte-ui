<script>
import Div from '../../common/Div.svelte';
</script>

<Div
  styled="{({ $theme }) => {
    const marginDirection =
      $theme.direction === 'rtl' ? 'marginLeft' : 'marginRight';
    return {
      display: 'flex',
      [marginDirection]: $theme.sizing.scale500,
    };
  }}"
  {...$$restProps}>
  <slot />
</Div>
