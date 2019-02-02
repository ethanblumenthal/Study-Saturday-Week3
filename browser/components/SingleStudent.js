import React from 'react';

const SingleStudent = ({student}) => {
  return (
    <div>
      <h3>{student.fullName}</h3>
      <h3>
        {Math.round(student.tests.map(test => test.grade).reduce((a, b) => a + b) / student.tests.length)}%
      </h3>
      <table>
        <tbody>
          <tr>
            <th>Subject</th>
            <th>Grade</th>
          </tr>
          {student.tests.map(test => {
            return (
              <tr key={test.id}>
                <td>{test.subject}</td>
                <td>{test.grade}%</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default SingleStudent