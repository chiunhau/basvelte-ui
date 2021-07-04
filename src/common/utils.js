import { css } from '../styles';

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
