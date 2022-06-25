import React from 'react'
import { useGlobalContext } from './Context'

const Search = () => {
    const { query, searchPost } = useGlobalContext()
    return (
        <>
            <div>
                <h1>Tech News On The Go</h1>
                <form onSubmit={(e) => e.preventDefault()}>
                    <input type="text" placeholder='search here' onChange={(e) => searchPost(e.target.value)} value={query} />
                </form>
            </div>
        </>
    )
}

export default Search