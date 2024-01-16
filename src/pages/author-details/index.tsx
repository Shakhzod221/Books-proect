import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import UseAuthorsApi from "../../service/api/authors";
import { useDispatch, useSelector } from "react-redux";
import { andLoading, startLoading } from '../../store/loader';
import { Carousel, message } from "antd";
import LoaderUI from "../../components/loader";


const AuthorDetails = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {isLoading} = useSelector((state: any) => state);
  const [author, setAuthor]: any = useState({});
  const {getOneAuthorById} = UseAuthorsApi();
  const {id} = useParams();

  useEffect(() => {
    dispatch(startLoading(true))
    getOneAuthorById(id).then((res: any) => {
      if(res.data) {
        setAuthor(res.data);
        dispatch(andLoading(false));
      }
      }).catch((err:any) => {
        message.error(err.massage)
        dispatch(andLoading(false));
    })
  }, [id])
  
  console.log(author);
  

  return (
    <div className="container-box" style={{marginTop: "60px"}}>
      {isLoading ?( 
        <LoaderUI/>
      ):(
        <div>
          <div className="flex items-start">
            <div className="flex flex-col w-[550px]">

              <div className="w-full object-cover overflow-hidden rounded-xl">
                <img 
                  className="w-full"
                  src={`https://literature-18wr.onrender.com/api/image/${author?.image}`} 
                  alt={author?.first_name} 
                  />
              </div>

                <div className="flex items-center gap-[50px] mt-[30px]">
                  <div className="flex flex-col">
                    <p className="text-gray-600">Tavallud sanansi</p>
                    <h1 className="text-[30px] font-rotterburg font-bold text-[#c9ac8c]">
                      {author?.date_birth}
                      </h1>
                    </div>
                  <div className="flex flex-col">
                    {author?.date_death != "live" && (
                      <p className="text-gray-600">Vafot etgan sanansi</p>
                      )}
                    <h1 className="text-[30px] font-rotterburg font-bold text-[#c9ac8c]">
                      {author?.date_death !== "live" && author?.date_death }
                      </h1>
                  </div>
                </div>
            </div>

            <div className="flex flex-col ml-[60px]">
              <h1 className="text-[45px] font-rotterburg font-bold text-[#c9ac8c]">
                {author?.first_name + " " + author?.last_name}
              </h1>
              <p className="text-[25px] text-gray-700 font-crimson font-semibold">
                {author?.bio}
              </p>
              <div className="mt-[100px]">
                <div className="flex items-center justify-between">
                  <h1 className="text-[35px] font-rotterburg font-bold text-[#c9ac8c]">
                    Asarlari
                    </h1>
                    <p onClick={() => navigate("/books")} className="cursor-pointer hover:text-[#c9ac8c] font-crimson text-[20px] hover:underline duration-100">
                      Barchasini ko'rish
                     </p>
                </div>
                <div>
                <Carousel style={{width: "650px"}}>
                  {}
                </Carousel>
                </div>
              </div>
            </div>

          </div>
        </div>
      )}
    </div>
  )
}

export default AuthorDetails;
