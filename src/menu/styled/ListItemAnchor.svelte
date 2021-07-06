<script>
import A from '../../common/Ul.svelte';
import { getFontColor } from '../utils';
</script>

<A
  styled="{(props) => {
    return {
      display: 'block',
      color: getFontColor(props),
    };
  }}"
  {...$$restProps}>
  <slot />
</A>
