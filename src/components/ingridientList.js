import React from 'react'
import Ingridient from './ingridient'

export default function ingridientList({ingridient}) {
    const incrlist=ingridient.map(item=>{
        return <Ingridient key={item.id} {...item} />
    })
    return (
        <div className="ingredient-grid">
           {incrlist} 
        </div>
    )
}
