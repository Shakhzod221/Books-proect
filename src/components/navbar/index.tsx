import { useState } from 'react';
import { 
  DownOutlined, 
  UserOutlined, 
  LogoutOutlined, 
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Avatar, Button, Dropdown, Popconfirm, Segmented, message } from 'antd';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import lng from "../../assets/icons/lng.svg";
import moonIcon from "../../assets/icons/moon.svg";
import sunIcon from "../../assets/icons/sun.svg";
import Modal from 'antd/es/modal/Modal';
import i18n from '../../i18n';
import { t } from 'i18next';


const Navbar = () => {

  const [darkMode, setDarkMode]: any = useState("light");
  const [openModal, setOpenModal]: any = useState(false)
  const navigate = useNavigate();

  const confirm = async () => {
    localStorage.clear();
    message.info('Siz tizimdan chiqdingiz');
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  };

  const items: MenuProps['items'] = [
    {
      label: 
      <Link 
      to={`/account/${localStorage.getItem("id")}`}
      className='flex items-center gap-[10px] px-[8px] py-[4px]'>
      <UserOutlined/>
      <p className='text-[15px] p-0'>{t("navbarDrop.text1")}</p>
      </Link> 
      ,
      key: '0',
    },
    {
      label:(
      <Popconfirm
      title="Tizimdan chiqish"
      description="Tizimdan chiqib ketishga aminmisz?"
      onConfirm={confirm}
      okText="Ha"
      cancelText="Yoq"
    >
       <div className='flex items-center gap-[10px] px-[8px] py-[4px]'>
      <LogoutOutlined/>
      <p className='text-[15px] p-0'>{t("navbarDrop.text2")}</p>
    </div>
    </Popconfirm>
    ),
      key: '1',
    },
   
  ];

  return (
    <>
    <Modal 
      okText="O'zgartirish"
      cancelText="Bekor qilish"
      onCancel={() => setOpenModal(false)}
      onOk={() => setOpenModal(false)}
      open={openModal}
      title="Tilni o'zgartirish">
      <Segmented
            className='mb-[30px] mt-[20px]'
            block
            size='large'
            options={[
              {
              label: (
                <div style={{ padding: 4 }}>
                  <div>O'zbekcha</div>
                </div>
              ),
              value: 'uz',
            },
              {
              label: (
                <div style={{ padding: 4 }}>
                  <div>English</div>
                </div>
              ),
              value: 'en',
            },
            ]}
            onChange={(e: any) => {
              i18n.changeLanguage(e)
            }}
             />
    </Modal>
    
    <div className="container-box flex items-center justify-between">
      <h1
        onClick={() => navigate("/")}
        className='text-[26px] font-semibold select-none  font-rotterburg text-[#C9AC8C] cursor-pointer'>
        Badiiyat
        </h1>
      <div className='flex items-center gap-[43px]'>
        <NavLink 
        to={"/"}
        className='dark:text-white py-[28px] font-crimson font-semibold text-[19px] border-b-[3px] border-t-[3px] border-t-transparent border-b-transparent hover:border-b-[#C9AC8C] duration-150 cursor-pointer'
        >
          {t("navbar.text1")}
        </NavLink>
        <NavLink 
        to={"/authors"}
        className='dark:text-white py-[28px] font-crimson font-semibold text-[19px] border-b-[3px] border-t-[3px] border-t-transparent border-b-transparent hover:border-b-[#C9AC8C] duration-150 cursor-pointer'
        >
          {t("navbar.text2")}
        </NavLink>
        <NavLink 
        to={"/books"}
        className='dark:text-white py-[28px] font-crimson font-semibold text-[19px] border-b-[3px] border-t-[3px] border-t-transparent border-b-transparent hover:border-b-[#C9AC8C] duration-150 cursor-pointer'
        >
          {t("navbar.text3")}
        </NavLink>
        <NavLink 
        to={"/maqolalar"}
        className='dark:text-white py-[28px] font-crimson font-semibold text-[19px] border-b-[3px] border-t-[3px] border-t-transparent border-b-transparent hover:border-b-[#C9AC8C] duration-150 cursor-pointer'
        >
          {t("navbar.text4")}
        </NavLink>
        <NavLink 
        to={"/kommentariyalar"}
        className='dark:text-white py-[28px] font-crimson font-semibold text-[19px] border-b-[3px] border-t-[3px] border-t-transparent border-b-transparent hover:border-b-[#C9AC8C] duration-150 cursor-pointer'
        >
          
        </NavLink>
      </div>
      <div className='flex items-center gap-[20px]'>
        <img 
          onClick={() => setOpenModal(true)}
          className='w-[30px] h-[30px] cursor-pointer' 
          src={lng} 
          alt=""
        />
        {darkMode === "dark" ? (
          <img 
            onClick={() => {
              setDarkMode("light")
              document.documentElement.classList.remove("dark")
            }}
            className='w-[30px] h-[30px] cursor-pointer' 
            src={sunIcon} 
            alt="" />
        ) : (
          <img 
          onClick={() => {
            setDarkMode("dark")
            document.documentElement.classList.add("dark")

          }}
            className='w-[30px] h-[30px] cursor-pointer' 
            src={moonIcon} 
            alt="" />
        )}

      {localStorage.getItem("token") ? (
        <div>
        <Dropdown 
        menu={{ items }} 
        trigger={['click']}
        className='cursor-pointer'
        >
         <div className='flex items-center gap-[4px]'>
           <Avatar 
              style={{
                  backgroundColor: 
                    localStorage.getItem("avatar_theme") || "black"
                }
              }
              size="large" 
              icon={localStorage.getItem("first_name")?.slice(0, 1)} />
           <DownOutlined />
         </div>
       </Dropdown>
     </div>
      ) : (
        <div className='flex items-center gap-[10px]'>
          <Button onClick={() => navigate("sign-in")}>
            Kirish
            </Button>
          <Button onClick={() => navigate("sign-up")} type='primary'>
            Registratsiya
            </Button>
        </div>
      )}
      </div>
    </div>
    </>
  )
}

export default Navbar;
