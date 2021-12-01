export function createMission(value, id) {
    if (value === '' || value === null) return;
    let workers = JSON.parse(localStorage.getItem('workers'));
    let mission = { name: value, isChecked: false }
    workers[id].mission[Object.keys(workers[id].mission).length] = mission
    localStorage.removeItem('workers');
    localStorage.setItem('workers', JSON.stringify(workers));
}

export function addMission(id) {
    console.log(id)
}