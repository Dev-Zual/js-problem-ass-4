// check if they were best friend
function isBestFriend(friend1, friend2) {
  if (typeof friend1 !== "object" || typeof friend2 !== "object") {
    return "please provide a object";
  }
  if (friend1.name == friend2.friend && friend1.friend == friend2.name) {
    return true;
  } else {
    return false;
  }
}

console.log(
  isBestFriend(
    { name: "abul", friend: "sabul" },
    { name: "babul", friend: "abul" }
  )
);
