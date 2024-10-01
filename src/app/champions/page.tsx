import { getChampion } from '@/utils/serverApi';

const page = async () => {
  const championData = await getChampion();
  console.log(championData);

  // TODO: 배열로 바꾸기 => map 활용

  return (
    <>
      <div>챔피언 목록 페이지</div>
    </>
  );
};

export default page;
