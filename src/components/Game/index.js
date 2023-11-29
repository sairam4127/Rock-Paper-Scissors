import {RiCloseLine} from 'react-icons/ri'

import Popup from 'reactjs-popup'

import {Component} from 'react'
import 'reactjs-popup/dist/index.css'

import {
  MainBg,
  TypesParaCont,
  ParaH1,
  Para,
  ScoreCont,
  IconsCont,
  FirstIconCont,
  IconBtn,
  IconImg,
  RulesBtn,
  RulesCont,
  PopupCont,
  PopupImg,
  Break,
} from './styled'

class Game extends Component {
  state = {
    score: 0,
    playingState: true,
    yourChoice: '',
    opponentChoice: '',
    resultStr: '',
  }

  playAgain = () => {
    this.setState({playingState: true})
  }

  scoreUpdate = (yourChoice, randomIndex) => {
    if (yourChoice === 0 && randomIndex === 1) {
      return 'YOU WON'
    }
    if (yourChoice === 0 && randomIndex === 2) {
      return 'YOU LOSE'
    }
    if (yourChoice === 1 && randomIndex === 0) {
      return 'YOU LOSE'
    }
    if (yourChoice === 1 && randomIndex === 2) {
      return 'YOU WON'
    }
    if (yourChoice === 2 && randomIndex === 0) {
      return 'YOU WON'
    }
    if (yourChoice === 2 && randomIndex === 1) {
      return 'YOU LOSE'
    }
    return 'IT IS DRAW'
  }

  scoreAndOppGenerator = yourChoice => {
    const {choicesList} = this.props
    const randomIndex = Math.floor(Math.random() * choicesList.length)
    const ScoreUpdStatus = this.scoreUpdate(yourChoice, randomIndex)
    let scoreupd
    if (ScoreUpdStatus === 'YOU WON') {
      scoreupd = 1
    } else if (ScoreUpdStatus === 'YOU LOSE') {
      scoreupd = -1
    } else {
      scoreupd = 0
    }
    this.setState(prevState => ({
      score: prevState.score + scoreupd,
      opponentChoice: choicesList[randomIndex].imageUrl,
      resultStr: ScoreUpdStatus,
    }))
  }

  onClickedSecondBtn = () => {
    const {choicesList} = this.props
    this.scoreAndOppGenerator(1)
    this.setState({yourChoice: choicesList[1].imageUrl, playingState: false})
  }

  onClickedThirdBtn = () => {
    const {choicesList} = this.props
    this.scoreAndOppGenerator(2)
    this.setState({yourChoice: choicesList[2].imageUrl, playingState: false})
  }

  onClickedFirstBtn = () => {
    const {choicesList} = this.props
    this.scoreAndOppGenerator(0)
    this.setState({yourChoice: choicesList[0].imageUrl, playingState: false})
  }

  render() {
    const {choicesList} = this.props
    const {
      score,
      playingState,
      yourChoice,
      opponentChoice,
      resultStr,
    } = this.state
    return (
      <MainBg
        border="none"
        direction="column"
        backGroundColor="#223a5f"
        height={100}
        padding={30}
        width={100}
      >
        <MainBg
          border="#ffffff solid 2px"
          direction="row"
          backGroundColor="transparent"
          height={25}
          radius={20}
          padding={30}
          width={75}
        >
          <TypesParaCont>
            <ParaH1>
              Rock <Break />
              Paper
              <Break /> Scissors
            </ParaH1>
          </TypesParaCont>
          <ScoreCont>
            <Para>Score</Para>
            <Para>{score}</Para>
          </ScoreCont>
        </MainBg>
        {playingState ? (
          <IconsCont>
            <FirstIconCont>
              <IconBtn
                type="button"
                onClick={this.onClickedFirstBtn}
                data-testid="rockButton"
              >
                <IconImg
                  src={choicesList[0].imageUrl}
                  alt={choicesList[0].id}
                />{' '}
              </IconBtn>
              <IconBtn
                type="button"
                onClick={this.onClickedSecondBtn}
                data-testid="scissorsButton"
              >
                <IconImg
                  src={choicesList[1].imageUrl}
                  alt={choicesList[1].id}
                />{' '}
              </IconBtn>
            </FirstIconCont>
            <FirstIconCont>
              {' '}
              <IconBtn
                type="button"
                onClick={this.onClickedThirdBtn}
                data-testid="paperButton"
              >
                <IconImg
                  src={choicesList[2].imageUrl}
                  alt={choicesList[2].id}
                />{' '}
              </IconBtn>{' '}
            </FirstIconCont>
          </IconsCont>
        ) : (
          <IconsCont>
            <RulesCont>
              {' '}
              <IconBtn>
                <Para>Rock</Para>
                <IconImg src={yourChoice} alt="your choice" />{' '}
              </IconBtn>
              <IconBtn>
                <Para>Opponent</Para>
                <IconImg src={opponentChoice} alt="opponent choice" />{' '}
              </IconBtn>
            </RulesCont>
            <IconsCont>
              <Para>{resultStr}</Para>
              <RulesBtn type="button" align="center" onClick={this.playAgain}>
                Play Again
              </RulesBtn>
            </IconsCont>
          </IconsCont>
        )}

        <IconsCont>
          <Popup
            modal
            trigger={
              <RulesBtn type="button" align="flex-end">
                Rules
              </RulesBtn>
            }
          >
            {close => (
              <>
                <PopupCont>
                  <RulesBtn
                    type="button"
                    align="flex-end"
                    onClick={() => close()}
                  >
                    {}
                    <RiCloseLine size={30} />
                  </RulesBtn>
                  <PopupImg
                    src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                    alt="rules"
                  />
                </PopupCont>
              </>
            )}
          </Popup>
        </IconsCont>
      </MainBg>
    )
  }
}

export default Game
