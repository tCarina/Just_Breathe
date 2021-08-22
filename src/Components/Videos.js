import NavBar from "./Navbar";
import axios from "axios";
import { useState, useEffect } from "react";
import "../Styles/videos.css"


export default function Videos() {
    const [videos, setVideos] = useState([]);

    const getYouTube = async (selectedVideoType) => {
        let url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=9&q=${selectedVideoType}&type=video&key=${process.env.REACT_APP_API_KEY}`

        try {
            const res = await axios.get(url);
            setVideos(res.data.items);
            debugger
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getYouTube("Anxiety Information")
    }, [])

    const selectVideoType = (e) => {
        getYouTube(e.target.value)
    }


    return (<div><NavBar />
        <div className="videos-body">
            <div className="select-wrapper">
                <select className="select-video-type" defaultValue={'Search'} onChange={selectVideoType}>
                    <option value="Anxiety Information">General Anxiety Information</option>
                    <option value="helping someone with Anxiety">Helping someone with Anxiety</option>
                    <option value="Handling Panic Attack">How to deal with panic attacks</option>
                </select>
            </div>

            <ul className="videoList">
                {videos.map(video => <div className="li-video">
                    {<iframe title='youtubeVideo' className="iframe-video"
                        src={`https://www.youtube.com/embed/${video.id.videoId}`}>
                    </iframe>}
                    {/* <h5>{video.snippet.title}</h5> */}
                </div>)}
            </ul>


        </div>
    </div>)
}