<script>
import Div from '../../common/Div.svelte';
import { getRootStyles } from '../utils';
</script>

<Div styled="{getRootStyles}" {...$$restProps}>
  <slot />
</Div>
