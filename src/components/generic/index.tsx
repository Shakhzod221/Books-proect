import { useLocation } from "react-router-dom"


const Generic = () => {
    const {pathname} = useLocation();
    
  return (
    <div>
       {pathname} - path tez orada ishga tushadi.
    </div>
  )
}

export default Generic
