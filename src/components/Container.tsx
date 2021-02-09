import React from "react"
import { Container } from "../styles/components/Container"

interface ContainerProps {
  children: React.ReactNode
}

const ContainerComponent = ({ children }: ContainerProps) => {
  return <Container>{children}</Container>
}

export default ContainerComponent
