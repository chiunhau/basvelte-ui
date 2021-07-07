export const getResponsiveValue = (responsive, i) => {
  if (!responsive) {
    return null;
  }
  if (!Array.isArray(responsive)) {
    return responsive;
  }
  if (typeof responsive[i] === 'undefined') {
    return responsive[responsive.length - 1];
  }
  return responsive[i];
};

export const getResponsiveNumber = (responsive, i) => {
  const res = getResponsiveValue(responsive, i);
  return typeof res === 'number' ? res : 0;
};
