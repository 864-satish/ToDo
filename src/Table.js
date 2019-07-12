import React, {Component} from 'react';
import './App.css';

const TableHeader = () => {
      return (
        <thead >
          <tr>
            <th>TO-DO</th>
          </tr>
        </thead>
      )
}

const TableBody = (props) => {
      const rows = props.taskDetail.map((row, index) => {
            const checked = props.taskDetail[index].isCompleted;
            // var buttonName = (checked)? "Delete" : "Edit";
            var checkBox = (checked)? "completed" : "pending";
            return(
            <tr key={index}>
                  
                  <td contentEditable = {!checked} className={checkBox}>{row.task}</td>
                  <td>
                        <input type="checkbox" checked = {props.taskDetail[index].isCompleted} onChange= {() => props.handleBoxChange(index)}/>
                        {/* <button onClick = {() => props.handleBoxChange(index)}>Done</button> */}
                  </td>
                  {(checked) ? <td >
                      {/* <button className="delete" onClick = {(checked) ? () => props.removeTask(index) : () => props.editTask(index)}>{buttonName}</button> */}
                      <button className="delete" onClick = {() => props.removeTask(index)}>Delete</button>
                  </td> : null}
              </tr>
          )
      })
    return <tbody>{rows}</tbody>
  }
  class Table extends Component {
        render() {
              const {taskDetail, handleBoxChange, removeTask} = this.props;

              return (
                    <table>
                          <TableHeader/>
                          <TableBody taskDetail = {taskDetail} handleBoxChange = {handleBoxChange} removeTask = {removeTask}/>
                          <p>Click on tasks to edit</p>
                    </table>
              )
        }
  }
  export default Table