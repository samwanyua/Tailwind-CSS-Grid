import {data} from "../data"
const Catalogue = () => {
    const boxStyle = `bg-neutral-100 p-2 border-2 border-gray-300 flex flex-col justify-center items-center`
  return (
    <div className="grid md:grid-cols-4 auto-rows-[300px] gap-4 my-10">
        {data.map((item, index) => (
            <div key={index} className={`${boxStyle} 
                ${index === 0 || index === 3 ? 'bg-black md:col-span-2 text-white' : ''}
                ${ index === 5 || index === 6 ? 'bg-black md:col-span-3 text-white' : ''}
                ${index === 2 ? 'md:row-span-4 bg-black text-white' : ''}
            `}>
                <h2 className="font-light text-[12px] uppercase">{item.title}</h2>
                <p className="font-black text-2xl">{item.value}</p>
            </div>
        ))}
    </div>
  )
}

export default Catalogue