export const getProps = (allProps, theme) => {
  const { style, css, ...props } = allProps;

  const styledKeys = Object.keys(props).filter((key) => key.startsWith('_$'));

  const styledProps = styledKeys
    .map((key) => ({ [key.substr(1)]: props[key] }))
    .reduce((acc, val) => ({ ...acc, ...val }), {});

  const restKeys = Object.keys(props).filter((key) => !key.startsWith('_$'));

  const restProps = restKeys
    .map((key) => ({ [key]: props[key] }))
    .reduce((acc, val) => ({ ...acc, ...val }), {});

  console.log(styledProps);
  console.log(restProps);

  const classNames =
    typeof style === 'function'
      ? css({
          ...style({ ...styledProps, $theme: theme }),
        })
      : css({ ...style });

  return { class: classNames, ...restProps };
};
