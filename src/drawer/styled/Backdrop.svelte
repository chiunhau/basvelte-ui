<script>
import Div from '../../common/Div.svelte';
export let ref;
</script>

<Div
  bind:ref
  on:click
  styled="{(props) => {
    const { $animating, $isOpen, $isVisible, $theme } = props;
    return {
      position: 'fixed',
      right: 0,
      bottom: 0,
      top: 0,
      left: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      WebkitTapHighlightColor: 'transparent',
      touchAction: 'none',
      opacity: $isVisible && $isOpen ? 1 : 0,
      ...($animating
        ? {
            transitionProperty: 'opacity',
            transitionDuration: $theme.animation.timing400,
            transitionTimingFunction: $theme.animation.easeOutCurve,
          }
        : null),
    };
  }}"
  {...$$restProps}><slot /></Div>
