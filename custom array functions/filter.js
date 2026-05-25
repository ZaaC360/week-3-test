Array.prototype.myfilter = function(cb){
    let temparr = [];

    for (let i = 0; i < this.length; i++) {
        if(cb(this[i],i,this)){
            temparr.push(this[i])
        }
    }
    return temp;
}

