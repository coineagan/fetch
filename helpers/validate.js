import zipcodes from 'zipcodes';

export const isValidZip = (zip) => {
  if (!zipcodes.lookup(zip)) {
    console.log(`The zip code ${zip} could not be found!\n`);
    return false;
  }

  return true;
}

export const isValidName = (name) => {
  const parts = name.split(', ');

  if (zipcodes.lookupByName(parts[0], parts[1]).length === 0) {
    console.log(`The city/state ${name} could not be found!\n`);
    return false;
  }

  return true;
}

export const checkFormat = (string) => {
  const zipCodeFormat = /^\d{5}$/; // 5 digits
  const placeFormat = /^(.+),\s*[A-Z]{2}$/; // e.g., Chicago, IL

  if (zipCodeFormat.test(string)) {
    return 'zip';
  }

  if (placeFormat.test(string)) {
    return 'name';
  }

  return false;
};
