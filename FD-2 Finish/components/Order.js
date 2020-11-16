import React from 'react';
import PropTypes from 'prop-types';
import './Order.css';
import Fragment from 'render-fragment';




class Order extends React.PureComponent {

  static PropTypes = {
    details: PropTypes.object.isRequired,
    mode: PropTypes.string.isRequired,
  }

  state = {
     showModeCourier: false,
  }

  setShowModeCourier = () => {
    if (!this.state.showModeCourier){
      this.setState({showModeCourier: true})
    } else {
      this.setState({showModeCourier: false})
    }
  }

 

  render(){
    console.log('Order rendered ID ' + this.props.details.code )
    let orderStatus = (this.props.details.statusCompleted);
    

  return(

<Fragment>
    {this.props.mode==='meneger' &&
    <tr>
    <td>{this.props.details.code}</td>
    <td>{this.props.details.product}</td>
    <td>{this.props.details.price+' $'}</td>
    <td>{this.props.details.quantity}</td>
    <td>{this.props.details.clientName}</td>
    <td>{this.props.details.adress}</td>
    <td>{this.props.details.card? 'Карта' : 'Наличные'}</td>
    <td className={this.props.details.statusCompleted? 'complited' : null}>{this.props.details.statusCompleted? 'Выполнен' : 'Не выполен'}</td>
    <td><button>Редактировать</button></td>
</tr> 
    }

{this.props.mode==='logistics' &&
    <tr>
    <td>{this.props.details.code}</td>
    <td>{this.props.details.product}</td>
    <td>{this.props.details.quantity}</td>
    <td>{this.props.details.adress}</td>
    <td className={this.props.details.courier===null? null : 'appointed'}>{this.props.details.courier===null? 'Не назначен' : this.props.details.courier }</td>
    <td className={this.props.details.statusCompleted? 'complited' : null}>{this.props.details.statusCompleted? 'Выполнен' : 'Не выполен'}</td>
</tr> 
    }

{this.props.mode==='courier' &&
   <Fragment>
     
  <b>Адресс досатвки: </b> {this.props.details.adress} <b>Имя клиента:</b> {this.props.details.clientName} <span className={orderStatus? 'complited': 'incompiled'}>{orderStatus?'Выполнен':'Не выполнен'}</span> <button onClick={this.setShowModeCourier}>{(this.state.showModeCourier)?'Скрыть':'Детали'}</button> <br/>
    { (this.state.showModeCourier)?
    <div>
    <br/>
    <b>Номер заявки:</b> {this.props.details.code} <br/>
    <b>Товар:</b> {this.props.details.product}  <br/>
    <b>Cумма за еденицу:</b> {this.props.details.price+' $'} <br/>
    <b>Количесвто:</b> {this.props.details.quantity}<br/>
    <b>Cумма:</b> {(this.props.details.price*this.props.details.quantity)+' $'} <br/>
    <b>Оплата:</b> {this.props.details.card? 'Карта' : 'Наличные'} <br/>
    <select>
    <option>Выполнен</option>
    <option>Не Выполнен</option>
    </select>
    <button>сохранить</button>
    </div> : null
  }
    <hr/>
   </Fragment>

    }

</Fragment>
  )
}
 

}

export default Order;