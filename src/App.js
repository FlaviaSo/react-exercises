import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Welcome } from './Welcome'
import { Counter } from './Counter'

export function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Welcome name='Flavia' />} />
                    <Route path='/counter' element={<Counter/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}