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
//step types

export default function Create(): React.ReactElement {
  const [stepDough, setStepDough] = useState<string>('Select your pizza dough style')
  const [stepSauce, setStepSauce] = useState<string>('Select your sauce')
  const [stepToppings, setStepToppings] = useState<string[]>(['Choose your toppings'])

  function handleSelection(e: React.MouseEvent<HTMLImageElement>) {
    //get the name of the clicked element
    console.log(e.currentTarget.getAttribute('data-name'))
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
                  <img src={dough.imgUrl} data-name={dough.name} alt={dough.name} onClick={handleSelection} />
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
                  <img key={index} src={sauce.imgUrl} alt={sauce.name} />
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
                  <img key={index} src={topping.imgUrl} alt={topping.name} />
                </Tooltip>
              ))}
            </div>
            <p className='step'>{stepToppings}</p>
            <p className='stepCount'>3</p>
          </Card>
        </div>
        <div className='buttonWrapper'>
          <Button>Confirm!</Button>
        </div>
      </Section>
    </>
  )
}
