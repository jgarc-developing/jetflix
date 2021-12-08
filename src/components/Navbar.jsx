import React from 'react'

export const Navbar = () => {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container">
                <a href="/" className="navbar-brand mb-0 h1">Jetflix</a>

                <ul className="navbar-nav">
                    <button className="nav-item btn btn-danger">
                        <a className="nav-link active" aria-current="page" href="/login">Login</a>
                    </button>
                </ul>
            </div>
        </nav>
    )
}
