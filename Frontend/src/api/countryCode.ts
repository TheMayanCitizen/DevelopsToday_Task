import api from "@/lib/axios";
import type { Info } from "@/types/infoCountry";
import { isAxiosError } from "axios";

 
export async function countryCode(code :string): Promise<Info>{
    try {
        const url = `/api/country/${code}`;

        const { data } =  await api.get(url)

        console.log(data)
        return data
    
    }  catch (error) {
        if (isAxiosError(error) && error.response?.data?.error) {
          throw new Error(error.response.data.error); 
        } else {
          throw new Error("Sorry, I can't get the information");
        }
    }
}