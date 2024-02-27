import axiosInstance from "@/app/axios-instance";

export const getUserDetails = async (email: string) => {
  const res = await axiosInstance.get("/admin/getAccessToken", {
    params: { email },
  });
  const cookie = res.headers["set-cookie"];

  // Forward the Set-Cookie header to the Next.js API response
  console.log(cookie);
  return res.data;
};

export const getClientsList = async () => {
  const res = await axiosInstance.get("/admin/getClientsList");
  return res.data;
};
