export class itemField {
  constructor(isBomb, place) {
    this.isBomb = isBomb;
    this.place = place;
  }
}

export function getItem(isBomb, place) {
  const newItem = new itemField(isBomb, place);
  return newItem;
}
