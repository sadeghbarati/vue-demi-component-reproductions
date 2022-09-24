export default class {
  el: HTMLElement

  constructor(el: HTMLElement) {
    this.el = el
    this.initialize()
  }

  initialize() {
    this.el.dispatchEvent(new CustomEvent('initialize', { detail: this.el }))
  }
  
}
