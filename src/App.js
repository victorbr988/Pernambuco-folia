import mascaraCarnaval from './assets/mascara.png';
import { Pagination } from "./Routes/Pagination";

function App() {
  return (
    <div className="w-full pb-3 h-full">
      <Pagination />
      <img className='sm:w-[270px] absolute bottom-0 right-0 sm:h-[270px] w-[220px] h-[220px] opacity-60' src={mascaraCarnaval} alt="máscara de carnaval" />
    </div>
  );
}

export default App;
