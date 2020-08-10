export default function collectCarNumberCount(collection) {
  // TODO 7: 在这里写实现代码
  const count = collection.filter(carNumber => carNumber.substr(0, 2) === '粤A').length;
  return count;
}
