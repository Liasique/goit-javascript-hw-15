const fontSizeControl = document.getElementById('font-size-control');
const textSpan = document.getElementById('text');

textSpan.style.fontSize = fontSizeControl.value + 'px';

const textResizing = () => {
  textSpan.style.fontSize = `${fontSizeControl.value}px`;
};

fontSizeControl.addEventListener('input', textResizing);
