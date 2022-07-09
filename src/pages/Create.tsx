import React from 'react'
//style
import { Section } from './Create.styles'
//components
import Nav from '../components/Nav'
import Gutter from '../components/Gutter'
//images
const banPig = require('../assets/images/filters/ban-pig.png')
const vegan = require('../assets/images/filters/vegan.png')

export default function Create(): React.ReactElement {
  return (
    <>
      <header>
        <Nav />
        <Gutter>
          <h2>
            Create you own <strong>pizza</strong>
          </h2>
          <p>get calory recap' and recipe at the end</p>
        </Gutter>
      </header>
      <Section>
        <div className='filter'>
          <p>Filters</p>
          <img src={banPig} alt='banPig-icon' />
          <img src={vegan} alt='vegan-icon' />
        </div>
      </Section>
    </>
  )
}
