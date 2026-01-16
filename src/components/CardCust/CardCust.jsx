import React from 'react'

const CardCust = (props) => {
  return (
    <div>
      <img className="w-[150px] " src={props.img} alt="" />
      <h3 className='custTx'>{props.name }</h3>
      <h3 className='custTx2'>{props.name2 }</h3>
    </div>
  );
}

export default CardCust