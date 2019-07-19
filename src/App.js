import React , {Component} from 'react';
import Form from './Form';
import Table from './Table';
import shortid from 'shortid';

class App extends Component {
      state = {
            tasks : [],
            tempTasks : [],
      }
  allTask = () => {
        this.setState({
              tasks : this.state.tempTasks
        })
  }
  activeTask = () => {
        this.setState({
              tasks : this.state.tempTasks.filter(x =>{
                    return !x.isCompleted;
              })
        })
  }
  completedTask = () =>{
      this.setState({
            tasks : this.state.tempTasks.filter(x => {
                  return x.isCompleted;
                })
      })
  }
  clearCompleted = () => {
        this.setState({
              tasks : this.state.tempTasks.filter(x => {
                    return !x.isCompleted;
              }),
              tempTasks : this.state.tempTasks.filter(x => {
                  return !x.isCompleted;
              })
        })
  }
  completeAll = () => {
      const {tasks} = this.state;
      let flag = tasks.some(x => {
            return x.isCompleted === false;
      });
      if(flag){
            this.setState({
                  tasks: tasks.filter(x => {
                        if(!x.isCompleted)x.isCompleted = !x.isCompleted;
                        return x;
                  })
            })
      }else {
            this.setState({
                  tasks : tasks.filter(x => {
                         x.isCompleted = !x.isCompleted;
                        return x;
                  })
            })
      }
  }
  removeTask = (id) => {
        this.setState({
              tempTasks : this.state.tempTasks.filter((x) => {
                    return x.id !== id;
              }),
              tasks : this.state.tempTasks.filter((x) => {
                  return x.id !== id;
            })
        })
  }

  handleBoxChange = id => {
            const {tasks} = this.state;
            this.setState({
                  tasks: tasks.filter(x => {
                        if(x.id === id){
                              x.isCompleted = ! x.isCompleted;
                              return x;
                         }
                        else return x;
                  })
            })
      }
  handleSubmit = (tasks) => {
        var obj ={
              id: shortid.generate(),
              task: tasks.task,
              isCompleted: false
        };
        if(obj.task !== '')
      this.setState({
            tasks: [obj, ...this.state.tasks],
            tempTasks : [obj, ...this.state.tempTasks]
          });
      
  }

  render() {
        return(
              <div className="todo">
                    <Form handleSubmit = {this.handleSubmit}/>
                    <Table 
                    handleBoxChange = {this.handleBoxChange} 
                    taskDetail = {this.state.tasks} 
                    removeTask = {this.removeTask} 
                    completedTask = {this.completedTask}
                    allTask = {this.allTask}
                    activeTask = {this.activeTask}
                    clearCompleted = {this.clearCompleted}
                    completeAll = {this.completeAll}/>
              </div>
        )
  }
}

export default App;
