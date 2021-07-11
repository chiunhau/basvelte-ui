<script>
import Input from '../../common/Input.svelte';
import { getInputStyles } from '../utils';
export let ref = null;
</script>

<Input
  bind:ref
  styled="{getInputStyles}"
  {...$$restProps}
  on:blur
  on:focus
  on:change />
