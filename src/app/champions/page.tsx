import { getChampion } from '@/utils/serverApi';

const page = async () => {
  const championData = await getChampion();

  // 객체 데이터를 배열로 변환
  const championArr = Object.entries(championData.data);

  // TODO: champion unknown 뜨는 거 수정
  const championList = championArr.map(([key, champion]) => {
    return {
      name: champion.name,
      title: champion.title,
    };
  });

  console.log(championList);

  return (
    <>
      <div>챔피언 목록</div>
      <div className="grid grid-cols-4 gap-4">
        {championList.map((champion, index) => (
          <div key={index}>
            <p>{champion.name}</p>
            <p>{champion.title}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default page;
