require('dotenv').config();
const express = require('express');
const cors = require('cors')
const axios = require('axios');
const app = express();
const port = 3000;

const corsOptions = {
  origin: 'http://localhost:5173',
  optionsSuccessStatus:200
}

app.use(cors(corsOptions))

app.get('/api/countries', async (req, res) => {
  try {
    const response = await axios.get(`${process.env.AVAILABLE_COUNTRIES_URL}`);
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching countries list' });
  }
});

app.get('/api/country/:code', async (req, res) => {
  const countryCode = req.params.code;

  try {
    const borderCountriesResponse = await axios.get(`${process.env.COUNTRY_API_URL}/CountryInfo/${countryCode}`);
    const borderCountries = borderCountriesResponse.data.borders;

    const populationResponse = await axios.post(`${process.env.POPULATION_API_URL}/countries/population`, {
      country: borderCountriesResponse.data.commonName
    });
    const populationData = populationResponse.data.data.populationCounts;

    const flagResponse = await axios.post(`${process.env.POPULATION_API_URL}/countries/flag/images`, {
      country: borderCountriesResponse.data.commonName
    });
    const flagUrl = flagResponse.data.data.flag;

    res.json({
      country: borderCountriesResponse.data.commonName,
      borders: borderCountries,
      populationData: populationData,
      flagUrl: flagUrl
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching country details' });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});