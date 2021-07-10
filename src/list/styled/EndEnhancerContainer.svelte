<script>
import Div from '../../common/Div.svelte';
</script>

<Div
  styled="{{
    alignItems: 'center',
    display: 'flex',
  }}"
  {...$$restProps}>
  <slot />
</Div>
