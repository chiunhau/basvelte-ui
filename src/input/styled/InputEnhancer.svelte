<script>
import Div from '../../common/Div.svelte';
import {
  getFont,
  getInputEnhancerColors,
  getInputEnhancerPadding,
} from './utils';
</script>

<Div
  styled="{(props) => {
    const {
      $size,
      $disabled,
      $isFocused,
      $error,
      $positive,
      $theme: { colors, sizing, typography, animation },
    } = props;
    return {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transitionProperty: 'color, background-color',
      transitionDuration: animation.timing200,
      transitionTimingFunction: animation.easeOutCurve,
      ...getFont($size, typography),
      ...getInputEnhancerPadding($size, sizing),
      ...getInputEnhancerColors(
        $disabled,
        $isFocused,
        $error,
        $positive,
        colors
      ),
    };
  }}"
  {...$$restProps}>
  <slot />
</Div>
