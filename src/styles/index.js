import * as Elements from '../common';
import { Client } from 'styletron-engine-atomic';

const styletronClient = new Client();

export const css = (style) => styletronClient.renderStyle(style);

export const styled = (tag, style) =>
  class extends Elements[capital(tag)] {
    constructor(options) {
      const { props, ...restOptions } = options;

      super({
        ...restOptions,
        props: {
          ...props,
          style,
          css,
        },
      });
    }
  };

function capital(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

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

export const themeContextKey = 'basvelte-ui:theme';
