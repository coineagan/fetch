import { getLocation } from './helpers/location.js';
import { createReport } from './helpers/report.js';

const args = process.argv.slice(2);

export const geo = (args) => {
  const summary = [];
  const promises = [];
  
  if (!Array.isArray(args) || !args.length) {
    console.log(`No arguments found! Please use: npm run geo -- "97210" "Portland, OR"\n`)
  }

  for (let arg of args) {
    promises.push(
      getLocation(arg.trim())
        .then(data => {
          summary.push({ input: arg, value: data });
        })
        .catch(error => {
          console.log('Error:', error);
        })
    );
  }
  
  Promise.all(promises)
    .then(() => {
      createReport(summary);
    })
    .catch(error => {
      console.log('Error:', error);
    });
}

geo(args)
