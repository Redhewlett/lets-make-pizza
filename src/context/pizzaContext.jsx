import React, { useState, createContext } from 'react'

export const PizzaContext = createContext()

export const PizzaProvider = (props) => {
  const [pizza, setPizza] = useState({
    dough: 'Select your dough style',
    sauce: 'Select your sauce',
    toppings: ['Choose your toppings']
  })

  return <PizzaContext.Provider value={[pizza, setPizza]}>{props.children}</PizzaContext.Provider>
}
