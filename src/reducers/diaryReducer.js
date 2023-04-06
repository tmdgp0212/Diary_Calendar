const { createSlice } = require("@reduxjs/toolkit");

let initialState = {
  curId: 1,
  diary: [
    {
      id: 0,
      title: "sample diary",
      text: "일기데이터 샘플입니다.",
      date: new Date().getTime(),
    },
  ],
};

const savedDiary = JSON.parse(localStorage.getItem("diary"));

if (savedDiary) {
  if (savedDiary.length >= 1) {
    savedDiary.sort((a, b) => b.id - a.id);
    initialState = {
      curId: parseInt(savedDiary[0].id) + 1,
      diary: savedDiary,
    };
  }
}

const diarySlice = createSlice({
  name: "diary",
  initialState,
  reducers: {
    createDiary: (state, action) => {
      // title, text, date
      const newDiary = {
        id: state.curId,
        title: action.payload.title,
        text: action.payload.text,
        date: new Date(action.payload.date).getTime(),
      };
      localStorage.setItem("diary", JSON.stringify([...state.diary, newDiary]));
      return {
        curId: state.curId + 1,
        diary: [...state.diary, newDiary],
      };
    },
    removeDiary: (state, action) => {
      // (curId)
      const filteredDiary = state.diary.filter(
        (it) => it.id !== action.payload.id
      );

      localStorage.setItem("diary", JSON.stringify(filteredDiary));
      return {
        ...state,
        diary: filteredDiary,
      };
    },

    editDiary: (state, action) => {
      //id, title, text, date
      const newDiary = state.diary.map((it) =>
        parseInt(it.id) === parseInt(action.payload.id)
          ? {
              id: action.payload.id,
              title: action.payload.title,
              text: action.payload.text,
              date: action.payload.date,
            }
          : it
      );
      localStorage.setItem("diary", JSON.stringify(newDiary));
      return {
        ...state,
        diary: newDiary,
      };
    },
  },
});

export const { createDiary, removeDiary, editDiary } = diarySlice.actions;
export default diarySlice.reducer;
