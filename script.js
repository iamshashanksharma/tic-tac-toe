let cells = Array.from(document.getElementsByClassName('cell'));
let playerResponse = 'X';
let computerResponse = 'O';
let gameStatus = false;
let winner = document.getElementById('winner');
let winnerText = "";

function checkWinCondition()
{
    let cellsFilled = true;
    const winCondition = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,4,8],
        [2,4,6],
        [0,3,6],
        [1,4,7],
        [2,5,8]
    ];

    for(let condition of winCondition)
    {
        if((cells[condition[0]].innerHTML === playerResponse) &&
        (cells[condition[1]].innerHTML === playerResponse) &&
        (cells[condition[2]].innerHTML === playerResponse))
        {
            winnerText = "player wins";
            gameStatus = true;
            break;
        }
        
        else if((cells[condition[0]].innerHTML === computerResponse) &&
        (cells[condition[1]].innerHTML === computerResponse) &&
        (cells[condition[2]].innerHTML === computerResponse))
        {
        
            winnerText = "computer wins ";
            gameStatus = true;
            break;
        }

}
      if(!gameStatus)
      {
        for(let cell of cells)
        {
            if(cell.innerHTML === "")
            {
                cellsFilled = false;
                break;
            }
        }
             if(cellsFilled)
            {
                winnerText = "Match Drawn";
                gameStatus = true;
            }
        
      }
return winnerText;
}
function makeMove(cellIndex)
{
    let result;
    if(!gameStatus && cells[cellIndex].innerHTML === "")
    {
        cells[cellIndex].innerHTML = playerResponse;
         result=checkWinCondition();
         winner.innerText += result;
         
    }
      if(!gameStatus)
      {
        let cmpMoveArray = [];
        for(let i=0;i<cells.length;i++)
        {
            if(cells[i].innerHTML === "")
            {
                cmpMoveArray.push(cells[i]);
            }
        }
        if(cmpMoveArray.length > 0)
        {
            let randomIndex = Math.floor(Math.random() * cmpMoveArray.length);
            cmpMoveArray[randomIndex].innerHTML = computerResponse;
            result=checkWinCondition();
            winner.innerText += result;
        }
}
}

        
