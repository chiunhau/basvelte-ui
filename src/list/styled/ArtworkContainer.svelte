<script>
import Div from '../../common/Div.svelte';
import { artworkSizeToValue } from '../utils';
</script>

<Div
  styled="{({ $artworkSize, $sublist, $theme }) => {
    let sizeValue =
      typeof $artworkSize === 'number'
        ? $artworkSize
        : artworkSizeToValue($artworkSize, Boolean($sublist));

    if (sizeValue > 36) {
      return {
        alignItems: 'center',
        display: 'flex',
        paddingLeft: $theme.sizing.scale600,
        paddingRight: $theme.sizing.scale600,
      };
    }

    return {
      alignItems: 'center',
      display: 'flex',
      justifyContent: 'center',
      width: $theme.sizing.scale1600,
    };
  }}"
  {...$$restProps}><slot /></Div>
