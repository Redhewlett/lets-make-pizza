import React from 'react'
import Nav from '../components/Nav'
import Gutter from '../components/Gutter'
import Card from '../components/Card'
import { Section } from './Home.styles'
const dough = require('../assets/images/photo/dough-skyler.jpg')
const sauce = require('../assets/images/photo/sauce-roman.jpg')
const toppings = require('../assets/images/photo/toppings-engin.jpg')
const recipe = require('../assets/images/photo/karolina-grabowska.jpg')

type StepObject = {
  text: string
  step: number
  imgUrl: string
  imgAlt: string
}

type StepArray = StepObject[]

export default function Home() {
  const steps: StepArray = [
    {
      text: 'Select your pizza dough',
      step: 1,
      imgUrl: dough,
      imgAlt: 'hands-working-a-pizza-dough-photo'
    },
    {
      text: 'Select your sauce',
      step: 2,
      imgUrl: sauce,
      imgAlt: 'tomato-sauce-on-pizza-photo'
    },
    {
      text: 'Choose your toppings',
      step: 3,
      imgUrl: toppings,
      imgAlt: 'tomato-mushrooms-chilli-photo'
    },
    {
      text: 'Get recipe informations',
      step: 4,
      imgUrl: recipe,
      imgAlt: 'recipe-note-pad-photo'
    }
  ]
  console.log(steps)

  return (
    <>
      <Nav />
      <Gutter />
      <Section>
        <h3>How it works</h3>
        <div className='description'>
          {steps.map((step) => (
            <Card key={step.step}>
              <img src={step.imgUrl} alt={step.imgAlt} />
              <p className='step'>{step.text}</p>
              <p className='stepCount'>{step.step}</p>
            </Card>
          ))}
        </div>
      </Section>
    </>
  )
}
