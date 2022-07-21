import React from 'react'
import { useNavigate } from 'react-router-dom'
//style
import { Section } from './Home.styles'
//components
import Nav from '../components/Nav'
import Gutter from '../components/Gutter'
import Card from '../components/Card'
import Button from '../components/Button'
//images
const dough = require('../assets/images/photo/dough-skyler.jpg')
const sauce = require('../assets/images/photo/sauce-roman.jpg')
const toppings = require('../assets/images/photo/toppings-engin.jpg')
const recipe = require('../assets/images/photo/karolina-grabowska.jpg')

type StepObject = {
  text: string
  stepNbr: number
  imgUrl: string
  imgAlt: string
}

type StepArray = StepObject[]

const steps: StepArray = [
  {
    text: 'Select your pizza dough',
    stepNbr: 1,
    imgUrl: dough,
    imgAlt: 'hands-working-a-pizza-dough-photo'
  },
  {
    text: 'Select your sauce',
    stepNbr: 2,
    imgUrl: sauce,
    imgAlt: 'tomato-sauce-on-pizza-photo'
  },
  {
    text: 'Choose your toppings',
    stepNbr: 3,
    imgUrl: toppings,
    imgAlt: 'tomato-mushrooms-chilli-photo'
  },
  {
    text: 'Get recipe informations',
    stepNbr: 4,
    imgUrl: recipe,
    imgAlt: 'recipe-note-pad-photo'
  }
]

export default function Home(): React.ReactElement {
  let navigate = useNavigate()
  const getStarted = () => {
    navigate('./create', { replace: true })
  }

  return (
    <>
      <header>
        <Nav />
        <Gutter>
          <h2>
            Welcome to your <strong>Pizza</strong> companion app
          </h2>
          <p>The app that lets you create your pizza from scratch and gives you informations about it</p>
        </Gutter>
      </header>
      <Section>
        <h3>How it works</h3>
        <div className='description'>
          {steps.map((step, index) => (
            <Card key={index}>
              <img src={step.imgUrl} alt={step.imgAlt} />
              <p className='step home-step'>{step.text}</p>
              <p className='stepCount'>{step.stepNbr}</p>
            </Card>
          ))}
        </div>
        <div className='buttonWrapper'>
          <Button onClick={getStarted}>Get started!</Button>
        </div>
      </Section>
    </>
  )
}
