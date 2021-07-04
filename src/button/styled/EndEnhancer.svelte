<script>
import Div from '../../common/Div.svelte';
</script>

<Div
  styled="{({ $theme }) => {
    const marginDirection =
      $theme.direction === 'rtl' ? 'marginRight' : 'marginLeft';
    return {
      display: 'flex',
      [marginDirection]: $theme.sizing.scale500,
    };
  }}"
  {...$$restProps}>
  <slot />
</Div>
