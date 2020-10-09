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

       
       f1 = () => {
         myEvents.addListener('buttonClick', this.f2 )
         myEvents.emit('buttonClick', 1)
         myEvents.removeListener('buttonClick', this.f2 )
        }
        f3 = () => {
            myEvents.addListener('buttonClick', this.f2 )
            myEvents.emit('buttonClick',2)
            myEvents.removeListener('buttonClick', this.f2 )
        }

    render() {

        return(
            <div>
                <input value={this.props.caption1} type={'button'} onClick={this.f1}></input>
                <span>{this.props.children}</span>
                <input  type={'button'} value={this.props.caption2} onClick={this.f3}></input>
                
            </div>
        )
    }
}

export default DoubleButton
