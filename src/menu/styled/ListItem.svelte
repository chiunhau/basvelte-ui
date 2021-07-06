<script>
import ListItemElement from './ListItemElement.svelte';
export let item;
</script>

<ListItemElement {...$$restProps}>
  <slot />
</ListItemElement>
