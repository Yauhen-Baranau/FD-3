import React from 'react';
import PropTypes from 'prop-types';
import Order from './Order'



class Meneger extends React.PureComponent {

  static PropTypes = {
    ordersList: PropTypes.array.isRequired,
   
    mode: PropTypes.string.isRequired,
  }

  state = {
    ordersList: this.props.ordersList,
  }

 render() {
    console.log('Meneger rendered')

    var ordersList = this.state.ordersList.map( i => {
          return <Order mode={this.props.mode} couriers={this.props.couriers} details={i} key = {i.code} />
    });



   return (

     <div>
       <h2>Meneger Department</h2>
       <br/>
        <table>
          <tbody>
          <tr><th>номер заказа</th><th>товар</th><th>цена</th><th>количество</th><th>имя клиента</th><th>адресс доставки</th><th>оплата</th><th>статус</th></tr>
          {ordersList}
          </tbody>
        </table>
        <br/>
        <button>Приянть заказ</button>
        <hr/>
    </div>
    );
  }
}

export default Meneger;