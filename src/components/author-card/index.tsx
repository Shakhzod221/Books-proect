interface AuthorCardProps {
    id?: string;
    date_birth?: string;
    date_death?: string;
    first_name?: string;
    last_name?: string;
    image?: string;
}


const AuthorCard = (props: AuthorCardProps) => {
  return (
    <div className="w-[190px] p-[10px] rounded-lg shadow-md cursor-pointer hover:shadow-lg border-t-[7px] duration-500 border-t-transparent ">
      <div className="w-full h-[160px] bg-gray-400 object-cover rounded-lg overflow-hidden">
        {props?.image?.length ? (
            <img 
                className="w-full h-full"
                src={`https://literature-18wr.onrender.com/api/image/${props?.image}`} 
                alt="image"
            />
         ) : ( 
            <img 
                className="w-full h-full object-cover"
                src="https://removal.ai/wp-content/uploads/2021/02/no-img.png"
                alt="image"
            />
        )}
      </div>
      <div>
        <h3 className="font-crimson leading-normal text-[22px] my-[7px] text-[#C9AC8C] text-center">
            {`${props?.first_name + " " + props?.last_name}`?.length > 13
              ? `${props?.first_name + " " + props?.last_name}`?.slice(0, 13) + "..."
              :`${props?.first_name + " " + props?.last_name}`
            }
        </h3>
        <p className="font-crimson text-center">
            {props?.date_birth} - {props?.date_death}
        </p>
      </div>
    </div>
    
  )
}

export default AuthorCard
