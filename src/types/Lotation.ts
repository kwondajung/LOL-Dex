interface ChampionImage {
  full: string;
  sprite: string;
  group: string;
  x: number;
  y: number;
  w: number;
  h: number;
}

export type championRotation = {
  freeChampionIds: number[];
  freeChampionIdsForNewPlayers: number[];
  maxNewPlayerLevel: number;
};

export type championRotationList = {
  key: string;
  id: string;
  name: string;
  title: string;
  image: ChampionImage;
};
