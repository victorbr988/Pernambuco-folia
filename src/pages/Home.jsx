import logo from '../assets/logo-pernambuco.png';
import { ButtomCities } from '../components/ButtomCities';
import { Header } from '../components/Header';
import { dataByCities } from '../data/listDataByCity';

export function Home() {
  
  return (
    <div className='h-full'>
      <Header>
        <div className='flex justify-center'>
          <img src={logo} className="sm:w[435px], sm:h-[217px]" alt="Título do site" />
        </div>
      </Header>
      <main className='pt-16 h-full'>
        <div className='flex flex-wrap h-full justify-center gap-5'>
          {
            dataByCities.map((info) => <ButtomCities key={info.id} data={info} />)
          }
        </div>
      </main>
    </div>
  )
}