export default function createIteratorObject(report) {
  const keys = Object.keys(report.allEmployees);
  const newList = [];
  for (const key of keys) {
    newList.push(...report.allEmployees[key]);
  }
  return newList;
}
