

let random_bombs = [0,1];

create_board(2);
filling_cells(2);

function filling_cells(size) {

   let cells = new Array(size);

   for(let i=0;i<size;i++)
   {  
      cells[i] = [];
      for(let j=0;j<size;j++)
      {
         let cell =
            {
               id: "",
               open: false,
               bomb: false,
            }
         console.log(`test_${i}_${j}`);
         cell.id = `cell_${i}_${j}`;
         if (random_bombs.includes(i*size+j)) cell.bomb=true;
         
         cells[i].push(cell);
      }
   }
   console.log(cells);
}

function create_board(size)
{
   let board = document.createElement('table');
   board.className="game_board";
   for(let i=0;i<size;i++)
   {
      let row = document.createElement('tr');
      board.appendChild(row);
      for(let j=0;j<size;j++)
      {
         let column = document.createElement('td');
         row.appendChild(column);

         let button = document.createElement('button');
         button.className="cell"
         button.id = `cell_${i}_${j}`;

         column.appendChild(button);
      }
   }
   document.getElementById("board_container").appendChild(board);
}
