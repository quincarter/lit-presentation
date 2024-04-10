export const _toConsumableArray = (arr: any) => {
  return (
    _arrayWithoutHoles(arr) ||
    _iterableToArray(arr) ||
    _unsupportedIterableToArray(arr) ||
    _nonIterableSpread()
  );
};

export const _nonIterableSpread = () => {
  throw new TypeError(
    "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
  );
};

export const _unsupportedIterableToArray = (o: any, minLen = 1) => {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
};

export const _iterableToArray = (iter: any) => {
  if (
    (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null) ||
    iter["@@iterator"] != null
  )
    return Array.from(iter);
};

export const _arrayWithoutHoles = (arr: any) => {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
};

export const _arrayLikeToArray = (arr: any, len = 1) => {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
};
