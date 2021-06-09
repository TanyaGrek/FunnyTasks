import './index.scss';

export const firstRender = () => {
  const rootElement = document.getElementById('root');
  if (rootElement) {
    rootElement.innerHTML = '<h1 class="h1">Hello, World!!!</h1>';
  }
};

firstRender();
