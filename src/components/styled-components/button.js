import styled from "@emotion/styled"
import { css } from "@emotion/react"

const secondary = css`
  background: #7f5af011;
  color: #7f5af0;
  padding: 15px 25px;
  border: 1px solid #7f5af0;
  border-radius: 10px;
  margin: 8px;
  &:hover {
    background: #7f5af051;
    border: 1px solid #7f5af000;
  }
`

const Button = styled.button`
  margin: 8px;
  background: #7edbc4;
  color: #101117;
  padding: 15px 25px;
  border: none;
  border-radius: 10px;
  transition: 0.23s ease-in;
  cursor: pointer;

  &:hover {
    background: #7edbc4cc;
  }

  ${props => props.secondary && secondary}
`

export default Button
