function damage(spell) {
var damage = [];
var keys = [];
var values = [];
var fe = (spell.match(/fe/g) || []).length;
spell = spell.slice(spell.indexOf("fe"),spell.lastIndexOf("ai")+2);
var subspells = {"fe":1,"jee":3,"je":2,"ai":2,"ain":3,"dai":5,"ne":2};
keys = Object.keys(subspells);
values = Object.values(subspells);

if(fe > 1){
	damage = 0; alert(damage);}
else{j = 1;
  while (j <= spell.length) {j++;
		for (i = 0; i < keys.length; i++){
    	if(spell.indexOf(keys[i]) >= 0){
      	spell = spell.replace(keys[i],"");
        damage = parseInt(damage + values[i]);}}}
  damage = damage - spell.length;
  if(damage<0){damage = 0;}
  alert(damage);}}

var spell = "xxxxxxxxxxx"; damage(spell);