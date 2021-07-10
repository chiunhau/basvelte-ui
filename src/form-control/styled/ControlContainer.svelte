<script>
import Div from '../../common/Div.svelte';
export let ref;
</script>

<Div
  bind:ref
  styled="{({ $theme: { sizing } }) => {
    return {
      width: '100%',
      marginBottom: sizing.scale600,
    };
  }}"
  {...$$restProps}><slot /></Div>
