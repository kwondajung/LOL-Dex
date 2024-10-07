// 라우트 핸들러

import { ChampionTable } from '@/types/Champion';
import { getChampion } from '@/utils/serverApi';
import { NextResponse } from 'next/server';

const API_KEY = process.env.NEXT_PUBLIC_RIOT_API_KEY as string;

export async function GET() {
  try {
    const res = await fetch(
      'https://kr.api.riotgames.com/lol/platform/v3/champion-rotations',
      {
        method: 'GET',
        headers: {
          'X-Riot-Token': API_KEY,
        },
      }
    );
    const data = await res.json();
    const result = data.freeChampionIds;

    // 챔피언 리스트 가져오기
    const championData: ChampionTable = await getChampion();
    const championArr = Object.entries(championData.data);

    const mapChampion = championArr.map(([key, champion]) => {
      return {
        key: champion.key,
        id: champion.id,
        name: champion.name,
        title: champion.title,
        image: champion.image.full,
      };
    });

    const filterChampion = mapChampion.filter((champion) => {
      const cham = result.includes(Number(champion.key));
      return cham;
    });

    return NextResponse.json(filterChampion);
  } catch (error) {
    console.log(error);
  }
}
