import React, { useContext } from "react"
import { LanguageContext } from "./App"

export function DisplayLanguage() {
    const language = useContext(LanguageContext)
    const options ={
        it: {italiano: "ciao"},
        en: {english: "hi"}
    }

    return(
        <>
        {options[language].italiano}
        {options[language].english}
        </>
    )
    }
