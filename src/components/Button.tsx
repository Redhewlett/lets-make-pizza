import { RedButton } from './Button.styles'

interface Props {
  children: string
  onClick?: ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void) | undefined
}

const Button: React.FC<Props> = ({ children, onClick }) => {
  return <RedButton onClick={onClick}>{children}</RedButton>
}

export default Button
