<script>
import Div from '../../common/Div.svelte';
</script>

<Div
  styled="{({ $isLoading }) => {
    console.log($isLoading);
    if ($isLoading) {
      return {
        display: 'flex',
        opacity: 0,
        height: 0,
      };
    }
    return {
      display: 'inline-flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    };
  }}"
  {...$$restProps}>
  <slot />
</Div>
