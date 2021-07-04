<script>
  import {getContext} from 'svelte'
  import {themeContextKey} from '../styles'
  import {getProps} from './utils'
</script>

<button {...getProps($$restProps, getContext(themeContextKey))}><slot /></button>

