import React from "react";
import "./App.css";
import Navbar from "./components/navbar/navbar";
import PokemonCard from "./libs/PokemonCard";
const Home = () => {
    return (
        <div>
            <Navbar />
            <PokemonCard />
        </div>
    );
}

export default Home;