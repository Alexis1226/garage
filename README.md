## Run

```
$ git clone https://github.com/Alexis1226/garage.git

# for client-side
$ yarn start

# for server-side
$ yarn server
```

## Feature

- history에 쌓이지 않게 하기 위해 주문 버튼 클릭 시 `window.location.replace('/order')`로 구현 - [9cda1d2](https://github.com/Alexis1226/garage/commit/9cda1d2807fef6947672a5d6792b6ec6b50fcb51)

## Trouble Shooting

> 이미지를 import할 때 "Cannot find module '파일경로' or its corresponding type declarations."라는 에러 발생

- 폴더 생성 후 [파일명].d.ts 파일 생성 후 아래 값 넣기
  ```
  declare module '*.png';
  declare module '*.jpg';
  declare module '*.jpeg';
  ```
- tsconfig.json에 `"typeRoots": ["types"]`넣기
