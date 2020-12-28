let x;
let info;
const player1 = document.querySelector(`#player1`);
const player2 = document.querySelector(`#player2`);
const players = {
    X: `Player1`,
    O: `Player2`
};
players.X = prompt(`Введите имя персонажа играющего за X`, [players.X]);
players.O = prompt(`Введите имя персонажа играющего за O`, [players.O]);
player1.textContent = `X: ${players.X}`;
player2.textContent = `O: ${players.O}`;
const reset = document.querySelector(`#reset`);
reset.addEventListener(`click`, ref);



const addBoard = (mas) => {
    const cells = document.querySelectorAll(`.cell`);
    const render = () => {
        cells.forEach(cell => {
            cell.textContent = mas[cell.dataset.id];
        });

    }
    const listen = () => cells.forEach(cell => cell.addEventListener('click', play, {
        once: true
    }));
        const remove = () => cells.forEach(cell => cell.removeEventListener('click', play, {
        once: true
    }));
    return {
        mas,
        render,
        listen,
        remove
    };
}
function ref(){
   info = addBoard([``, ``, ``, ``, ``, ``, ``, ``, ``]);
info.listen();
info.render();
    x = 1;
            player2.style.fontSize = `100%`;
        player1.style.fontSize = `200%`;
}
ref();



const game = (() => {
    const result = () => {
        let iter = [[info.mas[0], info.mas[1], info.mas[2]],
                    [info.mas[3], info.mas[4], info.mas[5]],
                    [info.mas[6], info.mas[7], info.mas[8]],
                    [info.mas[0], info.mas[3], info.mas[6]],
                    [info.mas[1], info.mas[4], info.mas[7]],
                    [info.mas[2], info.mas[5], info.mas[8]],
                    [info.mas[0], info.mas[4], info.mas[8]],
                    [info.mas[2], info.mas[4], info.mas[6]], ]; //вложенный массив с массивами для проверки
        findWinner(iter);

        function findWinner(mas) {
            mas.forEach(elem => {
                if (elem[0] == elem[1] && elem[1] == elem[2] && elem[0] != ``) {
                    alert(players[elem[0]] + ` победил`);
                    info.remove();
                }
            });
        }
    }
    return {
        result
    };
})();

function play(e) {

    if (x === 1) {
        info.mas[e.currentTarget.dataset.id] = `X`;
        info.render();
        x = 0;
        player1.style.fontSize = `100%`;
        player2.style.fontSize = `200%`;
        game.result();
    } else if (x === 0) {
        info.mas[e.currentTarget.dataset.id] = `O`;
        info.render();
        x = 1;
        player2.style.fontSize = `100%`;
        player1.style.fontSize = `200%`;
        game.result();
    }
}
