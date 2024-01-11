import api from "../axios";

const UseBooksApi = () => {
  const config = {
    headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  const getAllBooks = async () => api.get("/book", config)
  const getOneBookById = async (id: any) => api.get(`/book/${id}`, config);

  return{ getOneBookById, getAllBooks };
}

export default UseBooksApi;
