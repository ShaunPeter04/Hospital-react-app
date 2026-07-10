import React from 'react'
import { Link } from 'react-router-dom'

const NavigationBar = () => {
    return (
        <div>

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm py-3">
                <div className="container">
                    <Link className="navbar-brand fw-bold text-uppercase tracking-wider" href="/">
                        <i className="bi bi-car-front-fill me-2"></i>Aster MIMS
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav ms-auto gap-2">
                            <a className="nav-link active px-3 rounded bg-primary text-white" aria-current="page" href="/">Register Patient</a>
                            <a className="nav-link px-3" href="/search">Search Patient</a>
                            <a className="nav-link px-3" href="/discharge">Discharge Patient</a>
                            <a className="nav-link px-3" href="/view">View All Patients</a>
                        </div>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default NavigationBar