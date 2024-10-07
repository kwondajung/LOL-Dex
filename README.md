# LoL(리그 오브 레전드) 정보 APP

# 🖥️ 프로젝트 소개

Riot Games API를 활용하여 챔피언과 아이템 정보를 제공합니다.

# 🕰️ 개발 기간

2024.10.01 ~2024.10.08

# 📂 폴더 구조

📦src  
 ┣ 📂app  
 ┃ ┣ 📂api  
 ┃ ┃ ┗ 📂rotation  
 ┃ ┃ ┃ ┗ 📜route.ts  
 ┃ ┣ 📂champions  
 ┃ ┃ ┣ 📂[id]  
 ┃ ┃ ┃ ┗ 📜page.tsx  
 ┃ ┃ ┗ 📜page.tsx  
 ┃ ┣ 📂fonts  
 ┃ ┃ ┣ 📜GeistMonoVF.woff  
 ┃ ┃ ┗ 📜GeistVF.woff  
 ┃ ┣ 📂items  
 ┃ ┃ ┗ 📜page.tsx  
 ┃ ┣ 📂rotation  
 ┃ ┃ ┗ 📜page.tsx  
 ┃ ┣ 📜favicon.ico  
 ┃ ┣ 📜globals.css  
 ┃ ┣ 📜layout.tsx  
 ┃ ┗ 📜page.tsx  
 ┣ 📂components  
 ┣ 📂public  
 ┣ 📂styles  
 ┣ 📂types  
 ┃ ┣ 📜Champion.ts  
 ┃ ┣ 📜Item.ts  
 ┃ ┗ 📜Lotation.ts  
 ┗ 📂utils  
 ┃ ┗ 📜serverApi.ts

# 🧩 주요 기능

## 1. 챔피언 목록

### 1-1. 챔피언 목록

![image](https://github.com/user-attachments/assets/98adc1f0-8ace-4bd6-97a7-1931d4022f99)
챔피언의 목록 중 이름과 타이틀, 이미지를 불러오는 페이지입니다.

### 1-2. 챔피언 정보 상세 보기

![image](https://github.com/user-attachments/assets/c41646a6-ea88-42d9-bf6a-c72259185726)
위의 챔피언 목록에서 원하는 챔피언 클릭 시 해당 챔피언의 정보를 상세하게 볼 수 있는 페이지입니다. 이름, 타이틀, 설명, 스탯 및 이미지를 확인 할 수 있습니다.

## 2. 아이템 목록 불러오기

![image](https://github.com/user-attachments/assets/6da8b714-d3eb-4a05-b82d-8bc4aa0b2db9)
아이템의 목록 중 이름과 설명, 이미지를 불러오는 페이지입니다.

## 3. 로테이션 챔피언 불러오기

![image](https://github.com/user-attachments/assets/39c424fc-844d-4f7b-987f-c9117f8912b2)
일주일 동안 무료로 체험할 수 있는 로테이션 챔피언의 목록을 불러오는 페이지입니다. 이름과 타이틀, 이미지를 확인 할 수 있습니다.

# 🚨 트러블 슈팅

## 1. 문제 발생

숫자 배열로 이루어진 로테이션 챔피언과 객체로 이루어진 챔피언을 `filter()`로 비교하여 로테이션 챔피언의 데이터를 얻으려 했지만, 필터링 결과가 빈 배열로 나왔습니다.

## 2. 원인 추론

챔피언 key의 타입을 `string`으로 줬기 때문에 숫자 배열인 로테이션 챔피언과 비교할 수 없을 거라고 판단했습니다.
![image](https://github.com/user-attachments/assets/ebd09f42-2024-4eb8-bdf9-e92049830197)

## 3. 해결 방안

### 3-1. 형변환

일단 **champion.key**가 `string`이므로 `Number()`로 형변환을 했습니다.

```js
Number(champion.key);
```

### 3-2. includes()

비교 대상인 `result`는 배열이므로 원하는 값이 포함된 것을 찾는 `includes()`를 사용했습니다.

```js
const filterChampion: championRotationList[] = mapChampion.filter(
  (champion) => {
    const cham = (result ?? []).includes(Number(champion.key));
    return cham;
  }
);
```

## 4. 결과

아래처럼 더 이상 빈배열이 아닌 챔피언들과 비교해서 무료인 챔피언들은 `true`인 결과를 얻었습니다.
![image](https://github.com/user-attachments/assets/8a2cf147-6f0e-4cda-910d-3d91123dab99)
그 후 page.tsx 내의 코드에서 `rotationChampion`을 콘솔로 찍었을 때 원하는 값을 얻을 수 있었습니다.

```js
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
```

![image](https://github.com/user-attachments/assets/5a2961b2-dc2f-4cc7-be5b-33e80ab8f965)

# 📝 Technologies & Tools

![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![github](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)
![javascript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white)
![vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)
![css](https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white)
![prettier](https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E)
![git](https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white)
![vscode](https://img.shields.io/badge/Visual_Studio_Code-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![Yarn](https://img.shields.io/badge/yarn-%232C8EBB.svg?style=for-the-badge&logo=yarn&logoColor=white)
