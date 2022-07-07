import styled from 'styled-components'

export const NavBar = styled.div`
  width: 100vw;
  height: 8vh;
  background-color: #e64d4d;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2em 0 3em;
  h1 {
    letter-spacing: 0.1em;
    font-size: 2.5vw;
  }
  ul {
    width: 25%;
    display: flex;
    list-style: none;
    justify-content: space-between;
  }
  li {
    font-size: 1.5vw;
  }
  .icon {
    margin-right: 0.2em;
  }
`
