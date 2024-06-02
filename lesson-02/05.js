let passport = {
  name: "Petr",
  surname: "Petrov",
};

let copy = { ...passport };
copy.name = "Ivan";

console.log(passport);
console.log(copy);
