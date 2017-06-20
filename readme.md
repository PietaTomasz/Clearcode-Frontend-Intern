Task 1.
The tooltip is almost the same, unfortunately I couldn't create a pseudo question mark, so I changed the mouse pointer, maybe before and after pseudo elements may help, I hope tasks would not been evaluated zero-one, passed or failed, I count on getting some points :)

Task 2.
Also not fully written, maybe the implementation will be different from the expected, but function is passing and evaluating to the correct result. Written just as a basic function damage() {return damage}, however instead of return I used alert for more visualization in the process of writing this function. I haven't exported damage function, because I'm not familiar with the issue yet and haven't iterate through subspells by random, I tried, but failed.
The process of solving the problem:
As only the correct spell starts with fe, and ends with ai, I cut the string to the beginning of the first occurrence of fe, and the ending of the two indexes from the last occurrence of ai; I made a sub-spell dictionary to create a list of keys and a list of values ??for this dictionary; using for loop I made the function so that each time the sub-spell adds damage points to the final value and converts the spell to the spell-less subspell; it only occurs when the sub-spell is present in the spell, but when it finishes to iterate after all the sub-spells and the spell still has another sub-spell, the function iterates until all the possibilities are checked; damage is magnified for each iteration, and when the letters do not belong to any sub-spell, the function counts their sum and subtracts from the final damage; When the damage is below zero, the function returns zero damage; in case where the "fe" sub-spell occurs more than once, the spell is incorrect, resulting in zero damage.


No matter if tasks would be rated positive or negative, I'd like to get a brief comment (what I did well, what is wrong, what should I improve, what issues to read), which direct my learning in the right direction. Nevertheless, I hope I will be attending the clearcode training program, which would boost up my aquiring knowledge and understanding new issues under the guidance of senior developers.

I am looking forward to Your feedback. 
Tomasz Piêta