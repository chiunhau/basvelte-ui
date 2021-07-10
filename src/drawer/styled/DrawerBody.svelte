<script>
import Div from '../../common/Div.svelte';
export let ref;
</script>

<Div
  bind:ref
  styled="{(props) => {
    const { $theme } = props;
    return {
      ...$theme.typography.font200,
      color: $theme.colors.contentPrimary,
      marginTop: $theme.sizing.scale900,
      marginBottom: $theme.sizing.scale900,
      marginLeft: $theme.sizing.scale900,
      marginRight: $theme.sizing.scale900,
      overflow: 'auto',
      width: '100%',
    };
  }}"
  {...$$restProps}><slot /></Div>
