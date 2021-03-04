import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline'
import LinkWrapper from 'components/LinkWrapper'

import * as S from './styles'

const AboutTemplate = () => (
  <S.Content>
    <LinkWrapper href="/">
      <CloseOutline size={32} />
    </LinkWrapper>

    <S.Heading>My Trips</S.Heading>

    <S.Body>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure a quae
        accusamus error repellendus labore nisi amet officiis quisquam, quam
        fuga voluptatum recusandae vitae rerum, eum odio illo quo deleniti.
      </p>
    </S.Body>
  </S.Content>
)

export default AboutTemplate
