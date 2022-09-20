import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Welcome } from './Welcome'

export function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Welcome name='Flavia' />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}