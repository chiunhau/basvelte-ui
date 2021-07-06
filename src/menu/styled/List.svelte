<script>
import Ul from '../../common/Ul.svelte';
</script>

<Ul
  styled="{({ $theme, $isFocusVisible }) => {
    return {
      backgroundColor: $theme.colors.menuFill,
      position: 'relative',
      marginTop: 0,
      marginBottom: 0,
      marginLeft: 0,
      marginRight: 0,
      paddingTop: $theme.sizing.scale300,
      paddingBottom: $theme.sizing.scale300,
      paddingLeft: 0,
      paddingRight: 0,
      borderTopLeftRadius: $theme.borders.popoverBorderRadius,
      borderTopRightRadius: $theme.borders.popoverBorderRadius,
      borderBottomRightRadius: $theme.borders.popoverBorderRadius,
      borderBottomLeftRadius: $theme.borders.popoverBorderRadius,
      boxShadow: $theme.lighting.shadow600,
      overflow: 'auto',
      ':focus': {
        outline: $isFocusVisible ? `3px solid ${$theme.colors.accent}` : 'none',
      },
    };
  }}"
  {...$$restProps}>
  <slot />
</Ul>
