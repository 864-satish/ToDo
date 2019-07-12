import React, {Component} from 'react';

class Form extends Component {
      constructor(props) {
            super(props)
            this.initialState = {
                  task: '',
                  isCompleted: false
            }
            this.state = this.initialState;
      }

      handleChange = (event) => {
            const {name, value} = event.target;
            this.setState({
                  [name]: value
            })
      }

      submitFrom = (event) => {
            this.props.handleSubmit(this.state)
            this.setState(this.initialState);
            event.preventDefault();
      }

      render() {
            const {task} = this.state;

            return(
                 <form onSubmit = {this.submitFrom}>
                       <label>Task</label>
                       <input type='text'
                              name='task'
                              value = {task}
                              onChange = {this.handleChange}
                        />
                        <input type="button" value="Submit" onClick = {this.submitFrom}/>
                 </form> 
            )
      }
}
export default Form