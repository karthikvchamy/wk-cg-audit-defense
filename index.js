const brain = require("brain.js");
const network = new brain.NeuralNetwork();
const db = require("./db.json");

const data = db.returns.map((d)=>{return d.data});

network.train(data);

const result = network.run({
    h: 6,
    w: 175
});

console.log(result);
