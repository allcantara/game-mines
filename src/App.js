import React from 'react';

import MineField from './components/MineField'
import Header from './components/Header'
import LevelSelection from './components/LevelSelection'

import { Container, Board } from './style'

import {
  createMinedBoard,
  cloneBoard,
  openField,
  hadExplosion,
  wonGame,
  showMines,
  invertFlag,
  flagsUsed
} from './functions'

import params from './config/params'

export default class App extends React.Component {

  constructor(props){
    super(props)
    this.state = this.createState()
  }
  

  minesAmount = () => {
    const cols = params.getColumnsAmount()
    const rows = params.getRowsAmount()
    return Math.ceil(cols * rows * params.difficultLevel)
  }

  createState = () => {
    const cols = params.getColumnsAmount()
    const rows = params.getRowsAmount()
    return ({
      board: createMinedBoard(rows, cols, this.minesAmount()),
      won: false,
      lost: false,
      showLevelSelection: false
    })
  }

  onOpenField = (row, column) => {
    const board = cloneBoard(this.state.board)
    openField(board, row, column)
    const lost = hadExplosion(board)
    const won = wonGame(board)

    if(lost) {
      showMines(board)
      alert('Você perdeu!!!')
    }

    if(won) {
      alert('Parabéns! Você é um vencedor!')
    }

    this.setState({
      board, won, lost
    })
  }

  onSelectField = (row, column) => {
    const board = cloneBoard(this.state.board)
    invertFlag(board,row, column)
    const won = wonGame(board)

    if(won) {
      alert('Parabéns! Você é um vencedor!')
    }

    this.setState({ board, won })
  }

  onLevelSelected = level => {
    params.difficultLevel = level
    this.setState(this.createState())
  }

  render() {
    return (
      <Container>
        <LevelSelection 
          onLevelSelected={this.onLevelSelected}
          onCancel={() => this.setState({ showLevelSelection: false })}
        />
        <Header 
          flagsLeft={this.minesAmount() - flagsUsed(this.state.board)}
          onNewGame={() => this.setState(this.createState())}
          onFlagPress={() => this.setState({ showLevelSelection: true })}
        />
        <Board>
          <MineField board={this.state.board} 
            onOpenField={this.onOpenField}
            onSelectField={this.onSelectField}
          />
        </Board>
      </Container>
    );
  }
}


