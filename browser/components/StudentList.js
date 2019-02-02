import React from 'react';

const StudentList = ({students, handleClick}) => {
  return (
    <tbody>
      {students.map(student => {
        return (
          <tr key={student.id} onClick={() => handleClick(student)}>
            <td>{student.fullName}</td>
            <td>Details</td>
          </tr>
        )
      })}
    </tbody>
  )
}

export default StudentList