/*import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import MovieDetail from "../components/MovieDetail";


function Detail() {
    const [details, setDetails] = useState([]);
    const { id } = useParams(); 
    // App.js에 "/movie/:id"로 표기했기 때문에 {id}를 변수명으로 사용.
    const getMovie = async () => {
        const json = await (
        await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        setDetails(json.data.details);
    };
    useEffect(() => {
    getMovie();
    }, []);

    return( 
        <div>
            { 
            details.map((movie) => (
                <MovieDetail
                    key={movie.id}
                    coverIMG={movie.medium_cover_image}
                    year = {movie.year}
                    runtime = {movie.runtime}
                    title = {movie.title}
                    rating = {movie.rating}
                    genres = {movie.genres}
            />))}
        </div>
    );
}

export default Detail;*/

import { useEffect, useState } from "react";
import {useParams} from "react-router-dom"
import styles from "../components/Movie.module.css"
function Detail(){
    const { id } = useParams();
    const [detail,setDetails] = useState([]);
    const [loading,setLoading]=useState(true);
    const getMovie = async () => {
      const json = await (
        await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
      ).json();
    setDetails(json.data.movie);
    setLoading(false);
    
    };
    useEffect(() => {
      getMovie();
    }, []);
        
    return (
        <div className = {styles.Detailcss}>
        {loading 
        ?(<h1>LoadingDetail...</h1>)
        :(<div>
            <h2>{detail.title} ({detail.year}) | ☆ {detail.rating} </h2>
            <img src={detail.large_cover_image}></img>
            <div> runtime: {detail.runtime} mins </div>
            <h4>genres : </h4>
            <ul>
                {detail.genres.map(ge =><li key = {ge}>{ge}</li>)}
            </ul>
            
        </div>)}
        </div>
    );
};
export default Detail;

