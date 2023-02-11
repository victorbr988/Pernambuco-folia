import logo from '../assets/logo-pernambuco.png';
import { ButtomCities } from '../components/ButtomCities';
import { Header } from '../components/Header';
import { dataByCities } from '../data/listDataByCity';

export function Home() {
  return (
    <div className='w-full'>
      <Header className='realtive p-10'>
        <div className='flex justify-center'>
          <img src={logo} className="z-50 sm:w[435px], sm:h-[217px]" alt="Título do site" />
        </div>
      </Header>

      <main className='w-full p-3 flex flex-wrap gap-5 justify-center items-center h-full'>
        {
          dataByCities.map((info) => <ButtomCities key={info.id} data={info} />)
        }
      </main>
      
    </div>
    
  )
}