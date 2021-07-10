<script>
import Div from '../../common/Div.svelte';
export let ref;
import { getRootStyles } from '../../input/styled/utils.js';
</script>

<Div
  bind:ref
  styled="{(props) => {
    return getRootStyles({ ...props, $hasIconTrailing: false });
  }}"
  {...$$restProps}><slot /></Div>
