import { getChampion } from '@/utils/serverApi';
import Image from 'next/image';
import Link from 'next/link';

const page = async () => {
  const championData = await getChampion();

  // 객체 데이터를 배열로 변환
  const championArr = Object.entries(championData.data);

  // TODO: champion unknown 뜨는 거 수정
  const championList = championArr.map(([key, champion]) => {
    return {
      key,
      id: champion.id,
      name: champion.name,
      title: champion.title,
      image: champion.image.full,
    };
  });

  // console.log(championList);

  return (
    <>
      <h1 className="text-2xl font-bold text-center mb-5">챔피언 목록</h1>
      <div className="grid grid-cols-6 gap-4">
        {championList.map((champion, index) => (
          <Link href={`/champions/${champion.id}`}>
            <div
              key={index}
              className="grid place-items-center border text-center p-5"
            >
              <Image
                src={`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion.id}_0.jpg`}
                alt={champion.name}
                width={200}
                height={100}
              />
              <p>{champion.name}</p>
              <p>{champion.title}</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default page;
