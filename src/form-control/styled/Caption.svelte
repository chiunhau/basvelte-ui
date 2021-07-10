<script>
import Div from '../../common/Div.svelte';
export let ref;
</script>

<Div
  bind:ref
  styled="{(props) => {
    const {
      $error,
      $positive,
      $theme: { colors, sizing, typography },
    } = props;

    let fontColor = colors.contentSecondary;
    if ($error) {
      fontColor = colors.negative400;
    } else if ($positive) {
      fontColor = colors.positive400;
    }

    return {
      ...typography.font100,
      color: fontColor,
      paddingTop: 0,
      paddingRight: 0,
      paddingBottom: 0,
      paddingLeft: 0,
      marginTop: sizing.scale300,
      marginRight: 0,
      marginBottom: sizing.scale300,
      marginLeft: 0,
    };
  }}"
  {...$$restProps}><slot /></Div>
