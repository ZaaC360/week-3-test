
Array.prototype.myMap = function(cb) {
    let result = [];

    for(let i = 0; i < this.length; i++) {
        result.push(cb(this[i], i, this));
    }

    return result;
}

let evnnums = [2, 4, 6, 8];

let oddnums = evnnums.myMap(evnnum => evnnum + 1);

console.log(oddnums);
