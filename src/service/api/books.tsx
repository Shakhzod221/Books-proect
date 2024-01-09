import api from "../axios"

const UseBooksApi = () => {
  const config = {
    headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };

  const getOneBookById = async (id: any) => api.get(`/books/${id}`, config);

  return{ getOneBookById };
}

export default UseBooksApi
