import React, { Component } from 'react';
import TodoItem from './components/TodoItem'
import checkAll from './components/img/list.svg';
// import classNames from 'classnames'
import './App.css';
class App extends Component {
  constructor(){
    super();
    this.state={
      todoItems: [
        {title:'Mua sữa',isComples:false    },
        {title:'Mua cà chua',isComples:true},
        {title:'Mua nước mắm',isComples:true}
      ]
    }
    this.onKeyUp=this.onKeyUp.bind(this);
    this.onChange=this.onChange.bind(this);
  }
  
  onItemClick(item) {
    return(event)=>{
      const isComples=item.isComples;
      const {todoItems}=this.state;
      const index=this.state.todoItems.indexOf(item);
      this.setState({
        todoItems:[
          ...todoItems.slice(0,index),
          {
            ...item,
            isComples:!isComples
          },
          ...todoItems.slice(index+1)
        ],
        newItem:''
      });

    };
  };
  onCheckAll(){
    
  }
  onKeyUp(event){
    let text=event.target.value;
    if(event.keyCode===13){
      if(!text){
        return;
      }
      if(!text.trim()){return};
      this.setState({
        todoItems:[
          {title:text,isComples:false},
          ...this.state.todoItems
        ],
        newItem:''

      });
    }
  };
  onChange(event){
    this.setState({
      newItem:event.target.value
    })
  }
  render(){
    const {todoItems}=this.state;
    let url=checkAll;
    return (
      <div className="App" > 

        <div className='header'>
          <img src={url} width={32} height={32}/>
          <input 
            onKeyUp={this.onKeyUp} 
            placeholder='Add a new item'
            value={this.state.newItem}
            onChange={this.onChange}
            >
          </input>
        </div>

        {
            todoItems.map((item,index) =>  
              <TodoItem
              key={index}  
              item={item}
              onClick={this.onItemClick(item)}
             />)
        }
      </div>
    );   
  }
  
}

export default App;

