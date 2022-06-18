import { callAPI } from '@utils/fetch-data';
import { createSlice } from '@reduxjs/toolkit';
import Users from 'libraries/api/users';
import { HYDRATE } from 'next-redux-wrapper';

import type { AppState, AppThunk } from '..';

export const UsersSlice = createSlice({
  name: 'profile',

  initialState: {
    usersData: null,
    reposData: null,
  },

  reducers: {
    setUsersData: (state, action) => {
      state.usersData = action.payload;
    },
    setReposData: (state, action) => {
      state.reposData = action.payload;
    },
  },

  extraReducers: {
    [HYDRATE]: (state, action) => {
      if (!action.payload) {
        return state;
      }

      state.usersData = action.payload.usersData;
      state.reposData = action.payload.reposData;
    },
  },
});

export const { setUsersData, setReposData } = UsersSlice.actions;

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
      dispatch(setUsersData({}));
    }
  };

export const fetchReposByUsername =
  (userName: string): AppThunk =>
  async (dispatch) => {
    const endpointUrl = Users.getRepos(userName);

    try {
      const response = await callAPI(endpointUrl);
      const { data } = response;
      dispatch(setReposData(data));
    } catch (error) {
      console.error(error);
      dispatch(setReposData([]));
    }
  };

export default UsersSlice.reducer;
