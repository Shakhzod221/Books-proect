import { 
  DownOutlined, 
  UserOutlined, 
  LogoutOutlined, 
  SettingOutlined 
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Avatar, Button, Dropdown, Popconfirm, message } from 'antd';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import lng from "../../assets/icons/lng.svg";

const Navbar = () => {

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
      <p className='text-[15px] p-0'>Profil</p>
      </Link> 
      ,
      key: '0',
    },
    {
      label:
       <div  
       className='flex items-center gap-[10px] px-[8px] py-[4px]'>
      <SettingOutlined/>
      <p className='text-[15px] p-0'>Sozlamalar</p>
    </div>,
      key: '1',
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
      <p className='text-[15px] p-0'>Chiqish</p>
    </div>
    </Popconfirm>
    ),
      key: '2',
    },
   
  ];

  return (
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
          Bosh sahifa
        </NavLink>
        <NavLink 
        to={"/authors"}
        className='dark:text-white py-[28px] font-crimson font-semibold text-[19px] border-b-[3px] border-t-[3px] border-t-transparent border-b-transparent hover:border-b-[#C9AC8C] duration-150 cursor-pointer'
        >
          Adiblar
        </NavLink>
        <NavLink 
        to={"/books"}
        className='dark:text-white py-[28px] font-crimson font-semibold text-[19px] border-b-[3px] border-t-[3px] border-t-transparent border-b-transparent hover:border-b-[#C9AC8C] duration-150 cursor-pointer'
        >
          Barcha kitoblar
        </NavLink>
        <NavLink 
        to={"/maqolalar"}
        className='dark:text-white py-[28px] font-crimson font-semibold text-[19px] border-b-[3px] border-t-[3px] border-t-transparent border-b-transparent hover:border-b-[#C9AC8C] duration-150 cursor-pointer'
        >
          Maqolalar
        </NavLink>
        <NavLink 
        to={"/kommentariyalar"}
        className='dark:text-white py-[28px] font-crimson font-semibold text-[19px] border-b-[3px] border-t-[3px] border-t-transparent border-b-transparent hover:border-b-[#C9AC8C] duration-150 cursor-pointer'
        >
          
        </NavLink>
      </div>
      <div>
        <img 
          className='w-[40px] p-[5px] rounded-[6px] hover:bg-[rgba(200,172,140,0.5)] cursor-pointer' 
          src={lng} 
          alt=""
        />
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
  )
}

export default Navbar;
