<script>
import Div from '../../common/Div.svelte';
import { getAnchorStyles } from '../utils';
export let ref;
</script>

<Div
  bind:ref
  styled="{(props) => {
    const { $animating, $isOpen, $isVisible, $theme } = props;
    return {
      backgroundColor: $theme.colors.backgroundPrimary,
      borderTopLeftRadius: $theme.borders.surfaceBorderRadius,
      borderTopRightRadius: $theme.borders.surfaceBorderRadius,
      borderBottomRightRadius: $theme.borders.surfaceBorderRadius,
      borderBottomLeftRadius: $theme.borders.surfaceBorderRadius,
      ...getAnchorStyles(props),
      opacity: $isVisible && $isOpen ? 1 : 0,
      transitionProperty: $animating ? 'opacity, transform' : null,
      transitionDuration: $animating ? $theme.animation.timing400 : null,
      transitionTimingFunction: $animating
        ? $theme.animation.easeOutCurve
        : null,
      display: 'flex',
      position: 'fixed',
    };
  }}"
  {...$$restProps}><slot /></Div>
