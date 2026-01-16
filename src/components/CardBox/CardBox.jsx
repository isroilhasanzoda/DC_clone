import React from 'react'

const CardBox = (props) => {
  return (
    <div className="secCard bg-[#fff] rounded-[20px] w-[15%] py-[30px] px-[15px]">
      <h3 className="txCard">{props.name}</h3>
      <img
        className="w-[55%] rotate-2 rounded-[12px] ml-[40px] pt-[40px] "
        src="https://avatars.mds.yandex.net/i?id=3c16e2da8375cc55b0800ca9428d41dbe98ce397-7550039-images-thumbs&n=13"
        alt=""
      />
    </div>
  );
}

export default CardBox