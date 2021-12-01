const arr = [{
    name: 'baba johns',
    id: 2312,
    missions: []
}]

export function createworker(value) {
    if (value === '' || value === null) return;
    let id = Math.floor(Math.random() * 1000000000);

    let workers = localStorage.getItem('workers');
    if (workers === '' || workers === null) {
        localStorage.setItem('workers', JSON.stringify({}));
        workers = JSON.parse(localStorage.getItem('workers'))
    } else {
        workers = JSON.parse(localStorage.getItem('workers'))
    }
    workers[id] = {
        name: value,
        id: id,
        missions: {},
        isChecked: false,
    }
    localStorage.removeItem('workers');
    localStorage.setItem('workers', JSON.stringify(workers));
}

export function callWorkers() {
    let workers = localStorage.getItem('workers') ? JSON.parse(localStorage.getItem('workers')) : '';
    return workers;
}

export function updateWorker(id, isChecked) {
    let workers = JSON.parse(localStorage.getItem('workers'))
    workers[id].isChecked = isChecked;
    localStorage.removeItem('workers');
    localStorage.setItem('workers', JSON.stringify(workers));
}