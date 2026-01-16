import React from 'react'
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';
import { Outlet } from "react-router-dom";


//menuMobile
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";

const Layout = () => {

  //menuMobile
   const [anchorEl, setAnchorEl] = React.useState(null);
   const open = Boolean(anchorEl);
   const handleClick = (event) => {
     setAnchorEl(event.currentTarget);
   };
   const handleClose = () => {
     setAnchorEl(null);
   };

    
      const { t, i18n } = useTranslation();
      
        const changeLanguage = (language) => {
          i18n.changeLanguage(language);
        };
       const [lng, setIng] = useState('');
  return (
    <div>
      <header className=" head flex fixed top-0 w-full bg-[#fff] shadow px-[5px] py-[20px] z-10 justify-around ">
        <div className="dv-head">
          <div className="Lay_link  flex justify-between">
            <img
              className="img"
              src="https://avatars.mds.yandex.net/i?id=6a39af00deb319b5dffdb3f451c0b6bc0e76c2e5-10122172-images-thumbs&n=13"
              alt=""
            />

            <div>
              <Button
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
                // sx={{background:'red'}}
              >
                <MenuIcon />
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                slotProps={{
                  list: {
                    "aria-labelledby": "basic-button",
                  },
                }}
                PaperProps={{
                  sx: {
                    marginTop: "25px",
                    minWidth: 415,
                    marginLeft: "40px",
                  },
                }}
              >
                <MenuItem onClick={handleClose}>
                  <Link to="/">
                    <li className=" list-none">{t("hi.firstT")}</li>
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Link to="/customers">
                    <li className=" list-none">{t("hi.firstT1")}</li>
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Link to="somepage">
                    <li className=" list-none">{t("hi.firstT2")}</li>
                  </Link>
                </MenuItem>
                

                <div className=" flex bg-[#f4f4f4]  border-[none] rounded-[10px]">
                  <select
                    className="selBox "
                    value={lng}
                    name=""
                    id=""
                    onChange={(e) => {
                      changeLanguage(e.target.value);
                      setIng(e.target.value);
                    }}
                  >
                    <option value="ru">Русский</option>
                    <option value="en">English</option>
                  </select>
                </div>
              </Menu>
            </div>
          </div>
          <img
            className="li image_head"
            src="https://avatars.mds.yandex.net/i?id=6a39af00deb319b5dffdb3f451c0b6bc0e76c2e5-10122172-images-thumbs&n=13"
          />
          <Link to="/">
            <li className="li list-none">{t("hi.firstT")}</li>
          </Link>
          <Link to="/customers">
            <li className="li list-none">{t("hi.firstT1")}</li>
          </Link>
          <Link to="somepage">
            <li className="li list-none">{t("hi.firstT2")}</li>
          </Link>
        </div>
        <div className="li dv-head2">
          <div className="lg_head flex bg-[#f4f4f4] gap-[12px]  border-[none] rounded-[10px]">
            <select
              className="selBox"
              value={lng}
              name=""
              id=""
              onChange={(e) => {
                changeLanguage(e.target.value);
                setIng(e.target.value);
              }}
            >
              <option value="ru">Русский</option>
              <option value="en">English</option>
            </select>
          </div>

          <button className="btn-head ">DC Next</button>
        </div>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout