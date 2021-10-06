import React from 'react'
import cn from 'classnames'

function Simcoe(props) {
    return (
        <div>
            <button className = {cn("border-2 p-1 text-sm")}>{props.tagsa}</button>
            <button className = {cn("border-2 p-1 text-sm")}>{props.tagsb}</button>
            <button className = {cn("border-2 p-1 text-sm")}>{props.tagsc}</button>
        </div>
    )
}

export default Simcoe
