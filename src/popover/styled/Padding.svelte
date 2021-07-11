<script>
import Div from '../../common/Div.svelte';
export let ref;
</script>

<Div
  bind:ref
  styled="{{
    paddingLeft: '12px',
    paddingTop: '12px',
    paddingRight: '12px',
    paddingBottom: '12px',
  }}"
  {...$$restProps}><slot /></Div>
