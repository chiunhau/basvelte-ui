<script>
import Div from '../../common/Div.svelte';
</script>

<Div
  styled="{({ $theme }) => {
    const marginStartDir =
      $theme.direction === 'rtl' ? 'marginRight' : 'marginLeft';
    const marginEndDir =
      $theme.direction === 'rtl' ? 'marginLeft' : 'marginRight';

    return {
      ...$theme.typography.font550,
      color: $theme.colors.contentPrimary,
      marginTop: $theme.sizing.scale900,
      marginBottom: $theme.sizing.scale600,
      [marginStartDir]: $theme.sizing.scale800,
      // Slightly more margin than left side to leave room for close button
      [marginEndDir]: $theme.sizing.scale900,
    };
  }}"
  {...$$restProps}><slot /></Div>
