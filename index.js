const board = {
    id: document.getElementById('board'),
    width: document.getElementById('board').offsetWidth
    height: document.getElementById('board').offsetHeight
    // height: this.id.offsetHeight
};
console.log(board.id.offsetWidth)
const player = {
    id: document.getElementById('player'),
    move(direction) {
        let positionX = this.id.offsetLeft;
        let positionY = this.id.offsetTop;
        switch (direction) {
            case 'ArrowLeft':
                this.id.style.left = `${(positionX - 10).toString()}px`;
                break;
            case 'ArrowRight':
                this.id.style.left = `${(positionX + 10).toString()}px`;
                break;
            case 'ArrowUp':
                this.id.style.top = `${(positionY - 10).toString()}px`;
                break;
            case 'ArrowDown':
                this.id.style.top = `${(positionY + 10).toString()}px`;
                break;
            default:
                console.log('try with arrows, dumbooooo');
        }
    }
};
document.body.addEventListener('keydown', function(event) {
    player.move(event.key)
});