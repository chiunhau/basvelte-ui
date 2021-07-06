<script>
import Li from '../../common/Li.svelte';
import { OPTION_LIST_SIZE } from '../constants';
import { getFontColor, getBackgroundColor } from '../utils';
</script>

<Li
  styled="{(props) => {
    const { $disabled, $theme, $size } = props;
    return {
      ...($size === OPTION_LIST_SIZE.compact
        ? $theme.typography.font100
        : $theme.typography.font200),
      position: 'relative',
      display: 'block',
      color: getFontColor(props),
      cursor: $disabled ? 'not-allowed' : 'pointer',
      backgroundColor: getBackgroundColor(props),
      transitionProperty: 'color, background-color',
      transitionDuration: $theme.animation.timing200,
      transitionTimingFunction: $theme.animation.easeOutCurve,
      marginBottom: 0,
      paddingTop:
        $size === OPTION_LIST_SIZE.compact
          ? $theme.sizing.scale100
          : $theme.sizing.scale300,
      paddingBottom:
        $size === OPTION_LIST_SIZE.compact
          ? $theme.sizing.scale100
          : $theme.sizing.scale300,
      paddingRight:
        $size === OPTION_LIST_SIZE.compact
          ? $theme.sizing.scale900
          : $theme.sizing.scale600,
      paddingLeft:
        $size === OPTION_LIST_SIZE.compact
          ? $theme.sizing.scale900
          : $theme.sizing.scale600,
      ':focus': {
        outline: 'none',
      },
    };
  }}"
  {...$$restProps}>
  <slot />
</Li>
