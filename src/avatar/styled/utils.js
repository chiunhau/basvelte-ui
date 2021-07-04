export const getSize = (props) => {
  const { $size, $theme } = props;

  const defaultSize = $theme.sizing.scale1000;
  const size = $size || defaultSize;
  return $theme.sizing[size] || size;
};
