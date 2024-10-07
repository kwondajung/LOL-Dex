import { getDetail } from '@/utils/serverApi';
import React from 'react';

type Props = {
  params: {
    id: string;
  };
};

// 메타데이터
export function generateMetadata({ params }: Props) {
  // params에서 id 추출
  const id = params.id;
  return {
    title: `${id}의 상세 페이지`,
  };
}

const championDetailPage = async ({ params }: Props) => {
  const championId = params.id;

  // 챔피언 상세 정보 가져오기
  const detail = await getDetail(championId);

  const championData = detail?.data?.[championId];

  if (!championData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="relative">
      <img
        src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${championId}_0.jpg`}
        className="w-full brightness-50"
        key={championData.key}
      />
      <div className="absolute top-1/4 text-white pl-48">
        <p className="text-3xl">{championData.title}</p>
        <p className="text-white text-8xl font-bold">{championData.name}</p>
        <p className="w-[700px]">{championData.blurb}</p>
        <p>공격력: {championData.info.attack}</p>
        <p>방어력: {championData.info.defense}</p>
        <p>지력: {championData.info.magic}</p>
        <p>난이도: {championData.info.difficulty}</p>
      </div>
    </div>
  );
};

export default championDetailPage;
