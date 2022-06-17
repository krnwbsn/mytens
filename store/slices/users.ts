import { callAPI } from '@utils/fetch-data';
import { createSlice } from '@reduxjs/toolkit';
import Users from 'libraries/api/users';
import { HYDRATE } from 'next-redux-wrapper';

import type { AppState, AppThunk } from '..';

export const UsersSlice = createSlice({
  name: 'profile',

  initialState: {
    usersData: null,
  },

  reducers: {
    setUsersData: (state, action) => {
      state.usersData = action.payload;
    },
  },

  extraReducers: {
    [HYDRATE]: (state, action) => {
      if (!action.payload) {
        return state;
      }

      state.usersData = action.payload.usersData;
    },
  },
});

export const { setUsersData } = UsersSlice.actions;

export const selectUsers = (state: AppState) => state.users;

export const fetchUsers =
  (userName: string): AppThunk =>
  async (dispatch) => {
    const endpointUrl = Users.getUsers(userName);

    try {
      const response = await callAPI(endpointUrl);
      const { data } = response;
      dispatch(setUsersData(data));
    } catch (error) {
      console.error(error);
      dispatch(setUsersData([]));
    }
  };

export default UsersSlice.reducer;
