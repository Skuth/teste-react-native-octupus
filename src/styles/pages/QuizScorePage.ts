import styled from "styled-components/native"

import { ScoreCircleContainerProps } from "../../interfaces"

export const ScoreContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-between;
  padding: 80px 0;
`

export const Title = styled.Text`
  color: #fff;
  font-size: 40px;
  font-weight: bold;
  text-align: center;
`
export const Text = styled.Text`
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  margin-top: 20px;
`

export const ScoreCircleContainer = styled.View`
  width: 200px;
  height: 200px;
  background: ${({ backgroundColor }: ScoreCircleContainerProps) =>
    backgroundColor || "#2ed573"};
  align-items: center;
  justify-content: center;
  border-radius: 100px;
  overflow: hidden;
`

export const ScoreCircleText = styled.Text`
  font-size: 60px;
  font-weight: bold;
  color: #ffffff;
`
