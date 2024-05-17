import { createSlice } from '@reduxjs/toolkit';

const heroCardSlice = createSlice({
  name: 'cardHero',
  initialState: {
    heroData: null
  },
  reducers: {
    setHeroData: (state, action) => {
      state.heroData = action.payload;
    }
  }
});

export const { setHeroData } = heroCardSlice.actions;
export default heroCardSlice.reducer;
