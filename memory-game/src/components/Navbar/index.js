import React from 'react'
import './style.css'

function Navbar(props) {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark navbar-fixed-top">
            <h1 className="navbar-brand" href="../../..index.html">Memory Game!</h1>
            <h1 className="navbar-brand mx-auto" href="../../..index.html">Click an image to begin</h1>
            <h1 className="navbar-brand" href="../../..index.html">Score: {} | Top score: {}</h1>
        </nav>
    )
}

export default Navbar