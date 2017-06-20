function damage(spell) {
	// declaring variables
	var damage = 0;
	var keys = [];
	var values = [];
	var fe = (spell.match(/fe/g)||[]).length;
	var subspells = {"fe":1,"jee":3,"je":2,"ai":2,"ain":3,"dai":5,"ne":2};
	var keys = Object.keys(subspells);
	var values = Object.values(subspells);

	// spell start with 'fe' and end with 'ai', so it has been sliced to that form
	spell = spell.slice(spell.indexOf("fe"),spell.lastIndexOf("ai")+2);

	// 'fe' can occur only once, any spells with 'fe' occurence more than 1 is incorrect, ergo damage equals 0
	if(fe > 1){
		damage = 0;
		alert(damage);
	}
	else{
		var j = 1;
		// while for loop have done iterating through all subspells and there are some left
		while (j <= spell.length){
			// could have been done by counting how many times subspell occurs in spell
			// var ai_count = (spell.match(new RegExp(ai,"g"))||[]).length;
			// but I wanted my code short and for(var i in subspells) resulted the same
			j++;
			for(var i in subspells){
				// if subspell occurs in spell, if indexOf is not negative
				if(spell.indexOf(i) >= 0){
					// spell cuts off subspell
					spell = spell.replace(i,"");
					// and damage is magnified by value of subspell
					damage += subspells[i];
				}
			}
		}
		// damage is reduced by value how many other letters have left
		damage -= spell.length;
		// should return 0 if damage is negative
		if(damage < 0){
			damage = 0;
		}
		alert(damage);
	}
}

var spell = "fejejeeaindaiyaiai"; damage(spell);