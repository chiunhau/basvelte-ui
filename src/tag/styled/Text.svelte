<script>
import Span from '../../common/Span.svelte';
</script>

<Span
  styled="{({ $theme }) => {
    return {
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
      maxWidth: $theme.sizing.scale3200,
      order: $theme.direction === 'rtl' ? 1 : 0,
    };
  }}"
  {...$$restProps}>
  <slot />
</Span>
