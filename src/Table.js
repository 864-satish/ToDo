import React, { Component } from "react";
import "./App.css";
const TableBody = props => {
  const rows = props.taskDetail.map(x => {
    const checked = x.isCompleted;
    const checkBox = (checked)?"completed": "pending";
    return (
      <tr className="bord" key= {x.id}>
        <td className= "checkboxWidth">
          <div className="round"> 
            <input 
              id={x.id}
              type="checkbox"  
              checked = {checked} 
              onChange = {()=> props.handleBoxChange(x.id)}
            />
            <label htmlFor={x.id} />
          </div>
        </td>
        <td contentEditable = {!checked} className = {checkBox}>
          {x.task}
        </td>
        <td>
          <button onClick = {()=> props.removeTask(x.id)} className="X">X</button>
        </td> 

      </tr>
    );
  });
  return <tbody>{rows}</tbody> ;
}

class Table extends Component {
  render() {
    const { taskDetail, handleBoxChange, removeTask, completedTask, allTask, activeTask, clearCompleted, completeAll} = this.props;
    return (
      <div>
        <table className="table">
        <TableBody
          taskDetail={taskDetail}
          handleBoxChange={handleBoxChange}
          removeTask={removeTask}
        />
        </table>
        <div className= "footer2 ">
            <label>{taskDetail.filter(x => !x.isCompleted).length} items left</label>
            <button className="bottom" onClick = {allTask}>All</button>
            <button className="bottom"onClick = {activeTask}>Active</button>
            <button className="bottom" onClick = {completedTask}>Completed</button>
            <button className="bottom" onClick = {clearCompleted}>Clear completed</button>
            <button className="bottom" onClick = {completeAll}>✅</button>
        </div>
        <p>Click on tasks to edit</p>
      </div>
    );
  }
}
export default Table;
