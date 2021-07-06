<script>
import Li from '../../common/Li.svelte';
</script>

<Li
  styled="{({ $theme }) => {
    const paddingX = $theme.sizing.scale300;
    const paddingY = $theme.sizing.scale200;
    return {
      ...$theme.typography.font250,
      color: $theme.colors.colorPrimary,
      paddingTop: paddingY,
      paddingBottom: paddingY,
      paddingRight: paddingX,
      paddingLeft: paddingX,
    };
  }}"
  {...$$restProps}>
  <slot />
</Li>
