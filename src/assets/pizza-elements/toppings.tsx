//img imports
const cheese = require('../images/cheese/cheese.png')
const veganCheese = require('../images/cheese/vegan-cheese.png')
const goatCheese = require('../images/cheese/goat-cheese.png')
const Mozzarella = require('../images/cheese/mozzarella.png')
const Bacon = require('../images/toppings/bacon.png')
const Ham = require('../images/toppings/ham.png')
const Turkey = require('../images/toppings/turkey.png')
const Beef = require('../images/toppings/ground-beef.png')
const Chicken = require('../images/toppings/chicken.png')
const Pepperoni = require('../images/toppings/pepperoni.png')
const Sausage = require('../images/toppings/sausage.png')
const Egg = require('../images/toppings/egg.png')
const Tofu = require('../images/toppings/tofu.png')
const SalmonFish = require('../images/toppings/salmon.png')
const Shrimp = require('../images/toppings/shrimp.png')
const Tuna = require('../images/toppings/tuna-fish.png')
const BellPepper = require('../images/toppings/bell-pepper-group.png')
const Tomatos = require('../images/toppings/tomatos.png')
const Onions = require('../images/toppings/onion.png')
const RedOnions = require('../images/toppings/red-onion.png')
const Honey = require('../images/toppings/honey.png')
const Mushrooms = require('../images/toppings/mushrooms.png')
const Basil = require('../images/toppings/basil.png')
const Garlic = require('../images/toppings/garlic.png')
const bOlive = require('../images/toppings/olive.png')
const PineApple = require('../images/toppings/Pineapple.png')
const ChilliPepper = require('../images/toppings/Chilli-pepper.png')
//types
type toppingsObject = {
  id: string
  name: string
  imgUrl: string
  recipe?: string
  quantity?: string
  vegan: boolean
  pig?: boolean
}
type toppingsArray = toppingsObject[]

export const Toppings: toppingsArray = [
  {
    id: 'chs',
    name: 'Cheese',
    imgUrl: cheese,
    vegan: false
  },
  {
    id: 'gcs',
    name: 'Goat cheese',
    imgUrl: goatCheese,
    vegan: false
  },
  {
    id: 'mzl',
    name: 'Mozzarella',
    imgUrl: Mozzarella,
    vegan: false
  },
  {
    id: 'vc',
    name: 'Vegan cheese',
    imgUrl: veganCheese,
    vegan: true
  },
  {
    id: 'bcn',
    name: 'Bacon',
    imgUrl: Bacon,
    vegan: false,
    pig: true
  },
  {
    id: 'hm',
    name: 'Ham',
    imgUrl: Ham,
    vegan: false,
    pig: true
  },
  {
    id: 'trk',
    name: 'turkey',
    imgUrl: Turkey,
    vegan: false,
    pig: false
  },
  {
    id: 'bf',
    name: 'Ground beef',
    imgUrl: Beef,
    vegan: false,
    pig: false
  },
  {
    id: 'ckn',
    name: 'Chicken',
    imgUrl: Chicken,
    vegan: false,
    pig: false
  },
  {
    id: 'pp',
    name: 'Pepperoni',
    imgUrl: Pepperoni,
    vegan: false,
    pig: true
  },
  {
    id: 'ssg',
    name: 'Sausage',
    imgUrl: Sausage,
    vegan: false,
    pig: true
  },
  {
    id: 'egg',
    name: 'Egg',
    imgUrl: Egg,
    vegan: false,
    pig: false
  },
  {
    id: 'tfu',
    name: 'Tofu',
    imgUrl: Tofu,
    vegan: true,
    pig: false
  },
  {
    id: 'slm',
    name: 'Salmon',
    imgUrl: SalmonFish,
    vegan: false,
    pig: false
  },
  {
    id: 'smp',
    name: 'Shrimp',
    imgUrl: Shrimp,
    vegan: false,
    pig: false
  },
  {
    id: 'tna',
    name: 'Tuna',
    imgUrl: Tuna,
    vegan: false,
    pig: false
  },
  {
    id: 'bpp',
    name: 'Bell Pepper',
    imgUrl: BellPepper,
    vegan: true,
    pig: false
  },
  {
    id: 'tmt',
    name: 'Tomato',
    imgUrl: Tomatos,
    vegan: true,
    pig: false
  },
  {
    id: 'oni',
    name: 'Onions',
    imgUrl: Onions,
    vegan: true,
    pig: false
  },
  {
    id: 'roni',
    name: 'Red onions',
    imgUrl: RedOnions,
    vegan: true,
    pig: false
  },
  {
    id: 'hny',
    name: 'Honey',
    imgUrl: Honey,
    vegan: true,
    pig: false
  },
  {
    id: 'mshr',
    name: 'Mushrooms',
    imgUrl: Mushrooms,
    vegan: true,
    pig: false
  },
  {
    id: 'bsl',
    name: 'Basil',
    imgUrl: Basil,
    vegan: true,
    pig: false
  },
  {
    id: 'grc',
    name: 'Garlic',
    imgUrl: Garlic,
    vegan: true,
    pig: false
  },
  {
    id: 'olv',
    name: 'Olive',
    imgUrl: bOlive,
    vegan: true,
    pig: false
  },
  {
    id: 'pnapl',
    name: 'PineApple',
    imgUrl: PineApple,
    vegan: true,
    pig: false
  },
  {
    id: 'chpp',
    name: 'Chilli Pepper',
    imgUrl: ChilliPepper,
    vegan: true,
    pig: false
  }
]
