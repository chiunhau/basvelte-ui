<script>
import Div from '../../common/Div.svelte';
import { getInputContainerStyles } from './utils';
</script>

<Div styled="{getInputContainerStyles}" {...$$restProps}>
  <slot />
</Div>
