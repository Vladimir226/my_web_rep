

let random_bombs = [];
let clicked_bombs = [];
let cells = [];
let result = false;
let game_over = false;
let value_cur_time=0;

const click_color = "blue";
const bomb_color = "red";
const size=5;
const bombs=10;
const game_time = 20



function Game_start()
{
   timer_start();
   create_random_boms(size,bombs);
   filling_cells(size);
   create_board(size);
}

function Game_restart()
{
   Board_clear();
   Data_clear();
   Game_start();
}

function Board_clear()
{
   document.getElementById('board_container').innerHTML="";
}

function Data_clear()
{
   
   random_bombs = [];
   clicked_bombs = [];
   cells = [];
   game_over = false;
   value_cur_time=0;

}

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
               result=true;
               clearInterval(window.timerId);
               Game_over();
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


//Эта функция запускает таймер
function timer_start() {
	window.timerId = window.setInterval(timer, 1000);
}
//Эта функция останавливает таймер
function timer_stop() {
	window.clearInterval(window.timerId);
}

//Эта функция меняет value для инпута
function timer() {
	value_cur_time=value_cur_time+1
   console.log(value_cur_time);
   if (value_cur_time==game_time)
   {
      timer_stop();
      Game_over();
   }
}
function Game_over()
{
   game_over=true;
   timer_stop();
   Result_game(result);
}


function Result_game(result) 
{
   if(result)
   {
      console.log("Game over!, you win!!!");
   }
   else
   {
      console.log("stop! you lose(")
   }
}


console.log(random_bombs)


