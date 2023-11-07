import { createSlice ,createAsyncThunk} from "@reduxjs/toolkit";
import { APIKey } from "../../common/apis/MoiveApiKey";
import moiveApi from "../../common/apis/moiveApi";

export const fetchAsyncMovies = createAsyncThunk(
    "movies/fetchAsyncMovies",
    async () => {
      const movieText = "Harry";
      const response = await moiveApi.get(
        `?apiKey=${APIKey}&s=${movieText}&type=movie`
      );
      return response.data;
    }
  );
  

  export const fetchAsyncShows = createAsyncThunk(
    "movies/fetchAsyncShows",
    async () => {
      const seriesText = "Friends";
      const response = await moiveApi.get(
        `?apiKey=${APIKey}&s=${seriesText}&type=series`
      );
      return response.data;
    }
  );
  
  export const fetchAsyncMovieOrShowDetail = createAsyncThunk(
    "movies/fetchAsyncMovieOrShowDetail",
    async (id) => {
      const response = await moiveApi.get(`?apiKey=${APIKey}&i=${id}&Plot=full`);
      return response.data;
    }
  );



const initialState = {
    movies: {},
    shows: {},
  selectMovieOrShow: {},
   
  };
  
  const moiveSlice =createSlice({
    name: "movies",
    initialState,
    reducers:{
        addMoives:(state,{payload})=>{
            state.movies=payload;
        },
        removeSelectedMovieOrShow: (state) => {
            state.selectMovieOrShow = {};
          },
    },
    extraReducers: {
        [fetchAsyncMovies.pending]: () => {
          console.log("Pending");
        },
        [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
          console.log("Fetched Successfully!");
          return { ...state, movies: payload };
        },
        [fetchAsyncMovies.rejected]: () => {
          console.log("Rejected!");
        },
        [fetchAsyncShows.fulfilled]: (state, { payload }) => {
            console.log("Fetched Successfully!");
            return { ...state, shows: payload };
          },
          [fetchAsyncMovieOrShowDetail.fulfilled]: (state, { payload }) => {
            console.log("Fetched Successfully!");
            return { ...state, selectMovieOrShow: payload };
          },
    }
  });
  export const { removeSelectedMovieOrShow } = moiveSlice.actions;
  export const getAllmovies=(state)=>state.movies.movies
  export const getAllShows = (state) => state.movies.shows;
export const getSelectedMovieOrShow = (state) => state.movies.selectMovieOrShow;

  export default moiveSlice.reducer