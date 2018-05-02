'use strict';
const brain = require("brain.js");
const network = new brain.NeuralNetwork();
const db = require("../../db.json");
const fs = require('fs');
exports.train = function (req, res) {
    
    res.json({ "test": "hello" });
    //console.log(req.body);
    fs.readFile('../../Codegames2018/wk-cg-audit-defense/return_mocks/input/' + req.body.id + '.json', 'utf8', function (err, data) {
        if (err) {
            return console.log(err);
        }
        

        fs.readFile('../../Codegames2018/wk-cg-audit-defense/db.json', 'utf8', function (e, d) {
            
            var result = JSON.parse(d)
            //d.returns.push({ "data": data, "id": 4 });
            result.returns.push(JSON.parse(data));
            //console.log(result);
            fs.writeFile('../../Codegames2018/wk-cg-audit-defense/db.json', JSON.stringify(result), function (err1) {
                if (err1) {
                    return console.log(err1);
                }
                console.log("Update to db successful!");
            });
        });
    });

};

exports.assess = function (req, res) {

    const data = db.returns.map((d) => { return d.data });

    network.train(data);

    fs.readFile('../../Codegames2018/wk-cg-audit-defense/return_mocks/output/' + req.body.id + '.json', 'utf8', function (ex, dt) {
        var rs = JSON.parse(dt);        

        const result = network.run(rs.data);

        res.json(result);
    });

    
};
