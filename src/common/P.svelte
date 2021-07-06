<script>
import { getContext } from 'svelte';
import { themeContextKey } from '../styles';
import { getProps } from './utils';
</script>

<p {...getProps($$restProps, getContext(themeContextKey))}><slot /></p>
