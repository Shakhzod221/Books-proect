import { Button, Input } from "antd"
import {SearchOutlined} from "@ant-design/icons";
import { useTranslation } from "react-i18next";

const SearchBox = () => {
  const {t} = useTranslation()
  return (
    <div 
        style={{transform:"translate(-50%, 0)"}} 
        className="bg-white left-[50%] max-w-[1080px] rounded-[15px] flex items-center flex-col justify-center w-full px-[86px] pt-[30px] pb-[30px] absolute bottom-[-100px] shadow-md"
        >
      <h2 className="text-center text-[25px] font-rotterburg text-[#C9AC8C]">
        {t("searchSection.title")}
        </h2>
      <div className="w-full flex items-center gap-[14px] mt-[13px]">
         <Input 
         size="large" 
         placeholder={t("searchSection.inputPl")}
         />
        <Button type="primary" icon={<SearchOutlined/>}>
        {t("searchSection.btn")}
          </Button>
      </div>
    </div>
  )
}

export default SearchBox
