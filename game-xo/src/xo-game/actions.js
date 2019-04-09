export function addBloks(data){
    // console.log(data);
    return {
        type: 'NEW_DATA',
        data
    }
}

export function whoIsPlaying() {
    
    return {
        type: 'GET_PLAYER'
    }
}

export function setPlayer(){
    return {
        type: 'SET_PLAYER',
        player: true
    }
}

export function victoryCheck(bloks){
    return {
        type: 'CHECK',
        bloks      
    }
    
}

export function clearPoint() {
    return {
        type: 'CLEAR_POINT'
    }
}

export function continueGame() {
    return {
        type: 'CONTINUE'
    }
}
