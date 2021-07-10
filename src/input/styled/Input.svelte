<script>
import Input from '../../common/Input.svelte';
import { getInputStyles } from '../utils';
</script>

<Input styled="{getInputStyles}" {...$$restProps} on:blur on:focus on:change />
