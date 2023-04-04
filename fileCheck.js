// check the input file is javascript file.
function isJavascriptFile(fileName) {
  const checkFile = fileName.endsWith(".js");
  if (checkFile) {
    return true;
  } else {
    return false;
  }
}

console.log(isJavascriptFile("app.js"));
