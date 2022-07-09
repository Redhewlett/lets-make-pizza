import styled from 'styled-components'

export const RedButton = styled.button`
  width: max-content;
  height: 5vw;
  padding: 0.5em 1.5em 0.5em 1.5em;
  border: none;
  border-radius: 50px;
  font-size: 1.7vw;
  color: white;
  background-color: #e64d4d;
  transition: all ease-in-out 250ms;
  :hover {
    background-color: #eb7070;
    transform: translateY(-0.2em);
    cursor: pointer;
  }
  :active {
    background-color: #e64d4d;
    transform: translateY(0.1em);
  }
`
