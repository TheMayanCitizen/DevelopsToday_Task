
import { country } from "@/api/country"
import Country from "@/components/Country"
import { Object } from "@/types/country"
import { useEffect, useState } from "react"

export default function Home() {

  const [data, setData] = useState<Object[]>()
  const [loading, setLoading] = useState<boolean>(true)

  useEffect( ()=>{

    const fetchData = async () => {

      setLoading(true);

      try {
        const response = await country() 
        setData(response) 
      } catch (error) {
        console.error("Error retreiving data:", error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()

  }, [])

  return (
    <div>
      {loading ? (
        <p>Loading Data...</p> 
      ) : (
        <section className=" grid grid-cols-6 gap-5  ">
          {data?.map(city =>(
          <Country key={city.countryCode} country={city}/>
        ))}
        </section>
      )}
      
    </div>
  )
}