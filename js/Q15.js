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