<script>
import Div from '../../common/Div.svelte';
import { BEHAVIOR } from '../constants';
import { getResponsiveNumber, getResponsiveValue } from '../utils';
import { getMediaQueries } from '../../helpers/responsive-helpers.js';
</script>

<Div
  styled="{({
    $theme,
    $align = null,
    $behavior = BEHAVIOR.fixed,
    $gridGutters = $theme.grid.gutters,
    $gridMargins = $theme.grid.margins,
    $gridMaxWidth = $theme.grid.maxWidth,
    $gridUnit = $theme.grid.unit,
  }) => {
    const mediaQueries = getMediaQueries($theme.breakpoints);
    const gridStyles = mediaQueries.reduce(
      (acc, cur, idx) => {
        return {
          ...acc,
          [cur]: {
            paddingLeft: `${
              getResponsiveNumber($gridMargins, idx) -
              getResponsiveNumber($gridGutters, idx) / 2 -
              0.5
            }${$gridUnit}`,
            paddingRight: `${
              getResponsiveNumber($gridMargins, idx) -
              getResponsiveNumber($gridGutters, idx) / 2 -
              0.5
            }${$gridUnit}`,
            alignItems: getResponsiveValue($align, idx),
          },
        };
      },
      {
        paddingLeft: `${
          getResponsiveNumber($gridMargins, 0) -
          getResponsiveNumber($gridGutters, 0) / 2 -
          0.5
        }${$gridUnit}`,
        paddingRight: `${
          getResponsiveNumber($gridMargins, 0) -
          getResponsiveNumber($gridGutters, 0) / 2 -
          0.5
        }${$gridUnit}`,
        alignItems: getResponsiveValue($align, 0),
      }
    );
    return {
      boxSizing: 'border-box',
      display: 'flex',
      flexWrap: 'wrap',
      marginLeft: 'auto',
      marginRight: 'auto',
      maxWidth:
        $behavior === BEHAVIOR.fixed
          ? `${
              $gridMaxWidth +
              2 * getResponsiveNumber($gridMargins, Infinity) -
              1
            }${$gridUnit}`
          : null,
      ...gridStyles,
    };
  }}"
  {...$$restProps}>
  <slot />
</Div>
