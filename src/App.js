import React, {Component} from 'react';
import Radio from './components/Radio';
import Table from './components/Table';

class App extends Component {
  constructor() {
      super()
    this.state = {
      parameterState: "name"
    }
  }

  sortByParameter=(parameter)=> {
    this.setState({
       parameterState:parameter
    });
    // set state of 'parameterState' here
  }

  render() {
    return (
      <div className='container-fluid'>
        <center>
          <h1>Birthday Records</h1>
        </center>
        <Radio sortByParameter={this.sortByParameter} parameterState ={this.state.parameterState}/>
        <Table sortParameter ={this.state.parameterState}/>
      </div>
);


  }
}

export default App;
