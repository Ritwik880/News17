import React from 'react'
import Stories from './Stories'
import './App.css'
import Search from './Search'
import Pagination from './Pagination'

const App = () => {
  return (
    <>
      <Search />
      <Pagination />
      <Stories />

    </>
    // http://hn.algolia.com/api/v1/search?query=...
  )
}

export default App