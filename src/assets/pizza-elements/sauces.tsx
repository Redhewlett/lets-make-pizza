//img imports
const tomatoS = require('../images/sauces-base/tomato-sauce.png')
const bbq = require('../images/sauces-base/bbq-sauce.png')
const sourCream = require('../images/sauces-base/sour-cream.png')
//types
type sauceObject = {
  id: string
  name: string
  imgUrl: string
  recipe?: string
  quantity?: string
  vegan: boolean
}
type sauceArray = sauceObject[]

export const Sauces: sauceArray = [
  {
    id: 'tms',
    name: 'Tomato sauce',
    imgUrl: tomatoS,
    vegan: true
  },
  {
    id: 'bbq',
    name: 'Barbecue sauce',
    imgUrl: bbq,
    vegan: true
  },
  {
    id: 'sc',
    name: 'Sour Cream',
    imgUrl: sourCream,
    vegan: false
  }
]
