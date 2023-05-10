import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
const contactSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(name, number) {
        return {
          payload: {
            name: name,
            id: nanoid(),
            number: number,
          },
        };
      },
    },
    deleteContact(state, action) {
      return state.filter(contact => {
        return contact.id !== action.payload;
      });
    },
    filterNames(state, action) {
      return state.filter(contact =>
        contact.name.toLowerCase().includes(action.payload)
      );
    },
  },
});

export const { addContact, deleteContact, filterNames } = contactSlice.actions;
export const contactReducer = contactSlice.reducer;
