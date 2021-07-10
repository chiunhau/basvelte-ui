<script>
import Button from '../../common/Button.svelte';
</script>

<Button
  on:click
  styled="{(props) => {
    const { $theme, $isFocusVisible } = props;
    const dir = $theme.direction === 'rtl' ? 'left' : 'right';
    return {
      // Reset button styles
      background: 'transparent',
      outline: 0,
      paddingLeft: 0,
      paddingTop: 0,
      paddingRight: 0,
      paddingBottom: 0,

      // colors
      color: $theme.colors.modalCloseColor,
      transitionProperty: 'color, border-color',
      transitionDuration: $theme.animation.timing200,
      borderLeftWidth: '1px',
      borderRightWidth: '1px',
      borderTopWidth: '1px',
      borderBottomWidth: '1px',
      borderLeftStyle: 'solid',
      borderRightStyle: 'solid',
      borderTopStyle: 'solid',
      borderBottomStyle: 'solid',
      borderLeftColor: 'transparent',
      borderRightColor: 'transparent',
      borderTopColor: 'transparent',
      borderBottomColor: 'transparent',
      ':hover': {
        color: $theme.colors.modalCloseColorHover,
      },
      ':focus': {
        outline: $isFocusVisible ? `3px solid ${$theme.colors.accent}` : 'none',
      },

      // Positioning
      position: 'absolute',
      top: $theme.sizing.scale500,
      [dir]: $theme.sizing.scale500,
      width: $theme.sizing.scale800,
      height: $theme.sizing.scale800,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      cursor: 'pointer',
    };
  }}"
  {...$$restProps}><slot /></Button>
