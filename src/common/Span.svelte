<script>
import { getContext } from 'svelte';
import { themeContextKey } from '../styles';
import { getProps } from './utils';
</script>

<span {...getProps($$restProps, getContext(themeContextKey))}><slot /></span>
