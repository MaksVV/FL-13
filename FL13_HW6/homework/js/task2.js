let character = prompt('Please, input character');
let summChar=character.length;
let middleChar;
let half=2;
if(character===''|| character==='  '){
  alert('Invalid value');
}else{
   if (summChar%half===0){
   alert(character.substring(summChar/half-1,summChar/half+1));
   }else{
     alert(character.charAt(summChar/half));
   }
 }