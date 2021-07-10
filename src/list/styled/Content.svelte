<script>
import Div from '../../common/Div.svelte';
import { expandBorderStyles } from '../../styles/utils';
</script>

<Div
  styled="{({ $mLeft, $sublist, $theme }) => {
    return {
      ...expandBorderStyles($theme.borders.border100),
      alignItems: 'center',
      borderTopStyle: 'none',
      borderRightStyle: 'none',
      borderLeftStyle: 'none',
      display: 'flex',
      flexGrow: 1,
      height: $sublist ? '48px' : '72px',
      justifyContent: 'space-between',
      marginLeft: $mLeft ? $theme.sizing.scale600 : null,
      ...($theme.direction === 'rtl'
        ? { paddingLeft: $theme.sizing.scale600 }
        : { paddingRight: $theme.sizing.scale600 }),
    };
  }}"
  {...$$restProps}><slot /></Div>
