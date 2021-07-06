<script>
import Li from '../../common/Ul.svelte';
import { OPTION_LIST_SIZE } from '../constants';
</script>

<Li
  styled="{({ $theme, $size }) => {
    return {
      ...($size === OPTION_LIST_SIZE.compact
        ? $theme.typography.font100
        : $theme.typography.font200),
      position: 'relative',
      display: 'block',
      color: $theme.colors.menuFontDisabled,
      textAlign: 'center',
      cursor: 'not-allowed',
      backgroundColor: 'transparent',
      marginBottom: 0,
      paddingTop: $theme.sizing.scale800,
      paddingBottom: $theme.sizing.scale800,
      paddingRight: $theme.sizing.scale800,
      paddingLeft: $theme.sizing.scale800,
    };
  }}"
  {...$$restProps}>
  <slot />
</Li>
