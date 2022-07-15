import React, { useState } from 'react'
import { Tooltip } from '@mantine/core'
//style
import { Section } from './Create.styles'
//components
import Nav from '../components/Nav'
import Gutter from '../components/Gutter'
import Card from '../components/Card'
import Button from '../components/Button'
//ingrdients-data arrays
import { Dough } from '../assets/pizza-elements/dough'
import { Sauces } from '../assets/pizza-elements/sauces'
import { Toppings } from '../assets/pizza-elements/toppings'
//images
const banPig = require('../assets/images/filters/ban-pig.png')
const vegan = require('../assets/images/filters/vegan.png')

export default function Create(): React.ReactElement {
  const [stepDough, setStepDough] = useState<string | null>('Select your pizza dough style')
  const [stepSauce, setStepSauce] = useState<string | null>('Select your sauce')
  const [stepToppings, setStepToppings] = useState<string[]>(['Choose your toppings'])

  const topppingsLimit: number = 5

  function toppingsArray(clickedItem: string | null) {
    if (stepToppings.length === 0) {
      setStepToppings(clickedItem)
      console.log(stepToppings.length, stepToppings)
    } else if (stepToppings.length > 0 && stepToppings.length !== topppingsLimit) {
      setStepToppings(clickedItem)
      console.log(stepToppings.length, stepToppings)
    } else if (stepToppings.length === topppingsLimit) {
      setStepToppings(stepToppings)
    }
  }

  function handleSelection(e: React.MouseEvent<HTMLImageElement>) {
    //get the name of the clicked element --> e.currentTarget.getAttribute('data-category')
    let clickedCategory: string | null = e.currentTarget.getAttribute('data-category')
    let clickedItem: string | null = e.currentTarget.getAttribute('data-name')

    if (clickedCategory === 'dough') {
      setStepDough(clickedItem + ' style')
    }

    if (clickedCategory === 'sauce') {
      setStepSauce(clickedItem)
    }

    if (clickedCategory === 'toppings') {
      toppingsArray(clickedItem)
    }
  }
  //the final pizza
  function handleConfirm(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    console.log([stepDough, stepSauce, stepToppings])
  }
  return (
    <>
      <header>
        <Nav />
        <Gutter>
          <h2>
            Create your own <strong>pizza</strong>
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

        <div className='steps'>
          <Card>
            <div className='stepElements'>
              {Dough.map((dough, index) => (
                <Tooltip key={index} label={dough.name} color='red' radius='md' position='right'>
                  <img src={dough.imgUrl} data-category='dough' data-name={dough.name} alt={dough.name} onClick={handleSelection} />
                </Tooltip>
              ))}
            </div>
            <p className='step'>{stepDough}</p>
            <p className='stepCount'>1</p>
          </Card>
          <Card>
            <div className='stepElements'>
              {Sauces.map((sauce, index) => (
                <Tooltip key={index} label={sauce.name} color='red' radius='md' position='right'>
                  <img key={index} data-category='sauce' data-name={sauce.name} src={sauce.imgUrl} alt={sauce.name} onClick={handleSelection} />
                </Tooltip>
              ))}
            </div>
            <p className='step'>{stepSauce}</p>
            <p className='stepCount'>2</p>
          </Card>
          <Card>
            <div className='stepElements toppings'>
              {Toppings.map((topping, index) => (
                <Tooltip key={index} label={topping.name} color='red' radius='md' position='right'>
                  <img key={index} data-category='toppings' data-name={topping.name} src={topping.imgUrl} alt={topping.name} onClick={handleSelection} />
                </Tooltip>
              ))}
            </div>
            <p className='step'>{stepToppings.map((topping) => topping + ' ')}</p>
            <p className='stepCount'>3</p>
          </Card>
        </div>
        <div className='buttonWrapper'>
          <Button onClick={handleConfirm}>Confirm!</Button>
        </div>
      </Section>
    </>
  )
}
