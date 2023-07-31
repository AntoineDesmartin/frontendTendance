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
    //! add et remove particpant ou interressé
    setEvents:(state, action)=>{
      state.value=action.payload;
    },
    // addParticipant :(state, action) =>  {
    //   // console.log(action.payload);
    //   // state.value.push(action.payload);
    // },
    // removeParticipant :(state, action) =>  {
      
    // },
    // addInter :(state, action) =>  {

    // },
    // removeInter :(state, action) =>  {
      
    // }
  },
});

export const { displayIncomingEvents,addParticipant,removeParticipant,addInter,removeInter } = eventsSlice.actions;
export default eventsSlice.reducer;
