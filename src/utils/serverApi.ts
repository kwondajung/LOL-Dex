'use server';

// TODO: return 값에 대한 타입 지정
// 최신 버전 가져오기
export const getVersion = async () => {
  const response = await fetch(
    'https://ddragon.leagueoflegends.com/api/versions.json'
  );
  const data = await response.json();
  const version = data[0];

  return version;
};

// 챔피언 목록 데이터 가져오기(ISR)
export const getChampion = async () => {
  const newVersion = await getVersion();

  try {
    const response = await fetch(
      `https://ddragon.leagueoflegends.com/cdn/${newVersion}/data/ko_KR/champion.json`,
      {
        next: {
          revalidate: 60,
        },
      }
    );
    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};

// 챔피언 상세 정보 가져오기
export const DetailResponse = async (version: number, id: string) => {
  const response = await fetch(
    `https://ddragon.leagueoflegends.com/cdn/${version}/data/ko_KR/champion/${id}.json`
  );
  const data = await response.json();
  return data;
};
