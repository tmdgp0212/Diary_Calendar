# Diary Calendar📆

일기를 쓰고 관리 할 수 있는 달력형 다이어리입니다

작업기간 : 22.09.29 ~ 22.10.05 (총 8일)

작업인원 : 1인

사용언어 : `React`
(react-router-dom , styled-components)

작업목표 : 
- 리액트를 활용하여 페이지 전환이 가능한 SPA(Single Page Application)을 구현한다
- 일기를 작성하고 수정과 삭제가 가능한 다이어리 앱을 구현한다
- 작성 된 일기를 LocalStorage에 저장한다
- 라이브러리를 사용하지 않고 달력을 구현한다

## 🧡페이지 소개

### 💛메인 페이지

![main](https://user-images.githubusercontent.com/112364408/213084460-497bb7c4-c638-4f42-88da-96c4ebbfb69b.png)

메인화면입니다.  
이미 저장된 데이터가 있다면 데이터가 불러와집니다  
날짜 좌우의 버튼을 통해 월 이동이 가능합니다 

---

### 💛달력형 보기와 리스트형 보기

#### 🌟 페이지 이동

![list](https://user-images.githubusercontent.com/112364408/213084986-9a91de56-414e-4739-9605-3e5e850b1b34.png)

달력 아래의 버튼을 통해 달력형 페이지에서 리스트형 페이지로의 전환이 가능합니다

#### 🌟 리스트형 페이지

![listcalendar](https://user-images.githubusercontent.com/112364408/213085133-3f2242f0-7590-421f-aadb-ec7228ed13fa.png)

리스트형 페이지입니다  
달력형의 페이지보다 직관적으로 다이어리의 제목과 내용을 확인 할 수 있습니다  
아래의 달력모양 버튼으로 다시 달력형 페이지로 전환 가능합니다

---

### 💛다이어리 작성하기

#### 🌟 오늘날짜의 다이어리 작성

![plus](https://user-images.githubusercontent.com/112364408/213085501-1cd4dd97-e041-4b0e-92e1-1a605d18c551.png)

달력 아래의 + 버튼을 선택하면 빠르게 오늘날짜의 다이어리를 쓸 수 있는 페이지로 이동합니다

#### 🌟 원하는 날짜의 다이어리 작성

![datepick](https://user-images.githubusercontent.com/112364408/213085502-f00a6bec-84fc-4f92-bdaf-edfc236257b4.png)

원하는 날짜를 직접 선택하실 수도 있습니다

---

### 💛다이어리 작성페이지

![new](https://user-images.githubusercontent.com/112364408/213085989-eeabffeb-6f81-4269-abcc-de73698303e1.png)

새 다이어리를 작성하는 페이지 입니다

---

### 💛다이어리 상세보기

![detail](https://user-images.githubusercontent.com/112364408/213086075-625d67e0-8e4f-471c-9ec9-8c64ebab31fd.png)

어디서든 저장된 일기을 클릭하면 해당 일기를 자세히 볼 수 있는 페이지가 나타납니다

---

### 💛다이어리 수정하기

![edit](https://user-images.githubusercontent.com/112364408/213086650-8c56f245-1475-4a11-b9ef-4c74d88f68f4.png)

일기의 상세페이지에서 수정버튼을 클릭하면  
일기를 작성할때와 같은 페이지로 이동합니다
