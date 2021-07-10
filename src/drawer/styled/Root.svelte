<script>
import Div from '../../common/Div.svelte';
export let ref;
</script>

<Div
  bind:ref
  styled="{(props) => {
    return {
      position: 'fixed',
      overflow: 'auto',
      right: 0,
      bottom: 0,
      top: 0,
      left: 0,
    };
  }}"
  {...$$restProps}><slot /></Div>
