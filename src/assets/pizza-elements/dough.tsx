//img imports
const italian = require('../images/dough/italian-style.png')
const newYork = require('../images/dough/new-york-style.png')
//types
type doughObject = {
  id: string
  name: string
  imgUrl: string
  recipe?: string
  quantity?: string
}
type doughArray = doughObject[]

export const Dough: doughArray = [
  {
    id: 'itd',
    name: 'Italian dough',
    imgUrl: italian
  },
  {
    id: 'nyd',
    name: 'New-York style dough',
    imgUrl: newYork
  }
]
