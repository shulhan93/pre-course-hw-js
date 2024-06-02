let passportWithAddress = {
  name: "Petr",
  surname: "Petrov",
  address: {
    country: "USA",
    city: "LA",
  },
};

let copyPassportWithAddress = JSON.parse(JSON.stringify(passportWithAddress));
copy.address.city = "Bobryisk";

console.log(passportWithAddress);
console.log(copyPassportWithAddress);
