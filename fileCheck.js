// check the input file is javascript file.
function isJavascriptFile(fileName) {
  if (typeof fileName !== "string") {
    return "please provide a valid file name";
  }
  const checkFile = fileName.endsWith(".js");
  if (checkFile) {
    return true;
  } else {
    return false;
  }
}

console.log(isJavascriptFile("app.js"));
