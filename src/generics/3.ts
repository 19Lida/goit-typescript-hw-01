function merge<T extends object, O extends object>(objA: T, objB: O): T & O {
  return Object.assign(objA, objB);
}
