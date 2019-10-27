const board = {
    id: document.getElementById('board'),
    width: document.getElementById('board').offsetWidth,
    height: document.getElementById('board').offsetHeight
    // height: this.id.offsetHeight
};
console.log(board.id.offsetWidth);
const player = {
    id: document.getElementById('player'),
    move(direction) {
        const positionX = this.id.offsetLeft;
        const positionY = this.id.offsetTop;
        switch (direction) {
            case 'ArrowLeft':
                // this.id.style.left = `${(positionX - 10).toString()}px`;
                collision()
                break;
            case 'ArrowRight':
                this.id.style.left = `${(positionX + 10).toString()}px`;
                break;
            case 'ArrowUp':
                this.id.style.top = `${(positionY - 10).toString()}px`;
                // collision()
                break;
            case 'ArrowDown':
                this.id.style.top = `${(positionY + 10).toString()}px`;
                break;
            default:
                console.log('try with arrows, dumbooooo');
        }
    }
};
document.body.addEventListener('keydown', function (event) {
    player.move(event.key)
});

function collision() {


    const {id} = player;
    const {height, width} = board;
    const positionX = id.offsetLeft;
    const positionY = id.offsetTop;
    const maxPositionY = height;

// && positionY < maxPositionY
    if (positionX > 0 ) {
        id.style.left = `${(positionX - 10).toString()}px`;
    } else {
        console.log(`first collision else log`);
    }

    console.log(height);
    console.log(`offsetTop: ${id.offsetTop}`)
}