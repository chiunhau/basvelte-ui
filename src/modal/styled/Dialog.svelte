<script>
import Div from '../../common/Div.svelte';
import { getSizeStyles } from '../utils';
export let ref;
</script>

<Div
  bind:ref
  styled="{(props) => {
    const { $animate, $isOpen, $isVisible, $size, $theme } = props;
    return {
      position: 'relative',
      backgroundColor: $theme.colors.backgroundPrimary,
      borderTopLeftRadius: $theme.borders.surfaceBorderRadius,
      borderTopRightRadius: $theme.borders.surfaceBorderRadius,
      borderBottomRightRadius: $theme.borders.surfaceBorderRadius,
      borderBottomLeftRadius: $theme.borders.surfaceBorderRadius,
      marginLeft: $theme.sizing.scale600,
      marginTop: $theme.sizing.scale600,
      marginRight: $theme.sizing.scale600,
      marginBottom: $theme.sizing.scale600,
      ...getSizeStyles($size),

      // Animation
      opacity: $isVisible && $isOpen ? 1 : 0,
      transform: $isVisible ? 'translateY(0)' : 'translateY(20px)',
      ...($animate
        ? {
            transitionProperty: 'opacity, transform',
            transitionDuration: $theme.animation.timing400,
            transitionTimingFunction: $theme.animation.easeOutCurve,
          }
        : null),
      // Reset interactivity properties set by container
      userSelect: 'text',
      pointerEvents: $isOpen ? 'all' : 'none',

      // We move focus to the modal, but we don't want the blue outline style
      ':focus': {
        outline: 'none',
      },
    };
  }}"
  {...$$restProps}><slot /></Div>
