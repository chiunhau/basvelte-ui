<script>
import { setContext } from 'svelte';
import { themeContextKey } from './styles/index';
import { LightTheme } from './themes/index.js';
import { LayersManager } from './layer/index.js';

setContext(themeContextKey, LightTheme);
</script>

<LayersManager>
  <slot />
</LayersManager>
