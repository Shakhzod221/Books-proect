import api from "../axios.tsx";

const config = {
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },

}
const updateConfig = {
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
}

const useUsersApi = () => {

    const login = async (data: any) => api.post("/user/login", { ...data });
    const register = async (data: any) => api.post("/user/register", { ...data })
    const getOneUserById = async (id: any) => api.get(`/user/${id}`, config)
    const updateOneUserById = async (data: any, id: any) => 
      api.put(`/user/${id}`, { ...data }, updateConfig);

  return {login, register, getOneUserById, updateOneUserById};

}

export default useUsersApi;