import api from "@/lib/axios";
import type { Object } from "@/types/country";
import { isAxiosError } from "axios";

 
export async function country(): Promise<Object[]>{
    try {
        const url = `/api/countries`;

        const { data } =  await api.get<Object[]>(url)

        return data
    
    }  catch (error) {
        if (isAxiosError(error) && error.response?.data?.error) {
          throw new Error(error.response.data.error); 
        } else {
          throw new Error("Error desconocido al obtener los países");
        }
    }
}