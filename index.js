const board = {
  id: document.getElementById('board'),
};
const player = {
    id: document.getElementById('player'),
    moveLeft() {
        console.log(this.id.offsetLeft);
        console.log(this.id.offsetLeft);
        this.id.style.left = '10px';
    }
};


console.log(player.id);
board.id.addEventListener('click', () => {
    let actualPosition = player.id.offsetLeft;
    return player.id.style.left = `${(actualPosition + 10).toString()}px`
});

function getPosition(element) {

}

document.body.addEventListener('keydown', function (event) {
    const key = event.key;
    let actualPositionX = player.id.offsetLeft;
    let actualPositionY = player.id.offsetTop;
    switch (key) {
        case 'ArrowLeft':
            console.log('lewo');
            return player.id.style.left = `${(actualPositionX - 10).toString()}px`;
            break;
        case 'ArrowRight':
            console.log('prawo');
            return player.id.style.left = `${(actualPositionX + 10).toString()}px`;
            break;
        case 'ArrowUp':
            console.log('góra');
            return player.id.style.top = `${(actualPositionY - 10).toString()}px`;
            break;
        case 'ArrowDown':
            console.log('dół');
            return player.id.style.top = `${(actualPositionY + 10).toString()}px`;
            break;
    }})