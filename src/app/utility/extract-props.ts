export function ExtractAndMapAllPorps(source: any, destination: any) {
    if (!source || !destination) {
      throw "Not valid";
    }
    Object.keys(source).forEach(x => destination[x] = source[x])
  }
  