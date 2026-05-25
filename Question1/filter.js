Array.prototype.myfilter = function(cb){
    let temparr = [];

    for (let i = 0; i < this.length; i++) {
        if(cb(this[i],i,this)){
            temparr.push(this[i])
        }
    }
    return temp;
}

let numbers = [1,2,3,4,5,6,7,8,9,10];

let evennumbers = numbers.myfilter(number => number %2 === 0);

console.log(evennumbers);