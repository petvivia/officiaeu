function mapObjectToArray<T>(obj: T): { [K in keyof T]: T[K][] } {
  const result: { [K in keyof T]: T[K][] } = {} as any;
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      result[key] = [obj[key]];
    }
  }
  return result;
}
