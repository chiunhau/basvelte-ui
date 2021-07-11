<script>
import Div from '../../common/Div.svelte';
export let ref = null;
</script>

<Div
  bind:ref
  styled="{(props) => {
    const {
      $animate,
      $isOpen,
      $isVisible,
      $theme,
      $unstable_ModalBackdropScroll,
    } = props;
    if ($unstable_ModalBackdropScroll) {
      return {};
    }
    return {
      position: 'fixed',
      right: 0,
      bottom: 0,
      top: 0,
      left: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      // Remove grey highlight
      WebkitTapHighlightColor: 'transparent',
      // Disable scroll capabilities.
      touchAction: 'none',
      opacity: $isVisible && $isOpen ? 1 : 0,
      ...($animate
        ? {
            transitionProperty: 'opacity',
            transitionDuration: $theme.animation.timing400,
            transitionTimingFunction: $theme.animation.easeOutCurve,
          }
        : null),
    };
  }}"
  {...$$restProps}><slot /></Div>
