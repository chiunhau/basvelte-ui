<script>
import Div from '../../common/Div.svelte';
import { getInputContainerStyles } from '../../input/utils.js';
</script>

<Div styled="{(props) => getInputContainerStyles(props)}" {...$$restProps}
  ><slot /></Div>
