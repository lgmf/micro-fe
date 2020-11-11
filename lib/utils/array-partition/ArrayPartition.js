export default function ArrayPartition(arr = [], conditionFn = () => true) {
  const truthyValues = [];
  const falsyValues = [];

  arr.forEach((item) => {
    if (conditionFn(item)) {
      truthyValues.push(item);
    } else {
      falsyValues.push(item);
    }
  });

  return [truthyValues, falsyValues];
}
