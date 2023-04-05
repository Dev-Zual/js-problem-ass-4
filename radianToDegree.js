function radianToDegree(radian) {
  if (typeof radian !== "number") {
    return "please provide a valid input";
  }
  const pi = Math.PI;
  const degree = (radian * 180) / pi;
  return degree.toFixed(2);
}

console.log(radianToDegree("199"));
