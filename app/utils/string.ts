/**
 * Build supplied string by interpolating properties after delimiter(':') with the given parameters.
 *
 * @example
 * interpolate('/posts/:id', {id: 1})
 * => '/posts/1'
 *
 */
export function interpolate(
  str: string,
  params: { [key: string]: string | number }
): string {
  let updatedString = str;

  Object.keys(params).forEach((key) => {
    updatedString = updatedString.replace(`:${key}`, `${params[key]}`);
  });

  return updatedString;
}
