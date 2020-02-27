import React, { Component } from 'react';
import TodoItem from './components/TodoItem'
import Buttoncurrent from './components/Buttoncurrent'
import checkAll from './components/img/list.svg';
// import Footer from './components/Footer';
import classNames from 'classnames'
import './App.css';
class App extends Component {
  constructor(){
    super();
    this.state={
      newItem:'',
      currentFilter: 'all',
      todoItems: [
        {title:'Mua sữa',isComples:false    },
        {title:'Mua cà chua',isComples:true},
        {title:'Mua nước mắm',isComples:true}
      ]
    }
    this.onKeyUp=this.onKeyUp.bind(this);
    this.onChange=this.onChange.bind(this);
    this.onClickButton=this.onClickButton.bind(this);
    this.onClickClear=this.onClickClear.bind(this);
  }
  onClear(item) {
    return(event)=>{
      const {todoItems}=this.state;
      const index=this.state.todoItems.indexOf(item);
      this.setState({
        todoItems:[
          ...todoItems.slice(0,index),
          ...todoItems.slice(index+1)
        ],
        newItem:''
      });

    };
  };
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
  onClickButton(item){
    return(event)=>{
      console.log(item);
      this.setState({
        currentFilter:item
      });
    }
  }
  onClickClear(){
    this.setState({
      todoItems:this.state.todoItems.filter(function(item){
        return item.isComples===false;
      })
    })
  }
  render(){
    let {todoItems}=this.state;
    let url=checkAll;
    let count=todoItems.length;
    let countIscomples=0;
    for(let item of todoItems){
      if(item.isComples!==true)countIscomples++;
    }
    
    switch(this.state.currentFilter){
      case 'completed':
      {
        todoItems=todoItems.filter(function(item){
          return item.isComples===true;
        });
        break;
      }
      case 'active':{
        todoItems=todoItems.filter(function(item){
          return item.isComples===false;
        });
        break;
      }
      default:break;;
    }
    const current=['all','active','completed'];
    return (
      <div className="App" > 
        <div className='brand'>
          todos
        </div>
        <div className='content'>
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
                onClear={this.onClear(item)}
          
              />)
          }
        </div>
            <div className={classNames('footer', {'isHollow':count===0})}>
              <p className='count-item-none'>{countIscomples} item left</p> 
              {
                current.map((item,index)=>
                  <Buttoncurrent
                  key={index}
                  item={item}
                  ed={this.onClickButton(item)}
                  current={this.state.currentFilter}
                  />
                )
              }
              <p className={classNames('delete-todolist', {'isHollow':count===countIscomples}) } onClick={this.onClickClear} >Clear completed</p>
            </div>
      </div>
    );   
  }
  
}

export default App;

