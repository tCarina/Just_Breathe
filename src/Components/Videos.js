import NavBar from "./Navbar";
import axios from "axios";
import {useState, useEffect} from "react";
import "../Styles/videos.css"


export default function Videos(){
    const [videos, setVideos] = useState([]);

    const getYouTube = async (selectedVideoType) => {
        let url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${selectedVideoType}&type=video&key=${process.env.REACT_APP_API_KEY}`
        
        try {
            const res = await axios.get(url);
            setVideos(res.data.items);
            debugger
        } catch (error) {
            console.log(error)
        }
    }

    const selectVideoType = (e)=>{
        getYouTube(e.target.value)
    }


    return(<div><NavBar />
    <select className="select-video-type" defaultValue={''} onChange={selectVideoType}>
        <option disabled></option>
        <option value="Anxiety Information">General Anxiety Information</option>
        <option value="helping someone with Anxiety">Helping someone with Anxiety</option>
        <option value="Handling Panic Attack">How to deal with panic attacks</option>

    </select>

    <ul className="videoList">
                {videos.map(video => <li>
                    <img className="video-thumbnail" src={video.snippet.thumbnails.default.url} alt={video.snippet.title} />
                    <h3>{video.snippet.title}</h3>
                </li>)}
            </ul>



    </div>)
}