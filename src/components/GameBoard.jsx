
export default function GameBoard({onSelectedSquare, board}) {
    
    // const [GameBoard,setGameBoard] = useState(initialGameBoard);
    // function handleBoard(rowIndex,colIndex) {
    //     setGameBoard(prevGameBoard => {
    //         const updatedBoard=[...prevGameBoard.map(innerBoard => [...innerBoard])];
    //         updatedBoard[rowIndex][colIndex] = isActiveSymbol;
    //         return updatedBoard;
    //     } )
    //onSelectedSquare();

    return(
        <ol id="game-board">
            {board.map((row,rowIndex) => <li key={rowIndex}>
            <ol>
                {row.map((playerSymbol, colIndex) => <li key={colIndex}><button onClick={() => onSelectedSquare(rowIndex,colIndex)} disabled={playerSymbol !==null}>{playerSymbol}</button></li>)}
            </ol>
            </li>)}
        </ol>
    );
}