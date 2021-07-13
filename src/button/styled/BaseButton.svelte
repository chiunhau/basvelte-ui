<script>
import Button from '../../common/Button.svelte';
import {
  getBorderRadiiStyles,
  getFontStyles,
  getKindStyles,
  getPaddingStyles,
  getShapeStyles,
} from './utils';
export let ref;
</script>

<Button
  styled="{({
    $theme,
    $size,
    $kind,
    $shape,
    $isLoading,
    $isSelected,
    $disabled,
    $isFocusVisible,
  }) => ({
    display: 'inline-flex',
    flexDirection: $isLoading ? 'column' : 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderLeftWidth: 0,
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderBottomWidth: 0,
    borderLeftStyle: 'none',
    borderTopStyle: 'none',
    borderRightStyle: 'none',
    borderBottomStyle: 'none',
    outline: 'none',
    boxShadow: $isFocusVisible
      ? `inset 0 0 0 3px ${$theme.colors.accent}`
      : 'none',
    textDecoration: 'none',
    WebkitAppearance: 'none',
    transitionProperty: 'background',
    transitionDuration: $theme.animation.timing200,
    transitionTimingFunction: $theme.animation.linearCurve,
    cursor: 'pointer',
    ':disabled': {
      cursor: 'not-allowed',
      backgroundColor: $theme.colors.buttonDisabledFill,
      color: $theme.colors.buttonDisabledText,
    },
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 0,
    verticalAlign: 'middle',
    ...getFontStyles({ $theme, $size }),
    ...getBorderRadiiStyles({ $theme, $size, $shape }),
    ...getPaddingStyles({ $theme, $size, $shape }),
    ...getKindStyles({ $theme, $kind, $isLoading, $isSelected, $disabled }),
    ...getShapeStyles({ $theme, $shape, $size }),
  })}"
  {...$$restProps}
  on:click
  on:blur
  on:focus
  bind:ref>
  <slot />
</Button>
