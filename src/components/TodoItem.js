import React, {Component} from 'react';
import classNames from 'classnames';
import logo from './img/check.svg';
import checkNon from './img/check-non.svg';

import './TodoItem.css';

class TodoItem extends Component {
    render(){
        let url = logo;
        const {item,onClick}=this.props;
        if(item.isComples===false) url=checkNon;
        return(
            <div className='TodoItem'>
                <img onClick={onClick} src={url} width={32} height={32}/>
                <p className={classNames({'iscomplete':item.isComples})}>  
                    {item.title}
                </p>
            </div>
        );
    }
}
export default TodoItem;