import { createSlice, nanoid, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchPosts = createAsyncThunk('movies/fetchMovies', async () => {
    const response = await fetch('http://localhost:4000/movies')
    return response.json()
})

