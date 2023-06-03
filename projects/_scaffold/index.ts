import './style.css';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <span>[This element is injected via JavaScript]<span>
  </div>
`;
