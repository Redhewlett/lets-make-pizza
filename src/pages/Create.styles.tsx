import styled from 'styled-components'

export const Section = styled.section`
  width: 100vw;
  height: 82vh;
  background-color: #f8f8f8;

  .filter {
    font-size: 1.2vw;
    width: 100%;
    padding: 1em 1em 1em 3em;
    display: flex;
    align-items: center;
    gap: 1em;
  }
  .filter > img {
    width: 2vw;
  }
  .steps {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2vw;
  }

  h3 {
    width: 100%;
    padding: 1em;
    text-align: center;
    font-size: 1.5vw;
    color: #666666;
  }
  .buttonWrapper {
    width: 100%;
    margin-top: 4em;
    display: flex;
    justify-content: center;
  }
`
