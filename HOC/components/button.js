import React from 'react'
import PropTypes from 'prop-types';
import {myEvents} from './events'




class DoubleButton extends React.Component {

    static propTypes = {
        caption1 : PropTypes.string.isRequired,
        caption2 : PropTypes.string.isRequired,
        cbPressed : PropTypes.func.isRequired,
        
       };
 

       f2 = (num) => {
        this.props.cbPressed(num)
       }
    
      componentDidMount = () => {
        myEvents.addListener('buttonClick', this.f2 )
      };
    
      componentWillUnmount = () => {
        myEvents.removeListener('buttonClick', this.f2 )
    }
       
       f1 = (EO) => {
           (EO.target.value === this.props.caption1)? myEvents.emit('buttonClick',1): myEvents.emit('buttonClick',2)
        }

    render() {

        return(
            <div>
                <input value={this.props.caption1} type={'button'} onClick={this.f1}></input>
                <span>{this.props.children}</span>
                <input type={'button'} value={this.props.caption2} onClick={this.f1}></input>
                
            </div>
        )
    }
}

export default DoubleButton
