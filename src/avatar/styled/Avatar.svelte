<script>
import Img from '../../common/Img.svelte';
import { getSize } from '../utils';
</script>

<Img
  styled="{(props) => {
    const themedSize = getSize(props);

    return {
      borderTopLeftRadius: '50%',
      borderTopRightRadius: '50%',
      borderBottomRightRadius: '50%',
      borderBottomLeftRadius: '50%',
      boxSizing: 'border-box',
      display: 'block',
      height: themedSize,
      width: themedSize,
      objectFit: 'cover',
    };
  }}"
  {...$$restProps}
  on:error />
