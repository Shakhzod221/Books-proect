import parse from "html-react-parser"
import 'ldrs/hourglass';


const LoaderUI = () => {
  return (
    <div className="flex items-center justify-center h-[200px]">
        {parse("<l-hourglass speed='1'></l-hourglass>")}
    </div>
  )
}

export default LoaderUI
