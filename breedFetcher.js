const request = require('request');
const breed = process.argv[2];



const requestBreed = () => request(`https://api.thecatapi.com/v1/breeds/search/?q=${breed}`, (error, response, body) => {
  // console.log(body);
  // console.log(data)
  // console.log(error);
  if (error) {
    console.log(error);
    process.exit();
  }
  const data = JSON.parse(body);
  if (data[0] === undefined) {
    console.log("That breed does not exist.");
    process.exit();
  } else {
    console.log(data[0].description);
  }

  //   typeof (body) = string
  // console.log(body, typeof (body));
  // console.log(data);
  // console.log(typeof data) = now an object (deserialization)

  // It is actually an array of one, so you have to access the array first and then the key
});

requestBreed();