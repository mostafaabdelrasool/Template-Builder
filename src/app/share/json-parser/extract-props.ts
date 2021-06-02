
export function ExtractAndMapAllPorps(source, destination) {
  if (!source || !destination) {
    throw "Not valid";
  }
  Object.keys(source).forEach(x => destination[x] = source[x])
}
