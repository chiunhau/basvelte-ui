<script>
  import {setContext} from 'svelte'
  import {themeContextKey} from './index'
  import {LightTheme} from '../themes/index.js';

  setContext(themeContextKey, LightTheme)
</script>

<slot/>