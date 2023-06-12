export function getContext(context) {
  return function (type) {
    // eslint-disable-next-line no-invalid-this
    return type !== "webgl" ? context.apply(this, arguments) : null;
  };
}
