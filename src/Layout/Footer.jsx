import { facebookFooter, instagramFooter, localFooter } from '@/lib/constants'
import { mailFooter } from '@/lib/constants'
import { phoneFooter } from '@/lib/constants'
import { cookies } from '@/lib/constants'
import { Link } from 'react-router-dom';
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="relative w-full bg-artMidBlue-50 z-10 p-4">
      <div className="main-container-footer flex flex-col justify-center min-h-64 space-y-2 relative">
        <div className='flex flex-col justify-center items-center gap-2 md:flex-row sm:justify-start sm:gap-8 py-4'>
          <div className='flex items-center gap-2'>
            <img src={localFooter} alt="Localização" className='w-full max-w-4' /> <p className='cursor-pointer no-underline text-white text-sm font-barlow font-medium' href="">R. Alexandre Herculano, 2680-418 Unhos</p>
          </div>
          <div className='flex items-center gap-2'>
            <img src={phoneFooter} alt="Telefone" className='w-full max-w-4' /> <a className='cursor-pointer no-underline text-white text-sm font-barlow font-medium' href="tel:+351218242417">218 242 417</a>
          </div>
          <div className='flex items-center gap-2'>
            <img src={mailFooter} alt="Email" className='w-full max-w-4' /> <a className='cursor-pointer no-underline text-white text-sm font-barlow font-medium' href="mailto:geral@conservatoriodartesdeloures.net">geral@conservatoriodartesdeloures.net</a>
          </div>
          <Link to="/pol-cokkies">
            <img src={cookies} alt="Política de Cookies"
              className='absolute xl:bottom-24 xl:right-[-75px] lg:bottom-32 right-[-20px]  bottom-40 w-full max-w-16 cursor-pointer' />
          </Link>
        </div>

        <div className="flex justify-center items-center h-[1px] bg-white"></div>

        <div className='flex flex-col md:flex-row justify-between items-center space-y-2'>
          <div className='flex flex-col sm:flex-row items-center sm:gap-3'>
            <span className='text-white text-sm font-barlow font-medium  py-1 sm:py-4'>{currentYear} Conservatório Artallis</span>
            <Link className='cursor-pointer font-barlow font-medium  py-1 sm:py-4 text-white text-sm' to="/termos">• Termos e Condições</Link>
            <Link className='cursor-pointer font-barlow font-medium  py-1 sm:py-4 text-white text-sm' to="/privacidade">• Privacidade e Cookies</Link>
          </div>

          <div className='flex gap-4'>
            <Link to="https://www.instagram.com/conservatorio_artallis/">
              <img className='w-5' src={instagramFooter} alt="Instagram" />
            </Link>
            <Link to="https://www.facebook.com/ConservatorioArtallis">
              <img className='w-2.5' src={facebookFooter} alt="Facebook" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer