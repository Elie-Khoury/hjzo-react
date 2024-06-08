import { useState } from "react";
import s from "./styles/Search.module.css";
import Card from "./components/Card";

function Search(){

    const [searchInput, setInput] = useState("");

    function handleChange(event){
        setInput(event.target.value);
    }
    function clearInput(){
        document.getElementById("searchInput").value = "";
        setInput("");
    }

    return(
        <div className={s.container}>
            <div className={s.searchBarContainer}>
                <div className={s.iconContainer}>
                    <img src="https://img.icons8.com/?size=100&id=132&format=png&color=707070" alt="" />
                </div>
                <input id="searchInput" className={s.searchBar} type="text" placeholder="Search for court" onChange={handleChange}/>
                {searchInput != "" &&
                                        <div className={s.iconContainer} onClick={clearInput}>
                                            <img src="https://img.icons8.com/?size=100&id=6483&format=png&color=707070" alt="" />
                                        </div>
                }
            </div>
            <div className={s.cardsContainer}>
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
}

export default Search;