import styled from 'styled-components'

export const MainBg = styled.div`
  min-height: ${props => props.height}vh;
  background-color: ${props => props.backGroundColor};
  display: flex;
  flex-direction: ${props => props.direction};
  align-items: center;
  border: ${props => props.border};
  border-radius: ${props => props.radius}px;
  padding: ${props => props.padding}px;
  width: ${props => props.width}vw;
  justify-content: space-between;
  margin: 30px;
`
export const TypesParaCont = styled.div`
  display: flex;
  flex-direction: column;
`

export const ParaH1 = styled.h1``

export const Para = styled.p`
  font-family: 'Roboto';
`

export const Break = styled.br``

export const ScoreCont = styled.div`
  min-height: 20vh;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  width: 30%;
  align-items: center;
`
export const IconsCont = styled.div`
  display: flex;
  flex-direction: column;
  width: 75%;
  align-items: center;
  margin: 20px;
`
export const FirstIconCont = styled.div`
  display: flex;

  width: 100%;
  align-items: center;
  justify-content: center;
`
export const IconBtn = styled.button`
  border: none;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const IconImg = styled.img`
  height: 200px;
  width: 200px;
`
export const RulesCont = styled.div`
  display: flex;

  // width: 75%;
  align-items: center;
  margin: 20px;
`

export const RulesBtn = styled.button`
  align-self: ${props => props.align};
`

export const PopupCont = styled.div`
  height: 40vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
`

export const PopupImg = styled.img`
  height: 200px;
  width: 200px;
`
