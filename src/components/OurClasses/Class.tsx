import { DatasType } from "@/shared/types";

type Props = {
    item: DatasType;
}

const Class = ({item}: Props) => {
  const overlayStyles = `p-5 absolute z-20 flex flex-col h-[450px] w-[380px] items-center justify-center whitespace-normal bg-primary-500 text-center text-white opacity-0 transition duration-500 hover:opacity-90`;
  const isImage = item.image.includes('.jpeg')
  return (
    <li className="relative mx-5 inline-block h-[450px] w-[380px]" >
        <div className={overlayStyles}>
            <p className="text-2xl font-bold">{item.name}</p>
            <p className="mt-5">{item.description}</p>
        </div>
        {
            isImage ? <img src={item.image} alt='training-graphics' /> :
            <video autoPlay controls src={item.image}/>
        }
    </li>
  );
}

export default Class;
