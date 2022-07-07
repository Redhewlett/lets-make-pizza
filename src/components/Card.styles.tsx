import styled from 'styled-components'

export const WhiteCard = styled.div`
  width: 20vw;
  height: max-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.15);
  border-radius: 20px;
  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
  }
  .step {
    font-size: 1.2vw;
  }
  .stepCount {
    width: 3em;
    height: 3em;
    display: flex;
    position: relative;
    top: 1vw;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: #57b583;
  }
`
