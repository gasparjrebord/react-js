import React from 'react'

function PopUp({setPopup, order}) {
  return (
        <div className='popupContainer'>
            <button className='btn' onClick={() => setPopup(false)}>X</button>
            <h3>Su orden de compra fue creada con exito</h3>
            <hr /><br />
            <h4>Datos de facturacion</h4>
            <br />
            <p>Nombre: {order.name}</p>
            <p>Telefono: {order.phone}</p>
            <p>Email: {order.email}</p>
            <p>Calle: {order.street}</p>
            <p>Nro de calle: {order.streetnumber}</p>
            <p>CP: {order.postalcode}</p>
            <br />
            <p>Total: {order.total}</p>
        </div>
  );
}
export default PopUp;