import { CiSearch } from "react-icons/ci";
import { GiEgyptianProfile } from "react-icons/gi";
import React from "react";
import styles from "./header.module.css";
import Logo from "../assets/logo.png";
import { search, searchAnime } from '../Services/ContentService';
import SearchCard from "../Components/SearchCard";
import useDebounce from "../Hooks/useDebounce";
export default function Header()
 {
    const [isLoggedIn, setIsLoggedIn] = React.useState(false);
    const [searchQuery, setSearchQuery] = React.useState('');
    const [searchResults, setSearchResults] = React.useState([]);
    const debounceSearchQuery = useDebounce(searchQuery, 100);
    const handleSearchChange = async (e) => {
        setSearchQuery(e.target.value);
        if(debounceSearchQuery)
        {
            let res1 = await search(debounceSearchQuery);
            let res2 = await searchAnime(debounceSearchQuery);
            let response = res1.concat(res2);
            setSearchResults(response);
        }
    }
    
    return(
        <>
        <header className="flex items-center justify-around border-b-2 border-[#2a2a2a]">
            <div className={`${styles.searchBar} flex items-center justify-between  rounded-full px-8 py-2 my-2 mx-20 text-white`}>
            <CiSearch />
            <input type="text" name="search" id="search" placeholder="search title , people" onChange={handleSearchChange} className=" flex w-[25rem] bg-transparent border-none outline-none ml-2" />
            </div>
            {isLoggedIn ? <GiEgyptianProfile /> : <div className="flex flex-row justify-between"><button className={`${styles.login} text-white px-4 py-2 mx-2 rounded-full w-1/2 justify-between cursor-pointer`}>Login</button> <button className="bg-red-500 text-white px-4 py-2 rounded-full cursor-pointer">Register</button></div>}
        </header>
        <SearchCard data={searchResults}/>
        </>
    )
}