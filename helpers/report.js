export const createReport = (summary) => {
  for (let location of summary) {    
    if (Array.isArray(location.value) && location.value.length > 0 ) {
      console.log(`🐈 ...\nYou entered a name: ${location.input}\n 🏙️  Locality: ${location.value[0].name}\n 🌳 State: ${location.value[0].state}\n 🌎 Latitude: ${location.value[0].lat}\n 🌎 Longitude: ${location.value[0].lon}\n\n`);

    } else if (location.value) {
      console.log(`🐢 ...\nYou entered a zip code: ${location.input}\n 🏙️  Locality: ${location.value.name}\n 📮 Zip code: ${location.value.zip}\n 🌎 Latitude: ${location.value.lat}\n 🌎 Longitude: ${location.value.lon}\n\n`);
    }
  }  
}
