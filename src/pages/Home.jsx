import React from "react"
import NavigationBar from '../components/NavigationBar'
import Presentation from '../components/Presentation'
import MiniCards from "../components/MiniCards"
import Topics from "../components/Topics"

export default function Home() {
    return(
        <div>
            <NavigationBar />
            <Presentation/>
            <MiniCards/>
            <Topics/>
        </div>
    );
}



