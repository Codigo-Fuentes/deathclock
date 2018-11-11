import React from "react";
import Chessboard from "chessboardjsx";
import StockFish from "./integrations/Stockfish.js";
import Skull from './skull.js'
import Styles from './styles.css'
import StageLeft from './stageleft.js'

class Demo extends React.Component {
  constructor(props){
    super(props)
    this.handleGameOver = this.handleGameOver.bind(this)
    this.state = {
      playerClock : 0,
      cpuClock : 0,
      gameOver: false
      }
    }

  handleGameOver(over, playerClock, cpuClock) {
      this.setState({gameOver: over})
      this.setState({playerClock: playerClock})
      this.setState({cpuClock: cpuClock})
      return
    }

  render() {

    return (
      <body style={divStyle}>
      <div>
        <header>
          <Skull
          gameOver={this.state.gameOver}
          playerClock={this.state.playerClock}
          cpuClock={this.state.cpuClock}
          ></Skull>
        </header>
        </div>
      <div style={boardsContainer}>
        <StockFish handleGameOver={this.handleGameOver}>
          {
            ({ position, onDrop }) => (
            <Chessboard
              id="chessboard"
              position={position}
              width={600}
              onDrop={onDrop}
              boardStyle={boardStyle}
              orientation="black"
              darkSquareStyle={darkSquareStyle}
              lightSquareStyle={lightSquareStyle}
              pieces={pieces}
              transitionDuration={0}
            />
          )
          }
        </StockFish>
      </div>
      <StageLeft></StageLeft>
      </body>
    );
  }
}

export default Demo;

const divStyle = {
  backgroundColor: "black",
}

const boardsContainer = {
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  background: "#000000",
  background: "-webkit-linear-gradient(#000000, #444444)",
  background: "linear-gradient(#000000, #444444)",
  paddingBottom: 20
};
const boardStyle = {
  borderRadius: "5px",
  boxShadow: `0 5px 15px rgba(0, 0, 0, 0.5)`,
  backgroundImage: "linear-gradient(136deg, #ffffff, #231f1f)",
};
const darkSquareStyle = {
  backgroundColor: 'rgba(58, 58, 58, .8)'
}
const lightSquareStyle = {
  backgroundColor: 'rgb(147, 147, 147)'
}

const pieces = {
    // natural dimensions: 288 x 669
    wK: ({ squareWidth, isDragging }) => (
      <img
        style={{
          width: 29,
          height: 67,
          paddingTop: 5,
          paddingBottom: 3
        }}
        src={"light-king.png"}
        alt={"light king"}
      />
    ),
    // natural dimensions: 288 x 651
    wQ: ({ squareWidth, isDragging }) => (
      <img
        style={{
          width: 29,
          height: 65,
          paddingTop: 7,
          paddingBottom: 3
        }}
        src={"light-queen.png"}
        alt={"light queen"}
      />
    ),
    // natural dimensions: 288 x 597
    wR: ({ squareWidth, isDragging }) => (
      <img
        style={{
          width: 29,
          height: 60,
          paddingTop: 12,
          paddingBottom: 3
        }}
        src={"light-rook.png"}
        alt={"light rook"}
      />
    ),
    // natural dimensions: 288 x 669
    wB: ({ squareWidth, isDragging }) => (
      <img
        style={{
          width: 29,
          height: 64,
          paddingTop: 8,
          paddingBottom: 3
        }}
        src={"light-bishop.png"}
        alt={"light bishop"}
      />
    ),
    // natural dimensions: 450 x 597
    wN: ({ squareWidth, isDragging }) => (
      <img
        style={{
          width: 45,
          height: 60,
          paddingTop: 12,
          paddingBottom: 3
        }}
        src={"light-knight.png"}
        alt={"light knight"}
      />
    ),
    // natural dimensions: 289 x 550
    wP: ({ squareWidth, isDragging }) => (
      <img
        style={{
          width: 25,
          height: 45,
          paddingTop: 22,
          paddingBottom: 3
        }}
        src={"light-pawn.png"}
        alt={"light pawn"}
      />
    ),

    bK: ({ squareWidth, isDragging }) => (
      <img
        style={{
          width: 29,
          height: 67,
          paddingTop: 5,
          paddingBottom: 3
        }}
        src={"dark-king.png"}
        alt={"dark king"}
      />
    ),
    bQ: ({ squareWidth, isDragging }) => (
      <img
        style={{
          width: 29,
          height: 65,
          paddingTop: 7,
          paddingBottom: 3
        }}
        src={"dark-queen.png"}
        alt={"dark queen"}
      />
    ),
    bR: ({ squareWidth, isDragging }) => (
      <img
        style={{
          width: 27,
          height: 56,
          paddingTop: 16,
          paddingBottom: 3
        }}
        src={"dark-rook.png"}
        alt={"dark rook"}
      />
    ),

    bB: ({ squareWidth, isDragging }) => (
      <img
        style={{
          width: 27,
          height: 60,
          paddingTop: 12,
          paddingBottom: 3
        }}
        src={"dark-bishop.png"}
        alt={"dark bishop"}
      />
    ),

    bN: ({ squareWidth, isDragging }) => (
      <img
        style={{
          width: 45,
          height: 60,
          paddingTop: 12,
          paddingBottom: 3
        }}
        src={"dark-knight.png"}
        alt={"dark knight"}
      />
    ),

    bP: ({ squareWidth, isDragging }) => (
      <img
        style={{
          width: 25,
          height: 45,
          paddingTop: 22,
          paddingBottom: 3
        }}
        src={"dark-pawn.png"}
        alt={"dark pawn"}
      />
    )
    }

    // dragging enlarge code:
    //  width: isDragging ? squareWidth * .65 : squareWidth * .5,
    // height: isDragging ? squareWidth * .65 : squareWidth