import 'dotenv/config';
import { checkFormat, isValidZip, isValidName } from './validate.js';

export const getLocation = async (input) => {
  const baseUrl = 'http://api.openweathermap.org/geo/1.0/';
  const api_key = process.env.API_KEY;
  const format = checkFormat(input);
  let url;
  
  if (!format) {
    console.log(`"${input}" is not in a correct zip code or city/state format!\n`);
  
  } else if (format === 'zip' && isValidZip(input)) {
    url = `${baseUrl}zip?zip=${input},US&appid=${api_key}`;
    return fetchLocation(url);

  } else if (format === 'name' && isValidName(input)) {
    const [city, state] = input.split(', ').map(part => part.trim());
    url = `${baseUrl}direct?q=${city},${state},US&limit=3&appid=${api_key}`;
    return fetchLocation(url);
  }
};

const fetchLocation = async (url) => {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      console.log(`"${input}" request did not succeed: ${response.status}\n`);
    }

    return await response.json();

  } catch (error) {
    console.log('Error fetching data:', error);
    return false;
  }
}
