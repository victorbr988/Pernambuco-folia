import { Fragment } from "react";
import { FiArrowLeft } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { informationPartyGaranhuns } from "../data/listPartyByCity";
import { Header } from "../components/Header";
import { CardInformationParty } from "../components/CardInformationParty";

export function Garanhuns() {
  const navigate = useNavigate()

  return (
    <Fragment>
      <Header>
        <button 
          type="button"
          onClick={() => navigate(-1)}
          className="bg-[#FFD600] rounded-full p-2">
          <FiArrowLeft className="text-xl text-[#8800F3] " />
        </button>
        <h2 className="text-center text-3xl font-sans font-semibold text-white">Garanhuns</h2>
      </Header>

      <main className="flex flex-wrap justify-center mt-10 overflow-y-auto gap-5">
        {
          informationPartyGaranhuns.map((informationObject, index) => <CardInformationParty key={index} data={informationObject} />)
        }
      </main>
    </Fragment>
  )
}