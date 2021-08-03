export function addressFormat(address: string) {
  const word1 = address.slice(0, 4);
  const word2 = address.slice(address.length - 4, address.length);
  return word1 + '...' + word2;
}

export function addressLongFormat(address: string) {
  const word1 = address.slice(0, 8);
  const word2 = address.slice(address.length - 4, address.length);
  return word1 + '...' + word2;
}

export function addressLongestFormat(address: string) {
  const word1 = address.slice(0, 10);
  const word2 = address.slice(address.length - 8, address.length);
  return word1 + '...' + word2;
}
