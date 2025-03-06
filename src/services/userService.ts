import axiosApi from '@/config/axiosConfig';



/**
 * @throws {Error}
 * @param query
 * @returns BlogResult
 */

export async function userRegister(email: string, fullName: string, password: string) {
  const response = await axiosApi.post("/signup", { email, fullName, password });
  if (response.status !== 201) {
    throw "state : " + response.status;
  } else {
    console.error(response.status);
  }
  return response.data;
}





export async function checkUserEmail(email: string): Promise<boolean> {
  try {
    const response = await axiosApi.post("/auth/checkEmail", { email });
    if (response.status !== 200) {
      throw "state : " + response.status;
    }
    console.log(response.data);
    return response.data.result;
  } catch (error) {
    console.log(error);
    return false;
  }
}
