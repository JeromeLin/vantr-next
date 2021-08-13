export function noop() {}

export function omit<T extends object, K extends keyof T>(
  objects: T,
  fields: K[],
): Omit<T, K> {
  const clone = { ...objects };

  if (Array.isArray(fields)) {
    fields.forEach((key) => {
      delete clone[key];
    });
  }
  return clone;
}

export function pick<T extends object, K extends keyof T>(
  values: T,
  fields: K[],
): Pick<T, K> {
  const clone: any = {};

  if (Array.isArray(fields)) {
    fields.forEach((key) => {
      clone[key] = values[key];
    });
  }

  return clone;
}
