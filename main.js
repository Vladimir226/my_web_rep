

let random_bombs = [];
let clicked_bombs = [];
let cells = [];
let click_color = "blue";
let bomb_color = "red";
let size=3;
let game_over = false;




create_random_boms(size,5);
filling_cells(size);
create_board(size);

function filling_cells(size) {
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
         
         cell.id = `cell_${i}_${j}`;
         if (random_bombs.includes(i*size+j)) cell.bomb=true;
         
         cells[i].push(cell);
      }
   }
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

         button.onclick = function() {
            
            if(game_over==true) return;
            for (let i =0; i<size;i++)
            {
               for(let j=0;j<size;j++)
               {
                  
                  if(cells[i][j].id == button.id)
                  {
                     console.log(`cell ${i}  ${j} clicked`);
                     cells[i][j].open = true;
                     button.style.backgroundColor = click_color;
                     console.log(cells);

                     if (random_bombs.includes(i*size+j))
                     {
                        cells[i][j].bomb = true;
                        button.style.backgroundColor = bomb_color;

                        if(!clicked_bombs.includes(i*size+j))
                        {
                           clicked_bombs.push(i*size+j);
                        }
                     }
                  }
               }
            }
            console.log(random_bombs.sort().toString());
            console.log(clicked_bombs.sort().toString());
            if(random_bombs.sort().toString()==clicked_bombs.sort().toString())
            {
               console.log("Game over!");
               game_over=true;
            }
         };
         
         column.appendChild(button);
      }
   }
   document.getElementById("board_container").appendChild(board);
}


function create_random_boms(size,count) 
{
   let counter = 0;
   while (counter!=count)
   {
      let unique = Math.floor(Math.random() * size*size);
      if (!random_bombs.includes(unique))
      {
         random_bombs.push(unique);
         counter=counter+1;
      }
   }
}


console.log(random_bombs)


