import { Header } from "../components/Header";
import { FiArrowLeft } from 'react-icons/fi'
import { useNavigate } from "react-router-dom";
import { CardInformationParty } from "../components/CardInformationParty";

export function Gravata({ informations = [] }) {
  const navigate = useNavigate()

  return (
    <div>
      <Header>
        <button 
          type="button"
          onClick={() => navigate(-1)}
          className="bg-[#8800F3] rounded-full p-2">
          <FiArrowLeft className="text-xl text-white" />
        </button>
        <h2 className="text-center text-3xl text-[#8800F3]">Gravatá</h2>
      </Header>

      <main className="flex flex-wrap justify-center">
        {
          informations.map( (informationObject, index) => <CardInformationParty key={index} data={informationObject} />)
        }
      </main>
    </div>
  )
}