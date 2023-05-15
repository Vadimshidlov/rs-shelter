export class itemField {
  constructor(isBomb, place) {
    this.isBomb = isBomb;
    this.place = place;
    this.content = isBomb !== true ? "" : "b";
  }
}

// export function getItem(isBomb, place) {
//   const newItem = new itemField(isBomb, place);
//   return newItem;
// }
