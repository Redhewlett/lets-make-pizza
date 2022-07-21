import React, { useState, useEffect, useContext } from 'react'
import { Tooltip } from '@mantine/core'
import { PizzaContext } from '../context/pizzaContext'
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

let nbrOfToppings = 0

export default function Create(): React.ReactElement {
  const [pizza, setPizza] = useContext(PizzaContext)
  const [openModal, setOpenModal] = useState<boolean>(false)

  const topppingsLimit: number = 5

  function chooseToppings(clickedItem: string) {
    const oldPizza = pizza
    if (nbrOfToppings === 0) {
      let newPizza = {
        dough: oldPizza.dough,
        sauce: oldPizza.sauce,
        toppings: [clickedItem]
      }
      setPizza(newPizza)
      nbrOfToppings++
    } else if (nbrOfToppings > 0 && nbrOfToppings < topppingsLimit) {
      let newPizza = {
        dough: oldPizza.dough,
        sauce: oldPizza.sauce,
        toppings: [...oldPizza.toppings, clickedItem]
      }
      setPizza(newPizza)
      nbrOfToppings++
    }
  }

  function handleSelection(e: React.MouseEvent<HTMLImageElement>) {
    //get the name of the clicked element --> e.currentTarget.getAttribute('data-category')
    //non-null assertion with "!"
    let clickedCategory: string = e.currentTarget.getAttribute('data-category')!
    let clickedItem: string = e.currentTarget.getAttribute('data-name')!

    const oldPizza = pizza

    if (clickedCategory === 'dough') {
      let newPizza = {
        dough: clickedItem,
        sauce: oldPizza.sauce,
        toppings: oldPizza.toppings
      }
      setPizza(newPizza)
    }

    if (clickedCategory === 'sauce') {
      let newPizza = {
        dough: oldPizza.dough,
        sauce: clickedItem,
        toppings: oldPizza.toppings
      }
      setPizza(newPizza)
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
    // if (stepDough === 'Select your pizza dough style' || stepSauce === 'Select your sauce' || nbrOfToppings === 0) {
    //   setOpenModal(true)
    //   console.log(stepToppings)
    // } else {
    //   let pizza: string = JSON.stringify({ dough: stepDough, sauce: stepSauce, toppings: stepToppings })
    //   console.log(pizza)
    //   // localStorage.setItem('newPizza', pizza)
    // }
    console.log(pizza)
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
            <p className='step'>{pizza.dough}</p>
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
            <p className='step'>{pizza.sauce}</p>
            <p className='stepCount'>2</p>
          </Card>
          <Card>
            <div className='stepElements toppings'>
              {Toppings.map((topping, index) => (
                <Tooltip key={index} label={topping.name} color='red' radius='md' position='right'>
                  <img
                    key={index}
                    data-category='toppings'
                    data-vegan={topping.vegan}
                    data-pig={topping.pig}
                    data-name={topping.name}
                    src={topping.imgUrl}
                    alt={topping.name}
                    onClick={handleSelection}
                  />
                </Tooltip>
              ))}
            </div>

            <ul className='step topping-list'>
              {pizza.toppings.map((topping: string, index: number) => (
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
