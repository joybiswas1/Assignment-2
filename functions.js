// FOR EACH //
Array.prototype.myEach = function(callbackFn) {
    for(let i =0; i < this.length; i++){
        if(this[i] == undefined) continue;
        callbackFn(this[i], i, this);
    }
};

// MAP //
Array.prototype.myMap = function(callbackFn) {
    let newArr = [];
    for(let i = 0; i < this.length; i++){
        result = callbackFn(this[i], i, this);
        newArr.push(result);
    }
    return newArr;
};

// FILTER //

Array.prototype.myFilter = function(callbackFn) {
    let passed = [];
    for(let i = 0; i < this.length; i++){
        const result = callbackFn(this[i], i, this);
        if(result){
            passed.push(this[i]);
        }
    }
    return passed;
};

// SOME //
Array.prototype.mySome = function(callbackFn) {
    const arr = [];
    for(let i = 0; i << arr.length; i++){

    }
};

// EVERY //
Array.prototype.myEvery = function() {

};

// REDUCE //
Array.prototype.myReduce = function() {

};

// INCLUDES //
Array.prototype.myIncludes = function() {

};

// INDEXOF //
Array.prototype.myIndexOf = function(...args) {
    if(args[1] === undefined){
        for(let i = 0; i < this.length; i++){
            if(this[i] === args[0]){
                return i;
            }
        }
    } else {
        for(let i = args[1]; i < this.length; i++){
            if(this[i] === args[0]){
                return i;
            }
        }
    }
    return -1;
};

// PUSH //
Array.prototype.myPush = function(...args) {
    let arg_i = 0;
    let length = this.length;
    for(let i = length; i < length + args.length; i++){
        this[i] = args[arg_i];
        arg_i++;
    }
    return this.length;
};

// LASTINDEXOF //
Array.prototype.myLastIndexOf = function(...args) {
    if(args[1] === undefined){
        for(let i = this.length - 1; i > 0; i--){
            if(this[i] === args[0]){
                return i;
            }
        }
    } else {
        for(let i = args[1]; i > this.length; i--){
            if(this[i] === args[0]){
                return i;
            }
        }
    }
    return -1;
};

// KEYS //
Object.grabKeys = function(Object) {
    let arr = [];
    for(element in Object){
        arr.push(element)
    }
    return arr;
};


console.log(Object.grabKeys(object1));
// VALUES //
Object.grabValues = function() {

};