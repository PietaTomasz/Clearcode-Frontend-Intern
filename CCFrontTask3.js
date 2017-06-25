"use strict";

Object.defineProperty(exports, "__esModule", {value: true});

exports.damage = function damage(spell) {
	var damage = 0, keys = [], values = [], fe = (spell.match(/fe/g)||[]).length;
	var subspells = {"fe":1,"jee":3,"je":2,"ai":2,"ain":3,"dai":5,"ne":2};
	var keys = Object.keys(subspells), values = Object.values(subspells);

	spell = spell.slice(spell.indexOf("fe"),spell.lastIndexOf("ai")+2);

	if(fe > 1){
		damage = 0;
		return damage;
	}
	else{
		var j = 1;
		while (j <= spell.length){
			j++;
			for(var i in subspells){
				if(spell.indexOf(i) >= 0){
					spell = spell.replace(i,"");
					damage += subspells[i];
				}
			}
		}
		damage -= spell.length;
		if(damage < 0){
			damage = 0;
		}
		return damage;
	}
}