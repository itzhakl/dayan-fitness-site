import { DatasType } from "@/shared/types";

type Props = {
    item: DatasType;
}

const Class = ({item}: Props) => {
  const isImage = item.image.includes('.jpeg')
  return (
    <li className="relative mx-5 rounded-3xl inline-block h-[25rem] w-[12.5rem]" >
        <div className='p-5 absolute z-20 flex flex-col h-[25rem] w-[12.5rem] items-center justify-center whitespace-normal bg-primary text-center text-white opacity-0 transition duration-500 hover:opacity-90'>
            <p className="text-2xl font-bold">{item.name}</p>
            <p className="mt-5">{item.description}</p>
        </div>
        {
            isImage ? <img className="rounded-3xl" src={item.image} alt='training-graphics' /> :
            <video autoPlay controls={false} className="rounded-3xl" src={item.image}/>
        }
    </li>
  );
}

export default Class;
