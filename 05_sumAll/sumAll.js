const sumAll = function(start,finish) {

let largrNmbr;
let smllrNmbr;
let result = 0;

if(start < 0 || finish < 0 || typeof(start) != "number" || typeof(finish) != "number"){
    return "ERROR";
}
else if (start > finish){
    largrNmbr = start;
    smllrNmbr = finish;
}
else{
    smllrNmbr = start;
    largrNmbr = finish;
}

for (let i = smllrNmbr;i<=largrNmbr;i++)
{
    result +=i;
}
return result;
};

// Do not edit below this line
module.exports = sumAll;
