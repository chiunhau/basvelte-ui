<script>
import Div from '../../common/Div.svelte';
</script>

<Div
  styled="{({ $theme: { sizing } }) => {
    return {
      width: '100%',
      marginBottom: sizing.scale600,
    };
  }}"
  {...$$restProps}><slot /></Div>
