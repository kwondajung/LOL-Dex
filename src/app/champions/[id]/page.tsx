'use client';

import { Champion } from '@/types/Champion';
import { getDetail } from '@/utils/serverApi';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const championDetailPage = () => {
  const params = useParams<{ id: string }>();
  const championId = params.id;

  const [championDetail, setChampionDetail] = useState<Champion | null>(null);

  const fetchChampionDetail = async () => {
    const detail = await getDetail(championId);

    const championData = detail?.data?.[championId];
    setChampionDetail(championData);
  };

  useEffect(() => {
    fetchChampionDetail();
  }, [championId]);

  if (!championDetail) {
    return <div>Loading...</div>;
  }

  // console.log('API Data => ', championDetail);

  return (
    <div>
      <img
        src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${championId}_0.jpg`}
      />
      <p>{championDetail.name}</p>
      <p>{championDetail.title}</p>
      <p>{championDetail.blurb}</p>
      <p>공격력: {championDetail.info.attack}</p>
      <p>방어력: {championDetail.info.defense}</p>
      <p>지력: {championDetail.info.magic}</p>
      <p>난이도: {championDetail.info.difficulty}</p>
    </div>
  );
};

export default championDetailPage;
