import React, { useState, useEffect, useContext } from 'react'
import { useGlobalContext } from './Context';
import { ScatterBoxLoader, theme } from "react-awesome-loaders";
const Stories = () => {

    const { hits, nbPages, isLoading, removePost } = useGlobalContext()
    return (
        <>
            {
                !isLoading ?
                    <div className='stories-div'>
                        {
                            hits && hits.map((curElem) => {
                                const { title, author, objectID, url, num_comments } = curElem
                                return (


                                    <div className="card" key={objectID}>
                                        <h2>
                                            {title}
                                        </h2>
                                        <p>
                                            By
                                            <span> {author} </span> | <span>
                                                {num_comments}
                                            </span> comments
                                        </p>
                                        <div className="card-button">
                                            <a href={url}>Read More</a>
                                            <a href='#' onClick={() => removePost(objectID)}>Remove</a>
                                        </div>
                                    </div>


                                )

                            })
                        }
                    </div>
                    : <div className="loader">
                        <ScatterBoxLoader
                            primaryColor={"#6366F1"}

                        />
                    </div>

            }


        </>
    )
}

export default Stories