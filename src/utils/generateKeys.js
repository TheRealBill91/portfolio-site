export function generateKeys() {
  let keysArr = [];
  for (let i = 0; i < 3; i++) {
    keysArr.push(self.crypto.randomUUID());
  }
  return keysArr;
}
