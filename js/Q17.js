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
console.log(invitation);
console.log("sorry we can invite only two people at dinner");
for(var i1 = invitation.length-1; i1>1; i1--)
{
    console.log('\n','\t','\t',"Mr.", invitation[i1],  "! sorry you are not invited at the dinner");  
    invitation.pop(); 
}
console.log(invitation);
for(var i1 =0; i1<invitation.length; i1++)
{
    console.log('\n','\t','\t',"Mr.", invitation[i1],  "! you people are still invited at the dinner");  
}

for(var i= invitation.length ; i>=0 ; i--){
    invitation.pop();
}
console.log("List is empty",invitation);