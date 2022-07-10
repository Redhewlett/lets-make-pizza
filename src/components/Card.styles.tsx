import styled from 'styled-components'

export const WhiteCard = styled.div.attrs((props) => ({ className: props.className }))`
  width: 17vw;
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
    margin-top: 0.5em;
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
    color: white;
  }

  .stepElements {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2em;
  }
  .stepElements > img {
    width: 6vw;
    height: 6vw;
  }
`
