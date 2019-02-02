import React from 'react'
import axios from 'axios'

export default class Main extends React.Component {
  constructor() {
    super()
    this.state = {
      students: []
    }
  }

  async componentDidMount() {
    try {
      const {data} = await axios('/student')
      this.setState({students: data})
    } catch(err) {
      console.error(err)
    }
  }

  render() {
    console.log(this.state.students[0])
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {this.state.students.map(student => {
            return (
              <tr key={student.id}>
                <td>{student.fullName}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    )
  }
}