export default function find00OldPerson(collection) {
  // TODO 4: 在这里写实现代码
  return collection.find(person => person.age < 2020 - 2000 && person.age > 2020 - 2009).name;
}
