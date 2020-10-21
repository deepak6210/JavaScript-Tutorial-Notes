function range(start, end, increment){
    var array = [];
    var current = start;
    var counter; 
    if (increment == undefined){
        counter = 1;
    }
    else{
        counter = increment;
    }
    if (increment > 0) {
        while(current <= end){
            array.push(current);
            current += counter; 
        }
        if (increment < 0) {
            while(current >= 0){
                array.push(current);
                current += counter;
            }
        }
        return array;
    }
}

console.log(range(2,4,2))