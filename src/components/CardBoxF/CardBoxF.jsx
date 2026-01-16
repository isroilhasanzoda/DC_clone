import React from 'react'

const CardBoxF = (props) => {
  return (
    <div className="secCard bg-[#fff] rounded-[20px] w-[15%] py-[20px] px-[25px]">
      <h3 className="txCard">{props.name}</h3>
      <img
        className="w-[75%] rotate-2 rounded-[12px] ml-[30px] pt-[40px] "
        src="https://avatars.mds.yandex.net/i?id=016667ea79b07f20b035f95c31fc4de75cfe37da-12577662-images-thumbs&n=13"
        alt=""
      />
    </div>
  );
}

export default CardBoxF