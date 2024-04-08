import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledHero = styled.div`
    header {
        @media (max-width: 767px) {
            position: fixed;
            z-index: 99;
            top: 0;
            left: 0;
            width: 100%;
        }
    }

    .bar {
        stroke: white;
    }

    nav {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 40px;
    }

    .menu-wrapper {
        @media (max-width: 767px) {
            position: absolute;
            top: 40px;
            left: 0;
            height: 100vh;
            width: 100vw;
            background: black;
            color: white;
        }
        
        @media (min-width: 768px) {
        
        }
    }

    .items {
        padding: 60px 20px;
        li {
            margin: 40px 0;
        }
        @media (min-width: 768px) {
            padding: 0;
            display: flex;
            justify-content: flex-end;

            li {
                margin: 0 0 0 40px;
            }
        }
    }

    .button-wrapper {
        border: 1px solid blue;
        width: 30px;
        height: 30px;
    }
`

const Header = () => {
    return (
        <StyledHero>
            <header className="global-header bg-black">
                {/* <div className="container">
                    <nav aria-label="Main Navigation">
                        <Link className="text-white" to="/">Katie Watt</Link>
                        <div className="button-wrapper mobile-only">
                            <button id="menu-toggle" aria-haspopup="true" className="hamburger">
                                <span className="sr-only">open menu</span>
                                <svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" width="22" height="19" viewBox="0 0 22 19" fill="none">
                                    <path className="bar-1 bar" d="M1 1.5H21" stroke="black" stroke-width="1.5" stroke-linecap="round" />
                                    <path className="bar-2 bar" d="M1 9.5H21" stroke="black" stroke-width="1.5" stroke-linecap="round" />
                                    <path className="bar-3 bar" d="M1 17.5H21" stroke="black" stroke-width="1.5" stroke-linecap="round" />
                                </svg>
                            </button>
                        </div>

                        <div className="menu-wrapper">
                            <div className="inner-menu" tabIndex="-1" id="inner-menu" aria-label="Expanded Navigation">
                                <ul className="items">
                                    <li><a href="#work">Work</a></li>
                                    <li><a href="#about">About</a></li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div> */}
            </header>
        </StyledHero>
    )
}

export default Header