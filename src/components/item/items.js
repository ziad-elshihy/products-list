import React from 'react';

const Items = (props) => {
   const { items, del , increaseItem , decreaseItem } = props;
   let length = items.length
   const ListItem = length ? (
      items.map(item => {
         return (
            <div key={item.id} className="item width">
               <p>{item.product}</p>
               <p>{item.price}</p>
               <p className="delete" onClick={() => del(item.id)}>&times;</p>
               <span className="Change">
                  <p className='quantity'>{item.quantity}</p>
                  <p onClick={() => increaseItem(item.id)}>&#43;</p>
                  <p onClick={() => decreaseItem(item.id)}>&minus;</p>
               </span>
            </div>
         )
      })
   ) : (
      <div className="text">There are no items, Try to add some.</div>
   )
   return (
      <div>
         <div className="header item">
            <p>Product</p>
            <p>Price</p>
            <p>Edit</p>
            <p>Quantity</p>
         </div>
         {ListItem}
      </div>
   )
}

export default Items