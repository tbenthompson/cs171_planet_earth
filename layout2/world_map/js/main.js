main();

var worldMap;

function main() {
    worldMap = new WorldMap("#world-map", "world_map/data/world-50m.json", "world_map/data/tectonic_plates.json", "world_map/data/natural_disasters.csv");
}

function brushMapClear() {
    return worldMap.brush.clear();
}

function updateHistogram() {
    return worldMap.updateHistogram();
}

function updatePlates(){
    return worldMap.updatePlates();
}