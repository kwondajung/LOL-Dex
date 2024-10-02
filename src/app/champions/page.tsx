import { getChampion } from '@/utils/serverApi';
import Image from 'next/image';

const page = async () => {
  const championData = await getChampion();

  // 객체 데이터를 배열로 변환
  const championArr = Object.entries(championData.data);

  // TODO: champion unknown 뜨는 거 수정
  const championList = championArr.map(([key, champion]) => {
    return {
      id: champion.id,
      name: champion.name,
      title: champion.title,
      image: champion.image.full,
    };
  });

  console.log(championList);

  return (
    <>
      <h1 className="text-2xl font-bold text-center mb-5">챔피언 목록</h1>
      <div className="grid grid-cols-4 gap-4">
        {championList.map((champion, index) => (
          <div
            key={index}
            className="grid place-items-center border text-center"
          >
            <Image
              src={`https://ddragon.leagueoflegends.com/cdn/14.19.1/img/champion/${champion.id}.png`}
              alt={champion.name}
              width={100}
              height={100}
            />
            <p>{champion.name}</p>
            <p>{champion.title}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default page;
