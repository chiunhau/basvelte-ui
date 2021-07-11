<script>
import Div from '../../common/Div.svelte';
import { getRootStyles } from '../../input/utils.js';
</script>

<Div
  styled="{(props) => {
    return getRootStyles({ ...props, $hasIconTrailing: false });
  }}"
  {...$$restProps}><slot /></Div>
