<script>
import Div from '../../common/Div.svelte';
import { getResponsiveNumber, getResponsiveValue } from '../utils';
import { getMediaQueries } from '../../helpers/responsive-helpers.js';
</script>

<Div
  styled="{({
    $theme,
    $align = null,
    $order = null,
    $gridColumns = $theme.grid.columns,
    $gridGaps = $theme.grid.gaps,
    $gridGutters = $theme.grid.gutters,
    $gridUnit = $theme.grid.unit,
    $skip = [0, 0, 0],
    $span = [1, 1, 1],
  }) => {
    const mediaQueries = getMediaQueries($theme.breakpoints);
    const cellStyles = mediaQueries.reduce(
      (acc, cur, idx) => {
        if (getResponsiveNumber($span, idx) === 0) {
          return {
            ...acc,
            [cur]: {
              width: '0',
              paddingLeft: '0',
              paddingRight: '0',
              marginLeft: '0',
              marginRight: '0',
              display: 'none',
            },
          };
        }
        return {
          ...acc,
          [cur]: {
            display: 'block',
            width: `${
              (100 / getResponsiveNumber($gridColumns, idx)) *
              Math.min(
                getResponsiveNumber($span, idx),
                getResponsiveNumber($gridColumns, idx)
              )
            }%`,
            marginLeft: `${
              (100 / getResponsiveNumber($gridColumns, idx)) *
              Math.min(
                getResponsiveNumber($skip, idx),
                getResponsiveNumber($gridColumns, idx) - 1
              )
            }%`,
            paddingLeft: `${
              getResponsiveNumber($gridGutters, idx) / 2
            }${$gridUnit}`,
            paddingRight: `${
              getResponsiveNumber($gridGutters, idx) / 2
            }${$gridUnit}`,
            marginBottom: `${getResponsiveNumber($gridGaps, idx)}${$gridUnit}`,
            alignSelf: getResponsiveValue($align, idx),
            order: getResponsiveNumber($order, idx),
          },
        };
      },
      {
        width: '100%',
        paddingLeft: `${getResponsiveNumber($gridGutters, 0) / 2}${$gridUnit}`,
        paddingRight: `${getResponsiveNumber($gridGutters, 0) / 2}${$gridUnit}`,
        marginBottom: `${getResponsiveNumber($gridGaps, 0)}${$gridUnit}`,
        alignSelf: getResponsiveValue($align, 0),
        order: getResponsiveNumber($order, 0),
      }
    );
    return {
      boxSizing: 'border-box',
      ...cellStyles,
    };
  }}"
  {...$$restProps}>
  <slot />
</Div>
