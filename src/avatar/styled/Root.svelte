<script>
import Div from '../../common/Div.svelte';
import { getSize } from '../utils';
</script>

<Div
  styled="{(props) => {
    const { $didImageFailToLoad } = props;
    const themedSize = getSize(props);
    return {
      backgroundColor: $didImageFailToLoad ? props.$theme.colors.primary : null,
      borderTopLeftRadius: '50%',
      borderTopRightRadius: '50%',
      borderBottomRightRadius: '50%',
      borderBottomLeftRadius: '50%',
      boxSizing: 'border-box',
      display: 'inline-block',
      height: $didImageFailToLoad ? themedSize : null,
      width: $didImageFailToLoad ? themedSize : null,
    };
  }}"
  {...$$restProps}>
  <slot />
</Div>
