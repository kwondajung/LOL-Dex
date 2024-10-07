'use client';

import { Champion } from '@/types/Champion';
import { championRotation } from '@/types/Lotation';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const Page = () => {
  const [champions, setChampions] = useState<Champion[]>([]);

  useEffect(() => {
    fetchChampion();
  }, []);

  const fetchChampion = async (): Promise<Champion[]> => {
    const getRotation = await fetch('/api/rotation');

    // 응답 상태 확인
    if (!getRotation.ok) {
      throw new Error(`로테이션 챔피언 불러오기 오류: ${getRotation.status}`);
    }

    const rotationChampion: Champion[] = await getRotation.json();
    setChampions(rotationChampion);

    return rotationChampion;
  };

  return (
    <div className="mx-40 mt-20">
      <h1 className="text-2xl font-bold text-center mb-5">
        로테이션 정보 페이지
      </h1>
      <div className="grid grid-cols-6 gap-4">
        {champions.length > 0 ? (
          champions.map((champion, index) => (
            // <Link href={`/rotation/${champion.id}`}>
            <div
              key={index}
              className="grid place-items-center border text-center"
            >
              <Image
                src={`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion.id}_0.jpg`}
                alt={champion.name}
                width={300}
                height={100}
              />
              <p>{champion.name}</p>
              <p>{champion.title}</p>
            </div>
            // </Link>
          ))
        ) : (
          <p>로딩 중...</p>
        )}
      </div>
    </div>
  );
};

export default Page;
