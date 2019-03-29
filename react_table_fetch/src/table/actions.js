export function getData(data) {
    return {
        type: 'SEND_DATA',
        data
    }
}

export function reloadData(data) {
    return {
        type: 'RELOAD_DATA'
    }
}


export function busy() {
    return {
        type: 'CHANGE_BUSY'
    }
}

export function available() {
    return {
        type: 'CHANGE_AVAILABLE'
    }
}

export function started() {
    return {
        type: 'CHANGE_STARTED'
    }
}