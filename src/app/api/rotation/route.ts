const apiKey = process.env.NEXT_PUBLIC_RIOT_API_KEY;

// TODO: 로테이션 챔피언 필터링해서 가져오기
export async function GET(request: Request) {
  const res = await fetch(
    'https://kr.api.riotgames.com/lol/platform/v3/champion-rotations',
    {
      headers: {
        'X-Riot-Token': `${apiKey}`,
      },
    }
  );
  const data = await res.json();

  return Response.json({ data });
}
