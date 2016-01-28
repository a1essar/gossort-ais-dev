'use strict';

var fs = require('fs');
var branches = require('./branches.json');
var gsu = require('./gsu.json');
var cultures = require('./cultures.json');
var cultivars = require('./cultivars.json');

function parseGsuList() {
    let gsuList = [];
    let branchesIds = [];

    branches.forEach((el) => {
        branchesIds[el.id] = el.name;
    });

    gsu.forEach((el) => {
        gsuList.push({
            gsu: el.name,
            branch: branchesIds[el.branchId]
        });
    });

    fs.writeFileSync('./src/assets/json/gsuList.json', JSON.stringify(gsuList), 'utf8');
}

function parseBranchesList() {
    let branchesList = [];

    branchesList = branches.map((el) => {
        return el.name;
    });

    fs.writeFileSync('./src/assets/json/branchesList.json', JSON.stringify(branchesList), 'utf8');
}

function parseCulturesList() {
    let culturesList = [];

    culturesList = cultures.map((el) => {
        return el.culture;
    });

    fs.writeFileSync('./src/assets/json/culturesList.json', JSON.stringify(culturesList), 'utf8');
}

function parseCultivarsList() {
    let cultivarsList = [];

    cultivarsList = cultivars.map((el) => {
        return {
            cultivar: el.variety,
            culture: el.culture
        };
    });

    fs.writeFileSync('./src/assets/json/cultivars.json', JSON.stringify(cultivarsList), 'utf8');
}

function parseCulturesFromCultivarsList() {
    let culturesList = [];

    cultivars.forEach((el) => {
        culturesList.push(el.culture);
    });

    culturesList = uniq(culturesList);

    fs.writeFileSync('./src/assets/json/culturesFromCultivars.json', JSON.stringify(culturesList), 'utf8');
}

function uniq(a) {
    var seen = new Set();
    return a.filter(function(x) {
        return !seen.has(x) && seen.add(x);
    })
}

parseCulturesFromCultivarsList();
//parseCultivarsList();
//parseCulturesList();
//parseGsuList();
//parseBranchesList();
