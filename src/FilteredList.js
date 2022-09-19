import React, { useMemo } from "react"

export function FilteredList({ list }) {

    function listRendering(list) {
        return list.map(el => el.age > 18 && <li key={el.id}>User: {el.name}, {el.age} years old</li>)
    }

    const cachedListRendering = useMemo(() => listRendering(list), [list])

    return (
        <>
            {cachedListRendering}
        </>
    )
}