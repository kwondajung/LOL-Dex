// 이 파일 자체가 라우트 핸들러(=백엔드 서버)

import { NextResponse } from 'next/server';

const apiKey = process.env.NEXT_PUBLIC_RIOT_API_KEY;

// TODO: 로테이션 챔피언 필터링해서 가져오기
// TODO: 1. 응답 데이터를 ChampionRotation 타입을 지정해줘라
// TODO: 2. NextResponse.json()을 사용하여 json 형태로 응답 ?

export async function GET(request: Request) {
  const res = await fetch(
    'https://kr.api.riotgames.com/lol/platform/v3/champion-rotations',
    {
      headers: {
        'X-Riot-Token': `${apiKey}`,
      },
    }
  );
  const data = await res.json(); // data에 타입 지정
  // console.log('GET /api/rotation');

  return NextResponse.json({ data });
}
