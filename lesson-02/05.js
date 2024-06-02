let passport = {
  name: "Petr",
  surname: "Petrov",
};

let copyPassport = { ...passport };
copy.name = "Ivan";

console.log(passport);
console.log(copyPassport);
