import styled from 'styled-components'

export const NavBar = styled.div`
  width: 100vw;
  height: 8vh;
  background-color: #e64d4d;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2em 0 3em;
  h1 {
    letter-spacing: 0.1em;
    font-size: 2.5vw;
  }
  .titleLink {
    color: white;
    text-decoration: none;
  }
  ul {
    width: 25%;
    display: flex;
    list-style: none;
    justify-content: space-between;
  }
  li a {
    color: white;
    font-size: 1.5vw;
    text-decoration: none;
  }

  li a:hover {
    color: #57b583;
  }

  .icon {
    margin-right: 0.2em;
  }

  .active {
    color: white;
    text-decoration: underline;
  }
  .active > .icon {
    color: #57b583;
  }
`
