import Carousel from './components/Carousel';
export default class ComponentFactory {
  constructor() {
    this.componentList = {
      Carousel,
    };
    this.init();
  }
  init() {
    const components = document.querySelectorAll('[data-component]');

    for (let i = 0; i < components.length; i++) {
      const element = components[i];
      const componentName = element.dataset.component;
      if (this.componentList[componentName]) {
        new this.componentList[componentName](element);
      } else {
        console.log(`La composante ${componentName}'existe pas`);
      }
    }
  }
}
