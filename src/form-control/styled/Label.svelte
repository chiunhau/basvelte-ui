<script>
import Label from '../../common/Label.svelte';
</script>

<Label
  styled="{(props) => {
    const {
      $disabled,
      $theme: { colors, sizing, typography },
    } = props;
    return {
      ...typography.font250,
      fontWeight: 500,
      width: '100%',
      color: $disabled ? colors.contentSecondary : colors.contentPrimary,
      display: 'block',
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
  {...$$restProps}><slot /></Label>
