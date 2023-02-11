import mascaraCarnaval from '../assets/mascara-carnaval.png';
import circleBottom from '../assets/circle-bottom.png';

export function Footer() {
  return (
    <footer>
      <img className='absolute bottom-0 left-0' src={mascaraCarnaval} alt="máscara de carnaval" />
      <img className='absolute bottom-0 right-0' src={circleBottom} alt="círculo verde no canto inferior direito" />
    </footer>
  )
}