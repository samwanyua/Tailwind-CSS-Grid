import {data} from "../data"
const Catalogue = () => {
  return (
    <div className="grid grid-cols-3 auto-rows-[300px] gap-4 my-10">
        {data.map((item, index) => (
            <div key={index} className="bg-neutral-100 p-2 border-2 border-black flex flex-col justify-center items-center">
                <h2 className="font-light text-[12px] uppercase">{item.title}</h2>
                <p className="font-black text-2xl">{item.value}</p>
            </div>
        ))}
    </div>
  )
}

export default Catalogue