import React, { useEffect } from "react";
import YouTube from 'react-youtube';
import './Pages.css';
import Loading from '../Images/Loading.gif';

function Gallery(props) {
    const APP_ID = 'AIzaSyDzUn1AQNLHOX0juCnwOsuHZ5YwvhHBvlU';
    const APP_API = 'https://www.googleapis.com/youtube/v3/playlistItems';
    const PLAYLIST_ID = 'PLbb-XGzKsMeuMUMSTsHGT95PGbeIsvETH'; //public API
    
    const {videos, setVideos} = props;    

    useEffect(() => {
        const abortController = new AbortController();
        const signal = abortController.signal;
        fetch(`${APP_API}?part=snippet&playlistId=${PLAYLIST_ID}&key=${APP_ID}`, {signal : signal})
        .then(res => res.json())
        .then((data) => {
            // console.log("playlist data", data['items']);
            const obj = []
            for(const item in data['items']) {
                obj.push(data['items'][`${item}`]['snippet']['resourceId'][['videoId']]);
            }
            // console.log("data fetched", obj);
            setVideos(obj);
        })
        .catch((e)=>{
            console.log("Err:: ", e);
            setVideos(["none"]);
        });
        return function cleanup(){
            abortController.abort();
        };
    }, []);

    // useEffect(() => {
    //     setTimeout(() => {
    //         // document.getElementById("galleyMenu").click();
    //         setNavSelect("gallery");
    //     }, 1000);
    //     console.log("videos 1234", videos);
    // }, [videos]);    

    return (
        <div className="web-content">
            <h2>Image Gallery</h2>
            <div className="videos">
                {
                    // console.log(videos ? console.log("Here :::", videos) : console.log("nothing here"))
                    videos !== [] & videos !== undefined & videos !== null ?
                    videos.map(video => {
                        // console.log(video);
                        return <div key={'div_'+video}><YouTube key={video} videoId={video} opts={{playerVars: {'origin': 'https://github.io'}}} /></div>
                        // //return <ReactPlayer key={video['videoId']} url={`https://www.youtube.com/watch?v=${video['videoId']}&list=${PLAYLIST_ID}`} />
                        // return <YoutubeEmbed key={video['videoId']} embedId={video['videoId']} title={video['title']} PLAYLIST_ID={PLAYLIST_ID} />
                    }) : <img src={Loading} alt="Loading"/>
                }
            </div>
        </div>
    );    
}

export default Gallery;