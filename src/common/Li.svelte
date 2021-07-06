<script>
import { getContext } from 'svelte';
import { themeContextKey } from '../styles';
import { getProps } from './utils';
</script>

<li {...getProps($$restProps, getContext(themeContextKey))}><slot /></li>
