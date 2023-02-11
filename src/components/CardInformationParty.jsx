/* eslint-disable react/jsx-no-target-blank */
import { FiClock, FiMapPin } from "react-icons/fi";
import { transformToBrl } from "../utils/numberFormat";
import clsx from "clsx";

export function CardInformationParty({ data }) {
  return (
    <div className="w-80 mx-3 z-50 lg:mx-0 bg-white shadow-lg rounded">
      <div className="h-4 bg-[#FFD600] rounded-t"></div>
      <section className="p-4 flex flex-col gap-4">
        <section className="flex justify-between">
          <p className="font-semibold font-sans text-[#8800F3]">{data.date}</p>
          <p className={clsx("font-semibold font-sans text-[#8800F3] px-4 rounded", {
            'bg-[#FFD600]': data.type === 'Pago',
            'bg-green-500': data.type === 'Gratuito',
          })}>{data.type}</p>
        </section>

        <section>
          <h3 className="text-xl font-semibold font-sans text-[#8800F3]">{data.title}</h3>
        </section>

        <section className="flex flex-col gap-4">
          <p className="font-semibold font-sans text-[#8800F3] flex gap-1 items-center">
            <p className="font-semibold font-sans text-[#8800F3]"><FiMapPin /></p>
            {data.local}
          </p>
          <p className="font-semibold font-sans text-[#8800F3] rounded flex items-center gap-1">
            <FiClock />
            {data.time}
          </p>
        </section>

        <section className="flex justify-between items-center">
          <a
            className="bg-[#FFD600] font-semibold font-sans text-[#8800F3] px-4 py-1 rounded"
            href={data.route}
            target='_blank'
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