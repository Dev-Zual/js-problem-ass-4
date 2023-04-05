// check if they were best friend
function isBestFriend(friend1, friend2) {
  if (friend1.name == friend2.friend) {
    return true;
  } else {
    return false;
  }
}

console.log(
  isBestFriend(
    { name: "abul", friend: "babul" },
    { name: "babul", friend: "kbul" }
  )
);
