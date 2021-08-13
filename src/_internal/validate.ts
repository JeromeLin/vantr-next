const toTypeString = (value: unknown): string =>
  Object.prototype.toString.call(value);

export const isString = (value: unknown): value is string =>
  typeof value === 'string';

export const isArray = Array.isArray;

export const isSymbol = (value: unknown): value is symbol =>
  typeof value === 'symbol';

export const isNumber = (value: unknown): value is number =>
  typeof value === 'number' ||
  (isObjectLike(value) && toTypeString(value) == '[object Number]');

export const isNull = (value: unknown): value is null => value === null;

export const isUndefined = (value: unknown): value is undefined =>
  value === undefined;

export const isDefine = <T>(value: T): value is NonNullable<T> =>
  !isUndefined(value) && !isNull(value);

export const isFunction = (value: unknown): value is Function =>
  typeof value === 'function';

export const isObject = (
  value: unknown,
): value is Record<string | number, unknown> =>
  value !== null && typeof value === 'object';

export const isObjectLike = (value: unknown) =>
  typeof value === 'object' && value !== null;

export const isPlainObject = <T>(value: unknown): value is T => {
  if (!isObjectLike(value) || toTypeString(value) != '[object Object]')
    return false;
  if (Object.getPrototypeOf(value) === null) return true;
  let proto = value;
  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }
  return Object.getPrototypeOf(value) === proto;
};

export const isMap = (value: unknown): value is Map<any, any> =>
  toTypeString(value) === '[object Map]';

export const isSet = (value: unknown): value is Set<any> =>
  toTypeString(value) === '[object Set]';

export const isDate = (value: unknown): value is Date =>
  isObjectLike(value) && toTypeString(value) == '[object Date]';

export const isRegExp = (value: unknown): value is RegExp =>
  toTypeString(value) === '[object RegExp]';

export const isPromise = <T = unknown>(value: unknown): value is Promise<T> =>
  isObject(value) && isFunction(value.then) && isFunction(value.catch);
