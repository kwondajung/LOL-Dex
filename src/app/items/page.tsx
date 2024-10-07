import { ItemTable } from '@/types/Item';
import { getItem } from '@/utils/serverApi';
import Image from 'next/image';

const page = async () => {
  const ItemData: ItemTable = await getItem();

  const itemArr = Object.entries(ItemData.data);

  const ItemList = itemArr.map(([key, item]) => {
    return {
      id: key,
      name: item.name,
      plaintext: item.plaintext,
    };
  });

  return (
    <div className="mx-40">
      <h1 className="text-2xl font-bold text-center mb-5">아이템 목록</h1>
      <div className="grid grid-cols-6 gap-4">
        {ItemList.map((item, index) => (
          <div
            key={index}
            className='grid place-items-center border text-center p-5"'
          >
            <Image
              src={`https://ddragon.leagueoflegends.com/cdn/14.19.1/img/item/${item.id}.png`}
              alt={item.name}
              width={100}
              height={100}
            />
            <p>{item.name}</p>
            <p>{item.plaintext}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
