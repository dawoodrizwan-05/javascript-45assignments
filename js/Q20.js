const prompt = require('prompt-sync')();
function createList(list,variable){
    list.push(variable);
}



function make_array(array){
    while (1){
        var item = prompt(`Enter any thing to add into list. write 'end' to exit the list`);
        if(item == 'end'){
           break;
        }
        createList(array,item);
        }
        
}

var array =[];
make_array(array);
console.log(array);