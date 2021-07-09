<script>
import Div from '../../common/Div.svelte';
</script>

<Div
  styled="{({ $zIndex }) => ({
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: $zIndex || null,
  })}"
  {...$$restProps}>
  <slot />
</Div>
