import React from 'react'

const Card = (props) => {
  return (
    <div className="cardBox flex bg-[#fff] border-2 border-[#bae3ea48] rounded-[12px] px-[50px] py-[8px] items-center justify-around  gap-[15px]">
      <p className="border-[#bae3ea48] border-2 py-[5px] px-[12px] rounded-[8px] bg-[#b2ade6af]">
        US
      </p>
      <div>
        <h1 className="prTx">{props.name}</h1>
        <p className='prTx1'>{props.name2}</p>
      </div>
      <p>{props.name3}</p>
    </div>
  );
}


export default Card