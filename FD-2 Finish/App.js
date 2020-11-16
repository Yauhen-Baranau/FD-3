"use strict";

import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

import Logistics from './components/Logistics';
import Meneger from './components/Meneger';
import Courier from './components/Courier';

// если необходимо, вид сборки можно проверить в коде:
// if (process.env.NODE_ENV === 'production') {
// if (process.env.NODE_ENV !== 'production') {


  let ordersList=require('./orders.json');




let ordersListForVadim = [];
let ordersListForAlex =[];

ordersList.orders.forEach( v => {
     if (v.courier==="Вадим") {
          ordersListForVadim.push(v)  
     }
     if (v.courier==="Алексей"){
       ordersListForAlex.push(v)
     }
    })



ReactDOM.render( 
  <div>
    
  <Meneger mode={'meneger'} ordersList = {ordersList.orders}  />
  <Logistics mode={'logistics'} ordersList = {ordersList.orders}  />
  <Courier courierName={'Вадим'} mode={'courier'} ordersList = {ordersListForVadim}  />
  <Courier courierName={'Алексей'} mode={'courier'} ordersList = {ordersListForAlex}  />

  </div>,
 
   document.getElementById('container') 
   );
