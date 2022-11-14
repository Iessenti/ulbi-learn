import { Suspense, useContext, useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import { classNames } from './helpers/classNames/classNames'
import './index.scss'
import { AboutPageAsync } from './pages/AboutPage/AboutPage.async'
import { MainPageAsync } from './pages/MainPage/MainPageAsync'

import './styles/index.scss'
import { Theme, ThemeContext } from './theme/ThemeContext'
import { useTheme } from './theme/useTheme'


const App = () => {

    const {theme, toggleTheme} = useTheme()

    return (
        <div className={ classNames('app', {hovered: true, selected: false} , [theme]) }>
            <Suspense fallback={<div> loading.... </div>}>
                <Link to={'/'}>
                    Главная
                </Link>
                <Link to={'/about'}>
                    about
                </Link>
                <button
                    onClick={ toggleTheme }
                >
                    theme
                </button>
                <Routes>
                    <Route path={'/about'} element={ <AboutPageAsync /> } />
                    <Route path={'/'} element={<MainPageAsync /> } />
                </Routes>
            </Suspense>
        </div>
    )
}

export default App