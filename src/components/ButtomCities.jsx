import { useNavigate, } from "react-router-dom"

export function ButtomCities({ data }) {
  const navigate = useNavigate()
  
  return (
    <div>
      <button
        type="button"
        className="cursor-pointer"
        onClick={() => navigate(`/${(data.city).toLowerCase().replace('á', 'a')}`)}
      >
        <img className="w-[110px] hover:scale-105 transition-all shadow-lg rounded h-[90px] lg:w-[176px] lg:h-[147px]" src={data.imageButton} alt="botão clicável para cada cidade" />
        <h2 className="text-center text-white font-sans font-semibold text-lg">{data.city}</h2>
      </button>
    </div>
    
  )
}