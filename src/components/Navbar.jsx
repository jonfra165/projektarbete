import React from "react";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark" aria-label="Third navbar example">
        <div className="container">
            <a className="navbar-brand" href="index.html">GIF-dagboken</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample03" aria-controls="navbarsExample03" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarsExample03">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="/">Dagbok</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/calendar">Om oss</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    );
};

export default Navbar;