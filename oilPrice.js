// calculate all the oil price that you buy

function oilPrice(dieselLtr, petrolLtr, octaneLtr) {
  if (
    typeof dieselLtr !== "number" ||
    typeof petrolLtr !== "number" ||
    typeof octaneLtr !== "number"
  ) {
    return "please provide a valid quantity";
  }

  const dieselPerLtr = 114;
  const petrolPerLtr = 130;
  const octanePerLtr = 135;
  const totalDieselPrice = dieselLtr * dieselPerLtr;
  const totalPetrolPrice = petrolLtr * petrolPerLtr;
  const totalOctanePrice = octaneLtr * octanePerLtr;
  const totalCost = totalDieselPrice + totalPetrolPrice + totalOctanePrice;
  return totalCost;
}
console.log(oilPrice(30, 20, 10));
