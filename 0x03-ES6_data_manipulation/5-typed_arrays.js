export default function createInt8TypedArray(length, position, value) {
  if (position >= length || position < 0) {
      throw Error('Position outside range');
  }
  const newBuffer = new ArrayBuffer(length);
  const newView = new DataView(newBuffer, 0, length);
  const newArray = new Int8Array(newBuffer);
  newArray[position] = value;
  return newView;
}
