import React from 'react'

const BoxCard = (props) => {
  return (
    <div className="secCard bg-[#fff] rounded-[20px] w-[18%] py-[30px] px-[15px]">
      <h3 className="txCard ">{props.tx}</h3>
      <p className="pb-[50px] pt-[5px]">{props.tx2}</p>

      <p className="boxP pt-[2px]">{props.tx3}</p>
    </div>
  );
}

export default BoxCard