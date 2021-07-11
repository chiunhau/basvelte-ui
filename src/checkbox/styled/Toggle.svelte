<script>
import Div from '../../common/Div.svelte';
import { expandBorderStyles } from '../../styles/utils';
import { STYLE_TYPE } from '../constants';
</script>

<Div
  styled="{(props) => {
    if (props.$checkmarkType === STYLE_TYPE.toggle) {
      const borderRadius = props.$theme.borders.useRoundedCorners
        ? props.$theme.borders.radius200
        : null;
      return {
        ...expandBorderStyles(props.$theme.borders.border300),
        alignItems: 'center',
        backgroundColor: props.$theme.colors.mono100,
        borderTopLeftRadius: borderRadius,
        borderTopRightRadius: borderRadius,
        borderBottomRightRadius: borderRadius,
        borderBottomLeftRadius: borderRadius,
        boxShadow: props.$isFocusVisible
          ? `0 0 0 3px ${props.$theme.colors.accent}`
          : props.$theme.lighting.shadow400,
        outline: 'none',
        display: 'flex',
        justifyContent: 'center',
        height: props.$theme.sizing.scale800,
        width: props.$theme.sizing.scale800,
      };
    }

    if (props.$checkmarkType === STYLE_TYPE.toggle_round) {
      let backgroundColor = props.$theme.colors.toggleFill;
      if (props.$disabled) {
        backgroundColor = props.$theme.colors.toggleFillDisabled;
      } else if (props.$checked && (props.$error || props.$isError)) {
        backgroundColor = props.$theme.colors.borderError;
      } else if (props.$checked) {
        backgroundColor = props.$theme.colors.toggleFillChecked;
      }
      return {
        backgroundColor,
        borderTopLeftRadius: '50%',
        borderTopRightRadius: '50%',
        borderBottomRightRadius: '50%',
        borderBottomLeftRadius: '50%',
        boxShadow: props.$isFocusVisible
          ? `0 0 0 3px ${props.$theme.colors.accent}`
          : props.$isHovered && !props.$disabled
          ? props.$theme.lighting.shadow500
          : props.$theme.lighting.shadow400,
        outline: 'none',
        height: props.$theme.sizing.scale700,
        width: props.$theme.sizing.scale700,
        transform: props.$checked
          ? `translateX(${props.$theme.direction === 'rtl' ? '-100%' : '100%'})`
          : null,
        transition: `transform ${props.$theme.animation.timing200}`,
      };
    }

    return {};
  }}"
  {...$$restProps}><slot /></Div>
