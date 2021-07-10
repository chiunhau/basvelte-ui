<script>
import Svg from '../common/Svg.svelte';
export let ref;
</script>

<Svg
  bind:ref
  styled="{({ $theme, $size, $color }) => {
    console.log($size);
    let size = $theme.sizing.scale600;
    if ($size) {
      if ($theme.sizing[$size]) {
        size = $theme.sizing[$size];
      } else if (typeof $size === 'number') {
        size = `${$size}px`;
      } else {
        size = $size;
      }
    }

    let color = 'currentColor';
    if ($color) {
      if ($theme.colors[$color]) {
        color = $theme.colors[$color];
      } else {
        color = $color;
      }
    }

    return {
      display: 'inline-block',
      fill: color,
      color: color,
      height: size,
      width: size,
    };
  }}"
  {...$$restProps}
  ><slot />
</Svg>
