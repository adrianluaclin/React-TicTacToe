import React, {useState} from 'react'
import Cell from '../components/Cell'
import '../components/Board.css'

export default function Board(){

    const [cells,setCells] = useState(Array(9).fill(""))
    const [value,setValue] = useState(true)

    const winner = (cells) =>{
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
              return cells[a];
            }
        }
        return null;
    } 
    const handleClick = (i) => {
         
        if(!winner(cells) && !cells[i]){
            cells[i] = value ? "X" : "O"
        }

        setCells((oldCells) => [...oldCells,cells])
        setValue(!value)
    }

    const displayCellValue = (i) => {
         
        return (<Cell value={cells[i]} onClick= { function() { handleClick(i) } } /> )
    }

    const win = winner(cells) ?? "draw"
    const next = value ? "X" : "O"

    return(

        <div>
            <div className="winner"> Winner: {win} </div>
            <div className="next"> Next Player: {next} </div>
            <div className="board">
                <div className="board-row">
                    {displayCellValue(0)}
                    {displayCellValue(1)}
                    {displayCellValue(2)}
                </div>
                <div className="board-row">
                    {displayCellValue(3)}
                    {displayCellValue(4)}
                    {displayCellValue(5)}
                </div>
                <div className="board-row">
                    {displayCellValue(6)}
                    {displayCellValue(7)}
                    {displayCellValue(8)}
                </div>
            </div>
        </div>
       
    )
}