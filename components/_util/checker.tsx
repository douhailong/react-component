// 检查是否支持 flex gap
export function checkSupportedFlex() {
    const div = document.createElement('div');

    div.style.display = 'flex';
    div.style.flexDirection = 'column';
    div.style.rowGap = '1px';
    div.appendChild(document.createElement('div'));
    div.appendChild(document.createElement('div'));
    document.body.appendChild(div);

    const supported = div.scrollHeight === 1;

    document.body.removeChild(div);

    return supported;
}
