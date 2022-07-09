import { GutterBar } from './Gutter.styles'

interface Props {
  children: JSX.Element[] | JSX.Element
}

const Gutter: React.FC<Props> = ({ children }) => {
  return <GutterBar>{children}</GutterBar>
}

export default Gutter
