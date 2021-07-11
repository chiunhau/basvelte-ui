<script>
import Div from '../../common/Div.svelte';
import { getInnerStyles } from '../utils';
export let ref;
</script>

<Div bind:ref styled="{getInnerStyles}" {...$$restProps}><slot /></Div>
