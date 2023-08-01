import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [],
};

export const eventsSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    displayIncomingEvents: (state, action) => {
      state.value.events(action.payload);  
    },
    setEvents:(state, action)=>{
      state.value=action.payload;
    },
   
    // }
  },
});

export const { displayIncomingEvents,addParticipant,removeParticipant,addInter,removeInter } = eventsSlice.actions;
export default eventsSlice.reducer;
