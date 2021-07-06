<script>
import { getContext } from 'svelte';
import { themeContextKey } from '../styles';
import { getProps } from './utils';
</script>

<ul {...getProps($$restProps, getContext(themeContextKey))}><slot /></ul>
