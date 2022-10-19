var character = document.getElementById{"character"};
var block = document.gEtemementById{"block"};
function jump (){
if character.classlist    ! ="animate"){}
character.classlist.add("animate");
 }
setTimeout function(){
         character classlist.remove.("amimate");
     },500);
    }

 var checkDead = setInterval(function(){ 
var charactertop = parseINT(window.getcomputestyle (character).getpropertyValue(top));
  var blockleft = parseINT(window.geomputedstyle(block).getpropertyvalue ("left"));
if(blockLeft<20 && blockLeft>0 && charactertop>=130){
block.style.animation= "none";
block.style.display= "none";
alert("u lose");
}
 },10);
