export const getInitials = (name) => {
  const words = name.split(' ');
  const initials = words.map((word) => word[0]);
  return initials.slice(0, 2).join('').toUpperCase();
};
