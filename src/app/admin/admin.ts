import axiosInstance from "@/app/axios-instance";

export const getUserDetails = async (email: string) => {
  const res = await axiosInstance.get("/admin/getAccessToken", {
    params: { email },
  });
  return res.data;
};

// export const getClientsList = async () => {
//   const res = await axiosInstance.get("/admin/getClientsList");
//   return res.data;
// };

export const getClientsList = () =>
  fetch("http://localhost:3001/admin/getClientsList").then((res) => res.json());
