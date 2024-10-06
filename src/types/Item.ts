// 아이템 이미지 정보
interface ItemImage {
  full: string; // 이미지 파일 이름
  sprite: string; // 스프라이트 파일 이름
  group: string; // 아이템 그룹
  x: number; // 스프라이트 x 위치
  y: number; // 스프라이트 y 위치
  w: number; // 이미지 너비
  h: number; // 이미지 높이
}

// 아이템의 금액 정보
interface ItemGold {
  base: number; // 기본 가격
  purchasable: boolean; // 구매 가능 여부
  total: number; // 총 가격
  sell: number; // 판매 가격
}

// 아이템의 맵 정보
interface ItemMaps {
  [key: string]: boolean; // 맵 ID와 boolean 값 (사용 가능 여부)
}

// 아이템의 스탯 정보
interface ItemStats {
  FlatMovementSpeedMod: number; // 이동 속도 증가
}

// 아이템의 메인 인터페이스
export interface Item {
  id: string; // 아이템 ID
  name: string; // 아이템 이름
  description: string; // 아이템 설명 (HTML 형식)
  colloq: string; // 아이템의 다른 이름
  plaintext: string; // 간단한 설명
  into: string[]; // 이 아이템으로 업그레이드 가능한 아이템 ID 배열
  image: ItemImage; // 아이템 이미지 정보
  gold: ItemGold; // 아이템 금액 정보
  tags: string[]; // 아이템 태그 배열
  maps: ItemMaps; // 아이템의 맵 정보
  stats: ItemStats; // 아이템의 스탯 정보
}

// 아이템 이름의 타입
export type ItemTable = {
  [id: string]: Item;
};
