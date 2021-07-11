<script>
import Label from '../../common/Label.svelte';
</script>

<Label
  styled="{(props) => {
    const { $disabled, $labelPlacement } = props;
    return {
      flexDirection:
        $labelPlacement === 'top' || $labelPlacement === 'bottom'
          ? 'column'
          : 'row',
      display: 'flex',
      alignItems:
        $labelPlacement === 'top' || $labelPlacement === 'bottom'
          ? 'center'
          : 'flex-start',
      cursor: $disabled ? 'not-allowed' : 'pointer',
      userSelect: 'none',
    };
  }}"
  {...$$restProps}><slot /></Label>
