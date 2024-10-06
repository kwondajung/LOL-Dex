'use client';

import { Champion } from '@/types/Champion';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const page = () => {
  const [champions, setChampions] = useState<Champion[]>([]);

  const fetchChampion = async () => {
    const getRotation = await fetch('/api/rotation');
    const rotationChampion = await getRotation.json();

    setChampions(rotationChampion);

    return rotationChampion;
  };

  useEffect(() => {
    fetchChampion();
  }, []);

  return (
    <>
      <h1 className="text-2xl font-bold text-center mb-5">
        로테이션 정보 페이지
      </h1>
      <div className="grid grid-cols-6 gap-4">
        {champions.length > 0 ? (
          champions.map((champion, index) => (
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
          ))
        ) : (
          <p>로딩 중...</p>
        )}
      </div>
    </>
  );
};

export default page;
