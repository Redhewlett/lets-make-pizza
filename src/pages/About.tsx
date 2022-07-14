import React from 'react'
//style
import { Section } from './About.styles'
//components
import Nav from '../components/Nav'
import Gutter from '../components/Gutter'
import Card from '../components/Card'

export default function About(): React.ReactElement {
  return (
    <>
      <header>
        <Nav />
        <Gutter>
          <h2>About</h2>
        </Gutter>
      </header>
      <Section>
        <h3>Why?</h3>
      </Section>
    </>
  )
}
