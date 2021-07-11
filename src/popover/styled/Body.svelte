<script>
import Div from '../../common/Div.svelte';
import { getBodyStyles } from '../utils';
export let ref;
</script>

<Div bind:ref styled="{getBodyStyles}" {...$$restProps}><slot /></Div>
