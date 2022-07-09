import { createSlice } from "@reduxjs/toolkit";

export const movieSlice = createSlice({
  name: "movie",
  initialState: {
    ratedList: {
      data: [],
      loading: true,
    },
    popularList: {
      data: [],
      loading: true,
    },
    selected: {},
    favList: [],
    isDropdown: false,
  },
  reducers: {
    addToRated: (state, action) => {
      state.ratedList.data = action.payload;
      state.ratedList.loading = false;
    },
    addToPopular: (state, action) => {
      state.popularList.data = action.payload;
      state.popularList.loading = false;
    },
    addToFav: (state, action) => {
      let copyState = [...state.favList];
      copyState.push(action.payload);
      let ids = copyState.map((item) => item.id);
      const filtered = copyState.filter(
        ({ id }, index) => !ids.includes(id, index + 1)
      );
      state.favList = filtered;
    },
    setSelected: (state, action) => {
      state.selected = action.payload;
    },
    dropDown: (state) => {
      state.isDropdown = !state.isDropdown;
    },
  },
});

export const { addToFav, addToPopular, addToRated, dropDown, setSelected } =
  movieSlice.actions;
export default movieSlice.reducer;
