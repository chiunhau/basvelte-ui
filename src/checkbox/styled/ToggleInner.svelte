<script>
import Div from '../../common/Div.svelte';
import { STYLE_TYPE } from '../constants';
</script>

<Div
  styled="{(props) => {
    if (props.$checkmarkType === STYLE_TYPE.toggle) {
      const backgroundColor = () => {
        if (props.$disabled) {
          return props.$theme.colors.sliderHandleInnerFillDisabled;
        }

        if (props.$isActive && props.$checked) {
          return props.$theme.colors.sliderHandleInnerFillSelectedActive;
        }

        if (props.$isHovered && props.$checked) {
          return props.$theme.colors.sliderHandleInnerFillSelectedHover;
        }

        return props.$theme.colors.sliderHandleInnerFill;
      };
      return {
        height: props.$theme.sizing.scale300,
        width: props.$theme.sizing.scale0,
        borderTopLeftRadius: props.$theme.borders.radius100,
        borderTopRightRadius: props.$theme.borders.radius100,
        borderBottomRightRadius: props.$theme.borders.radius100,
        borderBottomLeftRadius: props.$theme.borders.radius100,
        backgroundColor: backgroundColor(),
      };
    }

    if (props.$checkmarkType === STYLE_TYPE.toggle_round) {
      return {};
    }

    return {};
  }}"
  {...$$restProps}><slot /></Div>
