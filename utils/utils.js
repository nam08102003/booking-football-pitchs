export const formatNumber = (value) => {
  if (!value) {
    return '0';
  }
  // eslint-disable-next-line no-param-reassign
  value += '';
  const list = value.split('.');
  const prefix = list[0].charAt(0) === '-' ? '-' : '';
  let num = prefix ? list[0].slice(1) : list[0];
  let result = '';
  while (num.length > 3) {
    result = `,${num.slice(-3)}${result}`;
    num = num.slice(0, num.length - 3);
  }
  if (num) {
    result = num + result;
  }
  return `${prefix}${result}${list[1] ? `.${list[1]}` : ''}`;
};

// export const findRouter = () => {

// }
export function isAntdPro() {
  if (typeof window !== 'undefined') return window.location.hostname === 'preview.pro.ant.design';
  return '';
}
