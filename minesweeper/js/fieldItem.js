export class itemField {
  constructor(isBomb, place) {
    this.isBomb = isBomb;
    this.place = place;
    this.content = isBomb !== true ? '' : 'b';
    this.element = '';

    // window.addEventListener('click', () => {
    //   this.element.innerHTML = this.content;
    // });
  }

  setBoxContent(value) {}

  moveToBattlefield() {
    const item = document.createElement('div');
    item.classList.add('field-item');
    this.field.append(item);
    item.addEventListener('click', () => {
      console.log(item.palce);
    });
    this.element = item;
    item.addEventListener('click', () => {
      item.innerHTML = item.dataset.content;
    });
  }
}
