const addBoard = (mas) =>{
        const render = () => {
            const cells = document.querySelectorAll(`.cell`);
            cells.forEach(cell => {
                cell.textContent = mas[cell.dataset.id];
               });
        }
        return{mas, render};
}

const info = addBoard([``, ``,``, ``,``, ``,``, ``,``]);
info.render();

const game = ()=>{
    
}