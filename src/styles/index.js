import { Client } from 'styletron-engine-atomic';

const styletronClient = new Client();

export const themeContextKey = 'basvelte-ui:theme';

export const css = (style) => styletronClient.renderStyle(style);

export function getOverride(override) {
  if (override && typeof override === 'object') {
    return override.component;
  }
  return false;
}

export function getOverrideProps(override) {
  if (override && typeof override === 'object') {
    if (typeof override.props === 'object') {
      return {
        ...override.props,
        $style: override.style,
      };
    } else {
      return {
        $style: override.style,
      };
    }
  }
  return {};
}

export const getOverrides = (override, defaultComponent) => {
  const Component = getOverride(override) || defaultComponent;

  const props = getOverrideProps(override);
  return [Component, props];
};

export const getProps = (allProps, theme) => {
  const { styled, ...props } = allProps;

  const styledKeys = Object.keys(props).filter((key) => key.startsWith('_$'));

  const styledProps = styledKeys
    .map((key) => ({ [key.substr(1)]: props[key] }))
    .reduce((acc, val) => ({ ...acc, ...val }), {});

  const restKeys = Object.keys(props).filter((key) => !key.startsWith('_$'));

  const restProps = restKeys
    .map((key) => ({ [key]: props[key] }))
    .reduce((acc, val) => ({ ...acc, ...val }), {});

  const classNames =
    typeof styled === 'function'
      ? css({
          ...styled({ ...styledProps, $theme: theme }),
        })
      : css({ ...styled });

  return { class: classNames, ...restProps };
};
