const board = {
    id: document.getElementById('board'),
    width: document.getElementById('board').offsetWidth,
    height: document.getElementById('board').offsetHeight
    // height: this.id.offsetHeight
};
const food = {
    createEl() {
        const el = document.createElement('div');
        el.classList.add('game__food');
        el.style.top = this.changePosition(0, board.height);
        el.style.left = this.changePosition(0, board.width);
        board.id.appendChild(el)
    },
    changePosition(min,max) {
        const roundedMax = Math.round(max / 10) * 10; //rounding to tenth
        const randomPosition = Math.floor(Math.random() * (roundedMax - min + 1) + min); //generating random position (max = board width)
        const roundedRandomPos = Math.round(randomPosition / 10) * 10;
        return `${roundedRandomPos}px`
    }
};
const player = {
    id: document.getElementById('player'),
    move(direction) {
        const positionX = this.id.offsetLeft;
        const positionY = this.id.offsetTop;
        const {height, width} = board;
        const maxPositionX = width - 12;
        const maxPositionY = height - 16;

        const {id} = player;
        switch (direction) {
            case 'ArrowLeft':
                // this.id.style.left = `${(positionX - 10).toString()}px`;

                if (positionX > 0) {
                    id.style.left = `${(positionX - 10).toString()}px`;
                } else {
                    console.log(`east wall collision else log`);
                }
                break;
            case 'ArrowRight':


                if (positionX < maxPositionX) {
                    id.style.left = `${(positionX + 10).toString()}px`;
                } else {
                    console.log(`west wall collision else log`);
                }

                break;
            case 'ArrowUp':

                if (positionY > 0) {
                    id.style.top = `${(positionY - 10).toString()}px`;
                } else {
                    console.log(`north wall collision else log`);
                }
                break;
            case 'ArrowDown':

                if (positionY < maxPositionY) {
                    id.style.top = `${(positionY + 10).toString()}px`;
                } else {
                    console.log(`south wall collision else log`);
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
food.createEl();

