// callbacks
const greetUser = (username, callback) => {
  if (callback) {
    console.log(callback(username));
  } else {
    console.log(username);
  }
};

greetUser("james", (username) => {
  return "Hello " + username;
});

console.log("--------------------------");

greetUser("james");
