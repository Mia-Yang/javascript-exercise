export default function countTypesNumber(source) {
  // TODO 6: 在这里写实现代码
  const count = Object.values(source); // 方法返回一个给定对象自己的所有可枚举属性值的数组
  return count.map(num => parseInt(num, 10)).reduce((x, y) => x + y);
}
