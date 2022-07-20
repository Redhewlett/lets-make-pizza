import React, { useState, useEffect } from 'react'
import { Tooltip } from '@mantine/core'
//style
import { Section } from './Create.styles'
//components
import Nav from '../components/Nav'
import Gutter from '../components/Gutter'
import Card from '../components/Card'
import Button from '../components/Button'
import { ModalBox } from '../components/ModalBox'
//ingrdients-data arrays
import { Dough } from '../assets/pizza-elements/dough'
import { Sauces } from '../assets/pizza-elements/sauces'
import { Toppings } from '../assets/pizza-elements/toppings'
//images
const banPig = require('../assets/images/filters/ban-pig.png')
const vegan = require('../assets/images/filters/vegan.png')

let toppingList: string[] = []
let nbrOfToppings = 0

export default function Create(): React.ReactElement {
  const [stepDough, setStepDough] = useState<string>('Select your pizza dough style')
  const [stepSauce, setStepSauce] = useState<string>('Select your sauce')
  const [stepToppings, setStepToppings] = useState<string[]>(['Choose your toppings'])
  const [openModal, setOpenModal] = useState<boolean>(false)

  const topppingsLimit: number = 5

  function chooseToppings(clickedItem: string) {
    let selectedTopping: string = clickedItem!

    if (nbrOfToppings === 0) {
      toppingList.push(selectedTopping)
      nbrOfToppings++
    } else if (nbrOfToppings > 0 && nbrOfToppings < topppingsLimit) {
      toppingList.push(selectedTopping)
      nbrOfToppings++
    }

    if (nbrOfToppings === 5) {
      setStepToppings(toppingList)
    }
  }

  function handleSelection(e: React.MouseEvent<HTMLImageElement>) {
    //get the name of the clicked element --> e.currentTarget.getAttribute('data-category')
    //non-null assertion with "!"
    let clickedCategory: string = e.currentTarget.getAttribute('data-category')!
    let clickedItem: string = e.currentTarget.getAttribute('data-name')!

    if (clickedCategory === 'dough') {
      setStepDough(clickedItem + ' style')
    }

    if (clickedCategory === 'sauce') {
      setStepSauce(clickedItem)
    }
    if (clickedCategory === 'toppings') {
      chooseToppings(clickedItem)
    }
  }
  //check if a pizza was made
  useEffect(() => {
    let prevPizza: string = localStorage.getItem('newPizza') ? JSON.parse(localStorage.getItem('newPizza')!) : 'no pizza yet'
    if (prevPizza !== 'no pizza yet') {
      console.log(prevPizza)
    }
  }, [])
  //close modal
  function closeModal() {
    setOpenModal(false)
  }

  //the final pizza saved in local storage then redirect to the pizza page
  function handleConfirm(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    if (stepDough === 'Select your pizza dough style' || stepSauce === 'Select your sauce' || nbrOfToppings === 0) {
      setOpenModal(true)
      console.log(stepToppings)
    } else {
      let pizza: string = JSON.stringify({ dough: stepDough, sauce: stepSauce, toppings: stepToppings })
      console.log(pizza)
      // localStorage.setItem('newPizza', pizza)
    }
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
        <ModalBox active={openModal} close={closeModal}>
          <p>Please, complete each step with at least one element, your pizza will taste way better 🤭</p>
        </ModalBox>
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
            <ul className='step topping-list'>
              {stepToppings.map((topping, index) => (
                <li key={index}>{topping}</li>
              ))}
            </ul>
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
