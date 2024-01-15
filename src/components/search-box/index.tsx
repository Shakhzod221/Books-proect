import { Button, Input } from "antd"
import {SearchOutlined} from "@ant-design/icons";
import { useTranslation } from "react-i18next";

interface SearchBoxProps {
  searchFunc?: any;
}

const SearchBox = (props: SearchBoxProps) => {
  const {t} = useTranslation();
  return (
    <div className="bg-white mx-auto left-[50%] max-w-[1080px] rounded-[15px] flex items-center flex-col justify-center w-full px-[86px] pt-[30px] pb-[30px] shadow-md">
      <h2 className="text-center text-[25px] font-rotterburg text-[#C9AC8C]">
        {t("searchSection.title")}
        </h2>
      <div className="w-full flex items-center gap-[14px] mt-[13px]">
         <Input 
            onChange={(e) => props.searchFunc(e.target.value)} 
            size="large" 
            placeholder={t("searchSection.inputPl")}/>
         <Button 
            htmlType="submit" 
            type="primary" 
            icon={<SearchOutlined/>}>
            {t("searchSection.btn")}
          </Button>
       
      </div>
    </div>
  )
}

export default SearchBox
