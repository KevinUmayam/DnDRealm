import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    mode: "light",
    user: null,
    token: null,
    posts: [],
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setMode: (state) => {
            state.mode = state.mode === "light" ? "dark" : "light";
        },
        setLogin: (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
        },
        setLogout: (state) => {
            state.user = null;
            state.token = null;
        },
        setFriends: (state, action) => {
            if (state.user) {
                state.user.friends = action.payload.friends;
            } else {
                console.error("user friends non-existent :(");
            }
        },
        setPosts: (state, action) => {
            state.posts = action.payload.posts;
        },
        setPost: (state, action) => {
            const updatedPosts = state.posts.map((post) => {
                if (post._id === action.payload.post._id) return action.payload.post;
                return post;
            });
            state.posts = updatedPosts;
        },
        setCharacters: (state, action) => {
            state.characters = action.payload.characters;
        },
        setCharacter: (state, action) => {
            const updatedCharacters = state.characters.map((character) => {
                if (character._id === action.payload.character._id) return action.payload.character;
                return character;
            });
            state.characters = updatedCharacters;
        },
    },
});
export const { setMode, setLogin, setLogout, setFriends, setPosts, setPost, setCharacters, setCharacter } =
    authSlice.actions;
export default authSlice.reducer;
