import { CardInformationParty } from "../components/CardInformationParty";

export function Bezerros({ informations = [] }) {

  return (
    <div>
      <div>
        <h2 className="text-center text-3xl text-white">Bezerros</h2>
      </div>
     

      <main className="flex flex-wrap justify-center">
        {
          informations.map( (informationObject, index) => <CardInformationParty key={index} data={informationObject} />)
        }
      </main>
    </div>
  )
}