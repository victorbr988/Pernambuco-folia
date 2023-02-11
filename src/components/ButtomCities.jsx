import { useNavigate, } from "react-router-dom"

export function ButtomCities({ data }) {
  const navigate = useNavigate()
  
  return (
    <button
      type="button"
      className="cursor-pointer z-50"
      onClick={() => navigate(`/${(data.city).toLowerCase().replace('á', 'a')}`)}
    >
      <img className="w-[120px] h-[100px] hover:scale-105 transition-all shadow-lg rounded  lg:w-[176px] lg:h-[147px]" src={data.imageButton} alt="botão clicável para cada cidade" />
      <h2 className="text-center text-white font-sans font-semibold text-lg">{data.city}</h2>
    </button>
  )
}