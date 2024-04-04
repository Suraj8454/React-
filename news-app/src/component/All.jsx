import React from 'react'
import Cards from './Cards'
import "./Cards.css"

export default function All(e) {
  return (
    <>
        <Cards urlToImage={e.urlToImage}
        title={e.title}
        description={e.description}
        author={e.author}
        url={e.url} />
    </>
  )
}
