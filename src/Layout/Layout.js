import React from 'react'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'

export default function Layout({ Component }) {
    return (
        <div className='flex flex-col min-h-screen'>
            <Header></Header>
            <div className="flex-grow">
                <Component></Component>
            </div>
            <Footer></Footer>
        </div>
    )
}
