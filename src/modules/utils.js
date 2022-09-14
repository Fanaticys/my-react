export const getRandomColor = () => {
  const values = Array.from(Array(6), () => Math.floor(Math.random() * 10));
  return `#${values.join('')}`;
}