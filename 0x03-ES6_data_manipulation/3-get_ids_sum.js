export default function getStudentIdsSum(students) {
  // Calculate the sum of IDs using reduce and arrow function
  return students.reduce((total, { id }) => total + id, 0);
}
