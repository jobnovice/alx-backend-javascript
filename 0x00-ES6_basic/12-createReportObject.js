export default function createReportObject(employeesList) {
  const empl = {
    allEmployees: { ...employeesList },
    getNumberOfDepartments(employeesList) {
      return Object.keys(employeesList).length;
    },
  };
  return empl;
}
