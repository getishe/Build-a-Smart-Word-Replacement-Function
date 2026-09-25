function myReplace(sentence, str, replaceWord){
  let cap;
  let replacewordCapital;
  let regex = /[A-Z]/
 
  let result = "";
 
  if(!sentence.includes(str.trim())){ 
   return "String not found";
}
  
cap = str[0];   
if(regex.test(cap)){
  replacewordCapital = replaceWord[0].toUpperCase() + replaceWord.slice(1);

}
else {
  replacewordCapital = replaceWord[0].toLowerCase() + replaceWord.slice(1);
}
  result = sentence.replace(str, replacewordCapital); 

  return result;
}

console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));
