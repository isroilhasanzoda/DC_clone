import React, { useState } from 'react'
import Card from '../../components/Card/Card';
import CardBox from "../../components/CardBox/CardBox";
import CardBoxF from "../../components/CardBoxF/CardBoxF";
import BoxCard from "../../components/BoxCard/BoxCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper/modules";


  

//translet
import { useTransition } from "react";
import { useTranslation } from "react-i18next";

//icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TelegramIcon from "@mui/icons-material/Telegram";
import InstagramIcon from "@mui/icons-material/Instagram";

const Product = () => {

  
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  const [lng, setIng] = useState();
  return (
    <div>
      <div className="container ">
        <div className="pt-[20px]   bg-[#fff]">
          <Swiper
            spaceBetween={40}
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
                className="w-[100%] h-[500px]"
                src="https://avatars.mds.yandex.net/i?id=28d0edca022bb8714fbe2d7118658e2fdc468ef8-5473912-images-thumbs&n=13"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="w-[100%] h-[500px]"
                src="https://avatars.mds.yandex.net/i?id=f4e868fac2b5fc44764133c49f3b965d8177e48a-10235574-images-thumbs&n=13"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="w-[100%] h-[500px]"
                src="https://avatars.mds.yandex.net/i?id=b79413f960d3798ebfe3badbce1f206b07f3abc4-5231996-images-thumbs&n=13"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="w-[100%] h-[500px]"
                src="https://avatars.mds.yandex.net/i?id=d3da7f74334e0ca24ecbb13ada1e3ebb3a9d8a37-4454238-images-thumbs&n=13"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="w-[100%] h-[500px]"
                src="https://avatars.mds.yandex.net/i?id=4ad56bfb51e5bc26969839399301e4b181ddefb8-4349754-images-thumbs&n=13"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="w-[100%] h-[500px]"
                src="https://avatars.mds.yandex.net/i?id=4ed02f02432b81d6a13cd00dc0a76a33dbf1b1dd-9198174-images-thumbs&n=13"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="w-[100%] h-[500px]"
                src="https://avatars.mds.yandex.net/i?id=798e4f8a3fdfe816f571f57d8040868ac31eb558-4590869-images-thumbs&n=13"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="w-[100%] h-[500px]"
                src="https://avatars.mds.yandex.net/i?id=8058c2cc79c5f34c62b03f947d2074e1229ebe6c-17394766-images-thumbs&n=13"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="w-[100%] h-[500px]"
                src="https://avatars.mds.yandex.net/i?id=0aa83092fb483b71d9d3a54de970528229f4cb08-16455908-images-thumbs&n=13"
                alt=""
              />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="bg-[#f1eeee]   flex flex-col  pb-[150px] items-center ">
          <div className=" p-[20px]  ">
            <h1 className="tx text-2xl ">{t("hi.title")}</h1>
            <h4 className="txx">Обновлено: 09.01.2026</h4>
          </div>
          <div className="firstCard flex justify-center  p-[18px] rounded-[22px]  gap-[20px] bg-[#fff]">
            <Card name="ДолларСША" name2="USD" name3="9.8923" />
            <Card name="Евро" name2="EUR" name3="10.8923" />
            <Card
              name="
Российский рубль"
              name2="RUB"
              name3="0.8923"
            />
            <Card name="Юани Чин" name2="CNY" name3="1.8923" />
          </div>
        </div>
        <div className=" bg-[#f1eeee] ">
          <h1 className="tx text-center mb-[20px]">{t("hi.nav")}</h1>
          <div className="secCard flex gap-[19px] justify-center items-center pb-[120px]">
            <CardBox name={t("hi.propTx")} />
            <CardBox name={t("hi.propTx2")} />
            <CardBox name={t("hi.propTx3")} />
            <CardBox name={t("hi.propTx4")} />
          </div>
        </div>
        <div className="bg-[#f1eeee]  flex items-center justify-center">
          <img
            className="text-center w-[90%] rounded-[20px] m-[20px]"
            src="https://avatars.mds.yandex.net/i?id=03828049ea1cc4f700badfef57d08d44b413f8df-16931118-images-thumbs&n=13"
            alt=""
          />
        </div>

        <div className="bg-[#f1eeee]  pt-[25px]">
          <h1 className="tx text-center mb-[0px]">{t("hi.nav4")}</h1>
          <div className="secCard flex justify-center pb-[30px] pt-[30px] items-center gap-[20px]">
            <CardBoxF name={t("hi.proCard")} />
            <CardBoxF name={t("hi.proCard2")} />
            <CardBoxF name={t("hi.proCard3")} />
            <CardBoxF name={t("hi.proCard4")} />
            <CardBoxF name={t("hi.proCard5")} />
          </div>
        </div>
        <div className="bg-[#f1eeee]">
          <h1 className="tx text-center">{t("hi.nav3")}</h1>
          <div className="thCard flex justify-center gap-[20px] ">
            <div className="bg-[#fff] thCard flex p-[20px] mt-[30px] rounded-[12px]  items-center w-[40%] gap-[20px]  ">
              <div>
                <div className="thCard">
                  <h4 className="bg-[#f1eeee] thCard rounded-[12px] p-[4px] w-1/3 text-center">
                    DC Leasing
                  </h4>
                </div>
                <h1 className=" txCd pt-[15px] pb-[15px]">{t("hi.nav2")}</h1>
                <p className="thText w-[300px]">{t("hi.nav1")}</p>
              </div>

              <img
                className="w-[15%]"
                src="https://avatars.mds.yandex.net/i?id=a0234532b404a68c4ff4dc5fd7eb18903d3c7545-9146142-images-thumbs&n=13"
                alt=""
              />
            </div>
            <div className="bg-[#fff] thCard flex p-[20px] mt-[30px] rounded-[12px]  items-center w-[40%] gap-[20px]  ">
              <div>
                <div className="thCard">
                  <h4 className="bg-[#f1eeee] thCard rounded-[12px] p-[4px] w-1/3 text-center">
                    DC Leasing
                  </h4>
                </div>
                <h1 className=" txCd pt-[15px] pb-[15px]">{t("hi.nav2")}</h1>
                <p className="thText w-[300px]">{t("hi.nav1")}</p>
              </div>

              <img
                className="w-[15%]"
                src="https://avatars.mds.yandex.net/i?id=a0234532b404a68c4ff4dc5fd7eb18903d3c7545-9146142-images-thumbs&n=13"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="thCard bg-[#f1eeee] flex justify-center gap-[20px] ">
          <div className="bg-[#fff] thCard flex p-[20px] mt-[30px] rounded-[12px]  items-center w-[40%] gap-[20px]  ">
            <div>
              <div className="thCard">
                <h4 className="bg-[#f1eeee] thCard rounded-[12px] p-[4px] w-1/3 text-center">
                  DC Leasing
                </h4>
              </div>
              <h1 className=" txCd pt-[15px] pb-[15px]">{t("hi.nav2")}</h1>
              <p className="thText w-[300px]">{t("hi.nav1")}</p>
            </div>

            <img
              className="w-[15%]"
              src="https://avatars.mds.yandex.net/i?id=a0234532b404a68c4ff4dc5fd7eb18903d3c7545-9146142-images-thumbs&n=13"
              alt=""
            />
          </div>
          <div className="bg-[#fff] thCard flex p-[20px] mt-[30px] rounded-[12px]  items-center w-[40%] gap-[20px]  ">
            <div>
              <div className="thCard">
                <h4 className="bg-[#f1eeee] thCard rounded-[12px] p-[4px] w-1/3 text-center">
                  DC Leasing
                </h4>
              </div>
              <h1 className=" txCd pt-[15px] pb-[15px]">{t("hi.nav2")}</h1>
              <p className="thText w-[300px]">{t("hi.nav1")}</p>
            </div>

            <img
              className="w-[15%]"
              src="https://avatars.mds.yandex.net/i?id=a0234532b404a68c4ff4dc5fd7eb18903d3c7545-9146142-images-thumbs&n=13"
              alt=""
            />
          </div>
        </div>
        <div className="bg-[#f1eeee]">
          <h1 className="tx text-center pt-[45px] pb-[45px]">{t("hi.tx1")}</h1>
          <div className="secCard flex justify-center gap-[3%]">
            <BoxCard
              tx={t("hi.textPr")}
              tx2={t("hi.textPr2")}
              tx3={t("hi.text3")}
            />
            <BoxCard
              tx={t("hi.textPr")}
              tx2={t("hi.textPr2")}
              tx3={t("hi.text3")}
            />
            <BoxCard
              tx={t("hi.textPr")}
              tx2={t("hi.textPr2")}
              tx3={t("hi.text3")}
            />
            <BoxCard
              tx={t("hi.textPr")}
              tx2={t("hi.textPr2")}
              tx3={t("hi.text3")}
            />
          </div>
          <div></div>
        </div>
        <div className="bg-[#f1eeee] pb-[120px]">
          <h1 className="tx text-center pt-[45px] pb-[45px]">
            {t("hi.txLast")}
          </h1>
          <div className="frCard p-[13px] flex gap-[120px] w-[100%]  items-center justify-center">
            <div className="bg-[#fff] flex justify-between rounded-[32px] gap-[90px] p-[20px]">
              <div className="">
                <h1 className="txxCd w-[150px]">{t("hi.txLast1")}</h1>
                <p className="w-[250px] pt-[10px] pb-[20px]">
                  {t("hi.txLast2")}
                </p>
                <button className="btn_Card">{t("hi.txLast3")}</button>
              </div>
              <img
                className="frCardImg w-[200px]"
                src="https://avatars.mds.yandex.net/i?id=5b8ad669304564b2ef8f3ee470f69c1de885461d-4034027-images-thumbs&n=13"
                alt=""
              />
            </div>
            <div className="bg-[#fff] flex justify-between rounded-[32px] gap-[90px] p-[20px]">
              <div className="">
                <h1 className="txxCd w-[150px]">{t("hi.txLast4")}</h1>
                <p className="w-[250px] pt-[10px] pb-[20px]">
                  {t("hi.txLast5")}
                </p>
                <div className="flex gap-[10px]">
                  <FacebookIcon />
                  <TelegramIcon />
                  <InstagramIcon />
                </div>
              </div>
              <img
                className="frCardImg w-[200px]"
                src="https://avatars.mds.yandex.net/i?id=5b8ad669304564b2ef8f3ee470f69c1de885461d-4034027-images-thumbs&n=13"
                alt=""
              />
            </div>
          </div>
        </div>
        {
          <div className=" bg-[#D9D9D9] px-[120px] py-[50px] ">
            <ul className="frCardImg flex gap-[20px] pb-[20px]">
              <li>{t("hi.liTxt")}</li>
              <li>{t("hi.liTxt2")}</li>
              <li>{t("hi.liTxt3")}</li>
              <li>{t("hi.liTxt4")}</li>
              <li>{t("hi.liTxt5")}</li>
              <li>{t("hi.liTxt6")}</li>
              <li>{t("hi.liTxt7")}</li>
              <li>{t("hi.liTxt8")}</li>
              <li>{t("hi.liTxt9")}</li>
            </ul>
            <div className="secCard flex gap-[120px]">
              <div className="">
                <h3 className="boxP pb-[15px]">Кредиты</h3>
                <p>Дастрас</p>
                <p>Автокредит</p>
                <p>Товары в рассрочку</p>
                <p>Потребительский кредит</p>
                <p>Кредит Ломбард</p>
              </div>

              <div>
                <h3 className="boxP pb-[15px]">Проекты</h3>
                <p>Мобильное приложение </p>
                <p>Товары в рассрочку</p>
                <p>Автокредит</p>
                <p>Потребительский кредит</p>
              </div>
              <div>
                <h3 className="boxP pb-[15px]">Еще</h3>
                <p>Зарплатный проект </p>
                <p>Автокредит</p>
                <p>Банокматы</p>
              </div>
            </div>
          </div>
        }
      </div>
    </div>
  );
}

export default Product