<script>
import Div from '../../common/Div.svelte';
export let ref;
</script>

<Div bind:ref styled="" {...$$restProps}><slot /></Div>
