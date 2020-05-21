import React from "react"
import Header from "./Header"
import Content from "./Content"

class MemeGenerator extends React.Component {
    render() {
        return (
            <>
                <Header />
                <Content />
            </>
        )
    }
}

export default MemeGenerator