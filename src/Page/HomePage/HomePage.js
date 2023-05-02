import React from 'react'
import Banner from '../../Components/Banner/Banner'



import SelectHome from '../../Components/Select/SelectHome'



import ListMoveHome from './ListMoveHome/ListMoveHome'


import TabsMovieHome from '../../Components/TabsMovieHome/TabsMovieHome'


import DowloadApp from '../../Components/DowloadApp/DowloadApp'






export default function HomePage() {
    return (
        <div>

            <Banner></Banner>




            <SelectHome></SelectHome>

            <ListMoveHome></ListMoveHome>

            <TabsMovieHome></TabsMovieHome>


            <DowloadApp></DowloadApp>




        </div>
    )
}
