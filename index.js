const myData = {
  firstName: "Damilola",
  lastName: "Oladeji",
  age: 45,
  occupation: "Software Engineer",
  interest: "Programming",
};

for (const [key, value] of Object.entries(myData)) {
  console.log(`${key} : ${value}`);
}
