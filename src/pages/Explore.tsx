import React from 'react'
//style
import { Section } from './Explore.styles'
//components
import Nav from '../components/Nav'
import Gutter from '../components/Gutter'
import Card from '../components/Card'

export default function Explore(): React.ReactElement {
  return (
    <>
      <header>
        <Nav />
        <Gutter>
          <h2>What's new</h2>
        </Gutter>
      </header>
      <Section>
        <h3>Pizza of the week</h3>
      </Section>
    </>
  )
}
