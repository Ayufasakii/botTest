 exports.dice = function randomDice(min_val, max_val){
    return Math.floor(Math.random() * (max_val - min_val + 1)) + min_val;
}