import React, { Component } from 'react';
import axios from 'axios';
import StudentList from './StudentList';
import SingleStudent from './SingleStudent';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
      selectedStudent: {}
    };
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    this.getStudents();
  }

  async getStudents() {
    console.log('fetching');
    try {
      const { data } = await axios.get('/student');
      this.setState({ students: data });
    } catch (err) {
      console.error(err);
    }
  }

  handleClick(student) {
    this.setState({ selectedStudent: student })
  }

  render() {
    return (
      <div>
        <h1>Students</h1>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Tests</th>
            </tr>
          </thead>
          <StudentList students={this.state.students} handleClick={this.handleClick} />
          {this.state.selectedStudent.id ? <SingleStudent student={this.state.selectedStudent} /> : null}
        </table>
      </div>
    );
  }
}
