import { createSlice } from "@reduxjs/toolkit";

const allUserSlice = createSlice({
  name: 'allUsers',
  initialState: {
    allUsers: [],
  },
  reducers: {
    addUsers: (state, action) => {
      state.allUsers.push(action.payload);
    },
    updateUser: (state, action) => {
      const index = state.allUsers.findIndex(user => user._id === action.payload._id);
      if (index !== -1) {
        // Update user information
        state.allUsers[index] = {
          ...state.allUsers[index],
          ...action.payload, // Spread the new fields (name, email)
        };
      }
    },
  },
});

export const { addUsers, updateUser } = allUserSlice.actions;
export default allUserSlice.reducer;
