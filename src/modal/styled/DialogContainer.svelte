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
    return {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      minHeight: '100%',
      pointerEvents: 'none',
      userSelect: 'none',
      ...($unstable_ModalBackdropScroll
        ? {
            pointerEvents: 'auto',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            // Remove grey highlight
            WebkitTapHighlightColor: 'transparent',
            opacity: $isVisible && $isOpen ? 1 : 0,
            ...($animate
              ? {
                  transitionProperty: 'opacity',
                  transitionDuration: $theme.animation.timing400,
                  transitionTimingFunction: $theme.animation.easeOutCurve,
                }
              : null),
          }
        : {}),
    };
  }}"
  {...$$restProps}><slot /></Div>
