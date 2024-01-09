import pagesIcon from "../../assets/icons/pages.svg";
import priceIcon from "../../assets/icons/price.svg";

interface BookCardProps {
    book_cover?: string,
    title?: string,
    description?: string,
    pages?: string,
    price?: string,
    year?: string,
    name?: string
}

const BookCard = (props: BookCardProps) => {
  return (
    <div className="w-[170px] h-[240px]">
      <div className="w-full object-cover rounded-lg overflow-hidden">
        {props?.book_cover?.length ? (
            <img 
                className="w-full h-full"
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
      <h1 className="text-[20px] w-full break-words">{props?.title}</h1>
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

export default BookCard
