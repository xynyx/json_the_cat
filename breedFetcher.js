const request = require('request');

const fetchBreedDescription = (breedName, callback) => request(`https://api.thecatapi.com/v1/breeds/search/?q=${breedName}`, (error, response, body) => {
  if (error) {
    callback(error);
  } else {
    const data = JSON.parse(body);
    if (data[0] === undefined) {
      callback("That breed does not exist.");
      process.exit();
    } else {
      callback(null, data[0].description.trim());
    }
  }
  //   typeof (body) = string
  // console.log(body, typeof (body));
  // console.log(data);
  // console.log(typeof data) = now an object (deserialization)

  // It is actually an array of one, so you have to access the array first and then the key
});

module.exports = { fetchBreedDescription };