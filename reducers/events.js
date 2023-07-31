import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: { events: [] },
};

export const eventsSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    displayIncomingEvents: (state, action) => {
      state.value.events.push(action.payload);  
    },
  },
});

export const { displayIncomingEvents } = eventsSlice.actions;
export default eventsSlice.reducer;
