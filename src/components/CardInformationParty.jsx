/* eslint-disable react/jsx-no-target-blank */
import { FiClock, FiMapPin } from "react-icons/fi";
import { transformToBrl } from "../utils/numberFormat";

export function CardInformationParty({ data }) {
  return (
    <div className="w-80 mx-3 lg:mx-0 bg-white shadow-lg rounded">
      <div className="h-4 bg-[#FFD600] rounded-t"></div>
      <section className="p-4 flex flex-col gap-3">
        <section className="flex justify-between">
          <p className="font-semibold font-sans text-[#8800F3]">{data.date}</p>
          <p className="bg-[#FFD600] font-semibold font-sans text-[#8800F3] px-4 rounded">{data.type}</p>
        </section>

        <section>
          <h3 className="text-xl font-semibold font-sans text-[#8800F3]">{data.title}</h3>
        </section>

        <section className="flex justify-between">
          <p className="font-semibold font-sans text-[#8800F3] flex gap-1 items-center">
            <FiMapPin />
            <a href="https://www.google.com.br/maps/place/R.+Jos%C3%A9+Anselmo+de+Lira,+309+-+Maur%C3%ADcio+de+Nassau,+Caruaru+-+PE,+55012-540/@-8.2749508,-35.9689529,17.28z/data=!4m5!3m4!1s0x7a98bc878493469:0x484b6053d125315f!8m2!3d-8.2761589!4d-35.9686662" target="_blank">Rua Fake</a>
          </p>
          <p className="font-semibold font-sans text-[#8800F3] rounded flex items-center gap-1">
            <FiClock />
            {data.time}
          </p>
        </section>

        <section className="flex justify-between">
          <a
            className="bg-[#FFD600] font-semibold font-sans text-[#8800F3] px-4 py-1 rounded"
            href={data.link}
          >
            Iniciar rota
          </a>
          <p className="font-semibold font-sans text-[#8800F3]">
            {transformToBrl(data.value)}
          </p>
        </section>
      </section>
    </div>
  )
}