import React ,{Component} from 'react';
import './Buttoncurrent.css';
import classNames from 'classnames';

class Buttoncurrent extends Component {

    render(){
        const {item,ed,current}=this.props;
        return(
            <div className='Buttoncurrent'>
                <button className={classNames({'active':current===item})}onClick={ed}>{item}</button>
            </div>
        );
    }
}
export default Buttoncurrent;