import React , {Component} from 'react';
import Form from './Form';
import Table from './Table';
class App extends Component {
  state = {
        tasks : []
  }
  removeTask = (index) => {
        const {tasks} = this.state;
        if(tasks[index].isCompleted)
        this.setState({
              tasks: tasks.filter((x, i) => {
                    return i !== index;
              })
        })
        else{
              this.setState({
                    tasks: tasks
              });
        }
  }
  handleBoxChange = (index) => {
        const {tasks} = this.state;
        this.setState({
              tasks: tasks.filter((x, i) => { 
                    if(i===index){
                          x.isCompleted = !x.isCompleted;
                          return x;
                    }
                    else return x;
              })
        })
  }
  handleSubmit = (tasks) => {
        var obj ={
              task: tasks.task,
              isCompleted: false
        };
        if(obj.task === '')alert("Empty Task");
        else 
            this.setState({
                  tasks: [obj, ...this.state.tasks]
                });
  }

  render() {
        const {tasks} = this.state;
        return(
              <div className="container">
                    <Form handleSubmit = {this.handleSubmit} />
                    <Table handleBoxChange = {this.handleBoxChange} taskDetail = {tasks} removeTask = {this.removeTask}/>
              </div>
        )
  }
}

export default App;
