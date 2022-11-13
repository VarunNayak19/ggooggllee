import React from 'react'
import './landing.css'
import '../../components/header/header.css'
// import axios from "axios";
import { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { fetchAsyncSearch } from '../../redux/searchSlice';
import { useNavigate } from 'react-router-dom';
import Header from "../../components/header/header"
const Landing = () => {
    // const [term, setterm] = useState("")
    // const [searchTerm, setsearchTerm] = useState("")
    // useEffect(() => {
    //     const options = {
    //         method: 'GET',
    //         url: 'https://real-time-web-search.p.rapidapi.com/search',
    //         params: { q: searchTerm, limit: '300' },
    //         headers: {
    //             'X-RapidAPI-Key': '842bc111f4mshbb3800ae5e66b65p1c7e57jsn118d0d19a7bb',
    //             'X-RapidAPI-Host': 'real-time-web-search.p.rapidapi.com'
    //         }
    //     };

    //     axios.request(options).then(function (response) {
    //         console.log(response.data);
    //     }).catch(function (error) {
    //         console.error(error);
    //     });
    // }, [searchTerm])

    // const submitHandler = (e) => {
    //     e.preventDefault();
    //     setsearchTerm(term);
    //     setterm("")
    // }

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [term, setterm] = useState("")
    const [searchTerm, setsearchTerm] = useState("")
    const submitHandler = (e) => {
        e.preventDefault();
        setsearchTerm(term)
        dispatch(fetchAsyncSearch(searchTerm));
        setterm("")
        localStorage.setItem("lastsearch", searchTerm)
        let auth = localStorage.getItem("auth");
        console.log("auth", auth)
        if (auth === "true") {
            navigate("/results")
        }
        else {
            navigate("/")
        }

    }
    useEffect(() => {
        dispatch(fetchAsyncSearch(searchTerm));
    }, [dispatch, searchTerm])

    return (
        <div className='landingContainer'>
            <Header />
            <img src={require("../../assets/googleLogo.png")} alt="google" className='googleLogo' />
            <form className='searchBarDiv' onSubmit={submitHandler}>
                <input type="text" className='searchBar' value={term} onChange={(e) => setterm(e.target.value)} />
                <i className="fa-solid fa-magnifying-glass magGlass Icn"></i>
                <img src={require("../../assets/mic.webp")} alt="icn" className="mic Icn" />
                <img src={require("../../assets/lens.webp")} alt="icn" className="lens Icn" />
            </form>
            <div className='bottomsectionsButtons'>
                <div className='button1'>Google Search</div>
                <div className='button2'>I'm Feeling Lucky</div>
            </div>
            <div className='bottomsectionText'>Google offered in:
                <span>हिन्दी</span>
                <span>বাংলা</span>
                <span>తెలుగు</span>
                <span>मराठी</span>
                <span>தமிழ்</span>
                <span>ગુજરાતી</span>
                <span>ಕನ್ನಡ</span>
                <span>മലയാളം</span>
                <span>ਪੰਜਾਬੀ</span>
            </div>
        </div>
    )
}

export default Landing