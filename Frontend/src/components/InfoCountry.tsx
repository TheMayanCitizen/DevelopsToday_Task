import React from "react";
import { Info } from "@/types/infoCountry";
import { LineChart } from "@mui/x-charts";
interface CountryCardProps {
  info: Info;
  years : number[];
  population: number[]
}

const InfoCard: React.FC<CountryCardProps> = ({ info,years, population }) => {

    console.log(population)
  return (
    <div className="max-w rounded overflow-scroll shadow-lg ">
      <img
        className="w-full h-min object-cover justify-center"
        src={info.flagUrl}
        alt={`${info.country} flag`}
      />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{info.country}</h2>
        <h3 className="text-lg font-semibold mb-2">Borders:</h3>
        <ul className="list-disc list-inside mb-2">
          {info.borders.map((border, index) => (
            <li key={index}>
              {border.commonName} ({border.officialName})
            </li>
          ))}
        </ul>

        <h3 className="text-lg font-semibold mb-2">Population Data:</h3>
        <LineChart
          className="bg-white min-w-min p-5"
          xAxis={[{ data: years }]}
          series={[
            {
              data: population,
            },
          ]}
          height={300}
        />
      </div>
    </div>
  );
};

export default InfoCard;
