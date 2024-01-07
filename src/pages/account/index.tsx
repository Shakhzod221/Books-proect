import { Button, Form, Image, Input, Tabs, message } from 'antd';
import type { TabsProps } from 'antd';
import useUsersApi from '../../service/api/users';
import { useEffect, useState } from 'react';
import InputMask from 'react-input-mask';
import { useDispatch, useSelector } from 'react-redux';
import { andLoading, startLoading } from '../../store/loader';
import LoaderUI from '../../components/loader';
import { useParams } from 'react-router-dom';

type FieldType = {
  email?: string;
  password?: string;
  first_name?: string;
  last_name?: string;
  phone?: string;
  confirm_password?: string;
};

const Account = () => {

  const {getOneUserById} = useUsersApi();
  const [me, setMe]: any = useState({});
  const dispatch = useDispatch();
  const {isLoading} = useSelector((state: any) => state);
  const {id} = useParams();
  
  

  useEffect(() => {
    dispatch(startLoading(true));
    getOneUserById(localStorage.getItem("id"))
    .then((data) => {
      data && dispatch(andLoading(false));
      setMe(data.data)
    })
    .catch((err: any) => {
      dispatch(andLoading(false));
      message.error(err)
    })
  }, [id]);

  const items: TabsProps['items'] = [
    {
      key: '1',
      label: me?.id === Number(id)? 'Profilim' : "Profil",
      children: (
        <div className="flex items-center gap-[30px] bg-slate-100 py-4 px-4 rounded-[10px]">
          <div 
            className="w-[150px] h-[130px] rounded-[100%] flex items-center justify-center text-[80px] text-white"
            style={{
              backgroundColor: localStorage.getItem("avatar_theme") || "gray",
            }}
          >
            {me?.image === null ? (
              localStorage.getItem("first_name")?.slice(0,1) 
            ) : (
              <Image src={me?.image}/>
            )}
        </div>
        <div>
          <h1 className="text-[30px] font-semibold">{me?.first_name + " " + me?.last_name}</h1>
          <h2 className="text-[20px] font-medium text-gray-500">{me?.email}</h2>
          <p className="font-bold mt-[20px]">{me?.phone}</p>
      </div>
    </div>
    )
    },
    {
      key: me?.id === Number(id)? '2' : "",
      label: me?.id === Number(id)? "Sozlamalar" : "",
      children: me?.id === Number(id) && (
      <div>
        <div className='flex gap-5 flex-col'>
          <h1 className='text-[18px] font-semibold text-red-400'>* Ma'lumotlarni o'zgartirib saqlang</h1>
        <Form 
        className="w-full"
        name="basic"
        initialValues={{ remember: true }}
        autoComplete="off"
        layout="vertical"
  >
    <Form.Item<FieldType>
      name="first_name"
      rules={[{ required: true, message: 'Iltimos yangi ismingizni kiriting!' }]}
    >
      <Input 
        defaultValue={me?.first_name} 
        size="large" 
        placeholder="Ismingizni kiriting"/>
    </Form.Item>

    <Form.Item<FieldType>
      name="last_name"
      rules={[{ required: true, message: 'Iltimos yangi familyangizni kiriting!' }]}
    >
      <Input 
        defaultValue={me?.last_name} 
        size="large" 
        placeholder="Familyangizni kiriting"  />
    </Form.Item>
    <Form.Item<FieldType>
      name="phone"
      rules={[{ required: true, message: 'Iltimos yangi telefon raqamingizni kiriting!' }]}
    >
      <InputMask
        mask="+\9\9\8\ (99) 999 99 99"
        maskPlaceholder={null}
        maskChar=" "
        required={true}
        type="tel"
      >
        <Input 
          defaultValue={me?.phone} 
          size="large" 
          placeholder="Telefon raqamingizni kiriting"  />
      </InputMask>

    </Form.Item>
    <Form.Item<FieldType>
      name="email"
      rules={[
        { 
          type: "email",
          required: true, 
          message: 'Iltimos yangi emailingizni kiriting!' }]}
    >
      <Input 
        defaultValue={me?.email} 
        size="large" 
        placeholder="Emailingizni kiriting"  />
    </Form.Item>
   
          <div className='flex items-center w-full gap-2'>
          <Form.Item<FieldType>
      name="password"
      className='w-full'
      rules={[
        { 
          required: true, 
          message: 'Iltimos yangi parolingizni kiriting!' }]}
    >
      <Input.Password 
        size="large" 
        placeholder="Yangi parolni kiriting"  />
    </Form.Item>
    <Form.Item<FieldType>
      name="confirm_password"
      className='w-full'
      rules={[
        { 
          required: true, 
          message: 'Iltimos yangi parolni takrorlang!' }]}
    >
      <Input.Password 
        size="large" 
        placeholder="Yangi parolni takrorlang"  />
    </Form.Item>
          </div>

    <Form.Item >
      <Button loading={false} type="primary" htmlType="submit">
        Saqlash
      </Button>
    </Form.Item>
  </Form>
        </div>
      </div>),
    },
  ];

  const onChange = (key: string) => {
    console.log(key);
  };

  return (
    <div>
      {isLoading ? <LoaderUI/> :
      <div className="w-full max-w-[900px] mx-auto mt-[50px]">
        
        <div>
        <Tabs 
          tabPosition='left' 
          defaultActiveKey="1" 
          items={items} 
          onChange={onChange} />
        </div>
      </div>}
    </div>
  )
}

export default Account;
