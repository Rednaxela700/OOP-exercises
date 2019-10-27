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
        const {height, width} = board;
        const maxPositionX = width - 16;
        const maxPositionY = height - 16;

        const {id} = player;
        switch (direction) {
            case 'ArrowLeft':
                // this.id.style.left = `${(positionX - 10).toString()}px`;

                if (positionX > 0 ) {
                    id.style.left = `${(positionX - 10).toString()}px`;
                } else {
                    console.log(`first collision else log`);
                }
                break;
            case 'ArrowRight':


                if (positionX < maxPositionX ) {
                    id.style.left = `${(positionX + 10).toString()}px`;
                } else {
                    console.log(`second collision else log`);
                }

                break;
            case 'ArrowUp':

                if (positionY > 0 ) {
                    id.style.top = `${(positionY - 10).toString()}px`;
                } else {
                    console.log(`third collision else log`);
                }
                break;
            case 'ArrowDown':

                if (positionY < maxPositionY ) {
                    id.style.top = `${(positionY + 10).toString()}px`;
                } else {
                    console.log(`fourth collision else log`);
                }
                break;
            default:
                console.log('try with arrows, dumbooooo');
        }
    }
};
document.body.addEventListener('keydown', function (event) {
    player.move(event.key)
});

