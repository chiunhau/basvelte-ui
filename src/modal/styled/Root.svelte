<script>
import Div from '../../common/Div.svelte';
export let ref = null;
</script>

<Div
  bind:ref
  styled="{(props) => {
    const { $isOpen } = props;
    return {
      position: 'fixed',
      overflow: 'auto',
      right: 0,
      bottom: 0,
      top: 0,
      left: 0,
      pointerEvents: $isOpen ? 'auto' : 'none',
    };
  }}"
  {...$$restProps}><slot /></Div>
