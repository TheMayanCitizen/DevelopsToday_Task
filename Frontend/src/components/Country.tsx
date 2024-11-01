import type { Object } from "@/types/country";
import { Link } from "react-router-dom";

interface PropsCountry {
  country: Object;
}

export default function Country({ country }: PropsCountry) {
  return (
    <>
      <Link 
        className="bg-gray-700  bg-opacity-15 rounded-lg flex gap-2 items-center justify-center p-2"
        to={`/countries/${ country.countryCode }`}
        >
        <h2> {country.countryCode}</h2>
        <h3>{country.name}</h3>
      </Link>
    </>
  );
}
