export default function createEmployeesObject(departmentName, employees) {
  const newA = {
    [departmentName]: [...employees],
  };
  return newA;
}
