function radianToDegree(radian) {
  const pi = Math.PI;
  const degree = (radian * 180) / pi;
  return degree.toFixed(2);
}

console.log(radianToDegree(199));
