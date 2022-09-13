import React from "react";
import { LanguageContext } from "./App"

export class DisplayLanguage extends React.Component {
    render() {
        return (
            <div>
                <LanguageContext.Consumer>
                    {
                        (language) => (
                            language === "en" ? <h1>HELLO!</h1> : <h1>CIAO!</h1>
                        )

                    }
                </LanguageContext.Consumer>
            </div>
        )
    }
}