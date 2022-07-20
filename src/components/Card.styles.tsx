import styled from 'styled-components'

export const WhiteCard = styled.div.attrs((props) => ({ className: props.className }))`
  width: 19vw;
  height: max-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.15);
  border-radius: 20px;
  background-color: white;
  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
  }
  .step {
    margin-top: 2em;
    font-size: 1.2vw;
    text-align: center;
  }
  .topping-list {
    font-size: 1vw;
    padding: 0;
    width: 100%;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 0.5em;
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
    height: 42vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 0em 1.5em;
  }
  .stepElements img {
    width: 6vw;
    height: 6vw;
  }
  .stepElements div:hover {
    transform: translateY(-0.4em);
    transition: all ease-in-out 250ms;
  }
  .toppings div > img {
    width: 3vw;
    height: 3vw;
  }
  .toppings {
    padding: 1em;
  }
  .selected {
    width: 3vw;
    height: 3vw;
    border-radius: 50px;
    background-color: #d9d9d9;
  }
`
