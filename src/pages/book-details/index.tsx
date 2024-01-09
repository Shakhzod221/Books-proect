import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import UseBooksApi from "../../service/api/books";


const BookDetails = () => {
  const { id } = useParams();
  const {getOneBookById} = UseBooksApi()
  const [oneBook, setOneBook]: any = useState({});

  useEffect(() => {
    getOneBookById(id).then((res) => setOneBook(res.data))
  }, [id]);

  return (
    <div className="container-box bg-red-100 flex items-start gap-[20px]">
      <div className="w-[520px] object-cover rounded-lg overflow-hidden">
        {oneBook?.book_cover?.lengh ? (
          <img 
            className="w-full h-full" 
            src={`https://literature-18wr.onrender.com/api/image/${oneBook?.book_cover}`} 
            alt={oneBook?.title}
          />
        ) : (
          <img 
            className="w-full h-full object-cover"
            src="https://removal.ai/wp-content/uploads/2021/02/no-img.png"
            alt={oneBook?.title}
           />
        )}
      </div>
      <div>
        <h1>{oneBook?.title}</h1>
      </div>
    </div>
  )
}

export default BookDetails
