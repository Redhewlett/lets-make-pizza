import { WhiteCard } from './Card.styles'

interface Props {
  children: JSX.Element[] | JSX.Element
}

const Card: React.FC<Props> = ({ children }) => {
  return <WhiteCard>{children}</WhiteCard>
}

export default Card
