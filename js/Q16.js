console.log('\n',"Before replacing :");
var invitation = ["Ahmad", "Timmy", "Dogar"];

for(var i =0; i< invitation.length; i++)
{
    console.log('\n','\t','\t',"Mr.", invitation[i],  "! You are cordially invited to join us at dinner at the prestigious alhamrah hall");   
}
console.log('\n',invitation[1]," can't make dinner");

invitation[1] = "noni";
console.log('\n',"After replacing :");
for(var j =0; j< invitation.length; j++)
{
    console.log('\n','\t','\t',"Mr.", invitation[j],  "! You are cordially invited to join us at dinner at the prestigious alhamrah hall");   
}

console.log('\n',"Now more space is available, so more guest join us at this big dinner");

invitation.unshift("Haider");
invitation.splice((invitation.length/2),0,"Abdur rehman");
invitation.push("Faizan");

console.log('\n',"After adding more guests :");
for(var z =0; z< invitation.length; z++)
{
    console.log('\n','\t','\t',"Mr.", invitation[z],  "! You are cordially invited to join us at dinner at the prestigious alhamrah hall");   
}