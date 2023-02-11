import logo from '../assets/logo-pernambuco.png';
import mascara from '../assets/mascara.png';
import { ButtomCities } from '../components/ButtomCities';
import { Header } from '../components/Header';
// import { dataByCities } from '../data/listDataByCity';

export function Home() {
  const dataByCities = [
    {
      id: 1,
      imageButton: 'https://www.mbi.com.br/mbi/files/media/image/simbolopedia/municipio-caruaru-bandeira-simb-brnepe0300804106.jpg',
      city: 'Caruaru'
    },
    {
      id: 2,
      imageButton: 'https://static.novaflor.com.br/images/localidades/Bandeira-da-Cidade-de-Pesqueira-PE.jpg',
      city: 'Pesqueira'
    },
    {
      id: 3,
      imageButton: 'https://www.amupe.org/wp-content/uploads/2017/06/Bandeira-bezerros-pernambuco.jpg',
      city: 'Bezerros'
    },
    {
      id: 4,
      imageButton: 'https://www.pciconcursos.com.br/s/35d117cedfd42bda777d7f7ffb05d7fd.jpg',
      city: 'Gravatá'
    }
  ]
  return (
    <div className='w-full'>
      <Header>
        <div className='flex justify-center'>
          <img src={logo} className="z-50 sm:w[435px], sm:h-[217px]" alt="Título do site" />
        </div>
      </Header>

      <main className='w-full px-3 flex flex-wrap gap-5 justify-center items-center'>
        {
          dataByCities.map((info) => <ButtomCities key={info.id} data={info} />)
        }
      </main>

      <footer className=''>
        <img className='sm:w-[270px] absolute bottom-0 right-0 sm:h-[270px] w-[220px] h-[220px] opacity-60' src={mascara} alt="" />
      </footer>
    </div>
  )
}