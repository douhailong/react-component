// 检查是否支持 flex gap
export function checkSupportedFlex() {
  const flexEle = document.createElement('div');

  flexEle.style.display = 'flex';
  flexEle.style.flexDirection = 'column';
  flexEle.style.rowGap = '1px';
  flexEle.appendChild(document.createElement('div'));
  flexEle.appendChild(document.createElement('div'));
  document.body.appendChild(flexEle);

  const supported = flexEle.scrollHeight === 1;

  document.body.removeChild(flexEle);

  return supported;
}
