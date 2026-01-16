import React from 'react'
import { useState, useEffect } from "react";
//
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import "./styles.css";

import FacebookIcon from "@mui/icons-material/Facebook";
import TelegramIcon from "@mui/icons-material/Telegram";
import InstagramIcon from "@mui/icons-material/Instagram";



import CardCust from '../../components/CardCust/CardCust';

const Customers = () => {
  return (
    <div className="">
      <img
        className="w-[100%] h-[750px]"
        src="https://avatars.mds.yandex.net/i?id=45ef11f709bef54e7e297e6c216d166fdc8d9771-12488544-images-thumbs&n=13"
      />
      <div className="pt-[50px]">
        <h1 className="text-center pb-[30px] text-[60px]">Услуги</h1>
        <div className="flex justify-around pb-[60px] text-center ">
          <div>
            <CardCust img="https://office.dc.tj/images/icons/card.png" />
            <CardCust name="Карты" />
            <CardCust name2="Получите карту." />
          </div>
          <div>
            <CardCust img="https://office.dc.tj/images/icons/card.png" />
            <CardCust name="Карты" />
            <CardCust name2="Получите карту." />
          </div>
          <div>
            <CardCust img="https://office.dc.tj/images/icons/card.png" />
            <CardCust name="Карты" />
            <CardCust name2="Получите карту." />
          </div>
        </div>
        <div className="flex justify-around text-center items-center ">
          <div>
            <CardCust img="https://office.dc.tj/images/icons/card.png" />
            <CardCust name="Карты" />
            <CardCust name2="Получите карту." />
          </div>
          <div>
            <CardCust img="https://office.dc.tj/images/icons/card.png" />
            <CardCust name="Карты" />
            <CardCust name2="Получите карту." />
          </div>
          <div>
            <CardCust img="https://office.dc.tj/images/icons/card.png" />
            <CardCust name="Карты" />
            <CardCust name2="Получите карту." />
          </div>
        </div>

        <div></div>
      </div>
      <div className="pt-[120px]">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              className="w-[100%] h-[570px]"
              src="https://avatars.mds.yandex.net/i?id=d71b298ad3af98942c96ad45510422c322598f23-5363193-images-thumbs&n=13"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-[100%] h-[570px]"
              src="https://avatars.mds.yandex.net/i?id=2fdb221de3e3c17cc79ff0bce98a8931ee3a2f3b-15428448-images-thumbs&n=13"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-[100%] h-[570px]"
              src="https://avatars.mds.yandex.net/i?id=ea8f5bef926529e61148e6950e718ceacb0b951e-9160391-images-thumbs&n=13"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-[100%] h-[570px]"
              src="https://avatars.mds.yandex.net/i?id=fcca1177a8fbd171a74bc57fb215672164c27655-4548378-images-thumbs&n=13"
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-[60px] font-medium text-center pb-[60px] pt-[120px]">
          Адреса информационных точек
        </h1>
        <img
          className="w-[70%] h-[400px]"
          src="https://avatars.mds.yandex.net/i?id=72c66d6ed3ee1d187977ba2b154cac2c9a8e1918-5433970-images-thumbs&n=13"
          alt=""
        />
      </div>
      <div className="flex justify-around pt-[120px]">
        <ul className="text-[silver] ">
          <li className="text-[#000] pb-[15px]">КОМПАНИЯ</li>
          <li>O нас</li>
          <li>Новости</li>
          <li>Контакты</li>
          <li>Вакансии</li>
        </ul>
        <ul className="text-[silver]">
          <li className="text-[#000] pb-[15px]">Продукты</li>
          <li>Переводы</li>
          <li>Карты</li>
          <li>Депозиты</li>
          <li>DC WALLET</li>
        </ul>
        <ul className='text-[silver]'>
          <li className="text-[#000] pb-[15px]">Услуги</li>
          <li>Офисы обслуживания</li>
          <li>Терминалы</li>
          <li>Банкоматы</li>
        </ul>
        <div>
          <h2 className="text-[#000] pb-[15px]">СОЦИАЛЬНЫЕ СЕТИ</h2>
          <div className="flex">
            <FacebookIcon />
            <h1>Facebook</h1>
          </div>
          <div className="flex">
            <TelegramIcon />
            <h1>Telegram</h1>
          </div>
          <div className="flex">
            <InstagramIcon />
            <h1>Instagram</h1>
          </div>
        </div>
      </div>
          <hr className='w-[90%] mt-[30px] ml-[50px]' />
    </div>
  );
}

export default Customers