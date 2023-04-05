// calculate the public bus fair
function publicBusFair(totalPeople) {
  if (typeof totalPeople !== "number") {
    return "please provide a valid input";
  }
  const perBusCapacity = 50;
  const perMicroCapacity = 11;
  const publicBusTicket = 250;
  const restBusSeat = totalPeople % perBusCapacity;
  const restMicroSeat = restBusSeat % perMicroCapacity;
  console.log(restMicroSeat);
  const publicBusCost = restMicroSeat * publicBusTicket;
  return publicBusCost;
  //   console.log(restMicroSeat);
}

console.log(publicBusFair(71));
