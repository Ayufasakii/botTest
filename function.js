const admin = require('firebase-admin');

let serviceAccount = require('./serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

let db = admin.firestore();
 exports.dice = function randomDice(min_val, max_val){
    return Math.floor(Math.random() * (max_val - min_val + 1)) + min_val;
}
exports.createChar = function createChar(name,gender,race){
    let docRef = db.collection('Player').doc(name);
    let setChar = docRef.set({
    name: name,
    gender: gender,
    race: race,
    Level:1,
    Exp:0,
    status:{
      Str:0,
      Agi:0,
      Int:0,
      Lux:0,
      Crit:0,
      Vit:0,
    },
    combatStatus:{
      HP:0,
      MP:0,
      SP:0
    }
    });
}