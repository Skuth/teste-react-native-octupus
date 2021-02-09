import styled from "styled-components/native"

import { QuizProgressProps, QuizOptionItemProps } from "../../interfaces"

export const QuizHeader = styled.View`
  padding-top: 30px;
  position: relative;
`

export const QuizProgressText = styled.Text`
  padding: 10px 0;
  font-size: 20px;
  font-weight: bold;
  color: #ffffff;
`

export const QuizTimeLeftText = styled.Text`
  padding: 10px 20px;
  background: #333;
  border-radius: 10px;
  color: #ffffff;
  font-weight: bold;
  font-size: 18px;
  position: absolute;
  right: 0;
  top: 30px;
  overflow: hidden;
`

export const QuizProgressContainer = styled.View`
  width: 100%;
  height: 20px;
  border-radius: 100px;
  margin-top: 10px;
  background: #333;
  position: relative;
  overflow: hidden;
`

export const QuizProgress = styled.View`
  width: ${({ step, steps }: QuizProgressProps) => `${(100 / steps) * step}%`};
  height: 20px;
  border-radius: 100px;
  margin-top: 10px;
  background: #7462c9;
  position: absolute;
  top: -10px;
  overflow: hidden;
`

export const QuizBody = styled.ScrollView`
  flex: 1;
  margin: 20px 0;
`

export const QuizImage = styled.Image`
  width: 100%;
  height: 200px;
  margin: 20px auto;
  border-radius: 10px;
  overflow: hidden;
`

export const QuizQuestion = styled.Text`
  padding: 10px 0;
  font-size: 18px;
  font-weight: bold;
  color: #ffffff;
`

export const QuizOptionsContainer = styled.View``

export const QuizOptionItem = styled.Text`
  color: #ffffff;
  background: ${({ active }: QuizOptionItemProps) =>
    active ? "#7462c9" : "transparent"};
  border: 2px solid
    ${({ active }: QuizOptionItemProps) => (active ? "transparent" : "#333")};
  font-size: 18px;
  font-weight: bold;
  padding: 20px 15px;
  border-radius: 10px;
  overflow: hidden;
  margin-top: 20px;
`

export const QuizButtons = styled.View``
