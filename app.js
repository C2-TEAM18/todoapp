import React from 'react';






class App extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
       toDoList:[]
    }
  }
  handleInput=(event)=>{
    var task = event.target.elements.todoTask.value
    if(task.length > 0){
      this.setState({
        toDoList : [...this.state.toDoList,task]
      })
      event.target.reset();
    }
    event.preventDefault();
    

  }
  handleDelete = (event,index) =>{
    var task = [...this.state.toDoList]
    task.splice(index,1)
    this.setState({
      toDoList:task
    })
  }
  
  
  render(){
    return (
      <div className="p-3 mb-2 bg-info text-dark">
      
      <div className="App">
      <div className="jumbotron jumbotron-fluid py-2">
  <div className="container">
    <h1 className="display-2">to-dos</h1>
    </div>
    </div>
    <form className="mb-3" onSubmit={this.handleInput}>
    <div className="input-group">

    <input type="text" name="todoTask" className="form-control" placeholder="enter task" autoComplete="off"/>
    <div className="input-group-append">
    <button type="submit" className="btn btn-outline-success bg-success text-white"> Add</button>
    </div>
    
    
    </div>
    
    
    </form>
    <ul className="list-group">
    {
      this.state.toDoList.map(
        (item,index)=>{
          return <li className="list-group-item " key={index}>
          {item}
          <button className="btn btn-sm btn-outline-danger float-right" onClick={(event)=>{this.handleDelete(event,index)}}> delete </button>
          </li>
        }


      )


    }


    </ul>

      </div>
      </div>
      
    );
   }
  }
  export default App;  
