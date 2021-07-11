<script>
import Div from '../../common/Div.svelte';
import { getArrowStyles } from '../utils';
export let ref;
</script>

<Div bind:ref styled="{getArrowStyles}" {...$$restProps}><slot /></Div>
