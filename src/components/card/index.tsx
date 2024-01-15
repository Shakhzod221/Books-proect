import { useNavigate } from "react-router-dom";
import pagesIcon from "../../assets/icons/pages.svg";
import priceIcon from "../../assets/icons/price.svg";

interface BookCardProps {
    book_cover?: string,
    title?: any,
    description?: string,
    pages?: string,
    price?: string,
    year?: string,
    name?: string,
    id?: any
}

const BookCard = (props: BookCardProps) => {
  const navigate = useNavigate();
  return (
    <div
     onClick={() => navigate(`/book-details/${props?.id}`)}
     className="w-[200px] shadow-md hover:shadow-lg border-t-[7px] duration-500 border-transparent hover:border-t-[#c9ac8c] p-[12px] rounded-lg overflow-hidden cursor-pointer">
      <div className="w-full h-[220px] flex items-center justify-center object-contain rounded-lg overflow-hidden">
        {props?.book_cover?.length ? (
            <img 
                src={`https://literature-18wr.onrender.com/api/image/${props?.book_cover}`} 
                alt={props?.title}
            />
         ) : ( 
            <img 
                className="w-full h-full object-cover"
                src="https://removal.ai/wp-content/uploads/2021/02/no-img.png"
                alt={props?.title}
            />
        )}
      </div>
      <h1 className="font-crimson text-[#c9ac8c] text-[22px] w-full break-words">
        {props?.title?.length > 12
          ? props?.title?.slice(0, 12) + "..."
          : props?.title}
      </h1>
      <article className="text-[rgba(33,33,33,0.6)] font-crimson text-[18px]">
        {props?.name}
        </article>
      <div className="flex items-center gap-[20px] mt-[10px]">
        <div className="flex items-center gap-[7px]">
            <img className="w-[15px]" src={pagesIcon} alt="" />
            <p>{props?.pages}</p>
        </div>
        <div className="flex items-center gap-[7px]">
            <img className="w-[20px]" src={priceIcon} alt="" />
            <p>{props?.price}</p>
        </div>
      </div>
    </div>
  )
}

export default BookCard;
