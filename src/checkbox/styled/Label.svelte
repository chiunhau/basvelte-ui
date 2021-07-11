<script>
import Div from '../../common/Div.svelte';
import { getLabelColor, getLabelPadding } from '../utils';
import { STYLE_TYPE } from '../constants';
</script>

<Div
  styled="{(props) => {
    const { $theme, $checkmarkType } = props;
    const { typography } = $theme;
    return {
      flex: $checkmarkType === STYLE_TYPE.toggle ? 'auto' : null,
      verticalAlign: 'middle',
      ...getLabelPadding(props),
      color: getLabelColor(props),
      ...typography.LabelMedium,
      lineHeight: '24px',
    };
  }}"
  {...$$restProps}><slot /></Div>
