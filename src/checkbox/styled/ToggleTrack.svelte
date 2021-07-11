<script>
import Div from '../../common/Div.svelte';
import { STYLE_TYPE } from '../constants';
import { getBackgroundColor } from '../utils';
</script>

<Div
  styled="{(props) => {
    if (props.$checkmarkType === STYLE_TYPE.toggle) {
      const borderRadius = props.$theme.borders.useRoundedCorners
        ? props.$theme.borders.radius200
        : null;
      return {
        alignItems: 'center',
        backgroundColor: getBackgroundColor(props),
        borderTopLeftRadius: borderRadius,
        borderTopRightRadius: borderRadius,
        borderBottomRightRadius: borderRadius,
        borderBottomLeftRadius: borderRadius,
        display: 'flex',
        height: props.$theme.sizing.scale600,
        justifyContent: props.$checked ? 'flex-end' : 'flex-start',
        marginTop: props.$theme.sizing.scale100,
        marginBottom: props.$theme.sizing.scale100,
        marginLeft: props.$theme.sizing.scale100,
        marginRight: props.$theme.sizing.scale100,
        width: props.$theme.sizing.scale1000,
      };
    }

    if (props.$checkmarkType === STYLE_TYPE.toggle_round) {
      let backgroundColor = props.$theme.colors.toggleTrackFill;
      if (props.$disabled) {
        backgroundColor = props.$theme.colors.toggleTrackFillDisabled;
      } else if ((props.$error || props.$isError) && props.$checked) {
        backgroundColor = props.$theme.colors.tickFillError;
      }
      return {
        alignItems: 'center',
        backgroundColor,
        borderTopLeftRadius: '7px',
        borderTopRightRadius: '7px',
        borderBottomRightRadius: '7px',
        borderBottomLeftRadius: '7px',
        display: 'flex',
        height: props.$theme.sizing.scale550,
        marginTop: props.$theme.sizing.scale200,
        marginBottom: props.$theme.sizing.scale100,
        marginLeft: props.$theme.sizing.scale200,
        marginRight: props.$theme.sizing.scale100,
        width: props.$theme.sizing.scale1000,
      };
    }

    return {};
  }}"
  {...$$restProps}><slot /></Div>
