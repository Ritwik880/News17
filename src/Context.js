// context creation
// provider
// consumer -> leangthy process -> we use useContext hook to optimise it
import React, { useContext, useReducer, useEffect, useState } from "react";
import reducer from "./reducer";
const AppContext = React.createContext();

const API = 'http://hn.algolia.com/api/v1/search?';
const intialState = {
    isLoading: true,
    query: "HTML",
    nbPages: 0,
    page: 0,
    hits: []
}
const AppProvider = ({ children }) => {

    // const [first, setfirst] = useState(second)

    const [state, dispatch] = useReducer(reducer, intialState);

    const getApiData = async (url) => {
        dispatch({ type: "SET_LOADING" })
        try {
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
            dispatch({
                type: 'GET_STORIES',
                payload: {
                    hits: data.hits,
                    nbPages: data.nbPages,
                }
            })
        }
        catch (err) {
            console.log(err);
        }
    }
    const removePost = (post_ID) => {
        dispatch({
            type: "REMOVE_POST", payload: post_ID
        })
    }
    const searchPost = (searchQuery) => {
        dispatch({
            type: "SEARCH_QUERY",
            payload: searchQuery
        })
    }
    const getPrevPage = () => {
        dispatch({
            type: "PREV_PAGE",
        })

    }
    const getNextPage = () => {
        dispatch({
            type: "NEXT_PAGE",
        })

    }
    useEffect(() => {
        getApiData(`${API}query=${state.query}$page=${state.page}`)
    }, [state.query, state.page])

    return (
        <AppContext.Provider value={{ ...state, removePost, searchPost, getPrevPage, getNextPage }}>
            {children}
        </AppContext.Provider>
    )
};
const useGlobalContext = () => {
    return useContext(AppContext)
}
export { AppContext, AppProvider, useGlobalContext }