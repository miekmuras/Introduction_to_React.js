import React from 'react';

const VideoDetail = ({video}) => {
    //@dev: check if video NOT provided
    if(!video) {
        return <div>Loading...</div>;
    }

    const videoID = video.id.videoID;
    const url = `https://www.youtube.com/embed/${videoID}`;

    return (
        <div className="video-detail col-md-8">

            <div className="embed-responsive embed-responsive-16by9">
            <iframe className="embed-responsive-item" src={url}></iframe>                
            </div>

            <div className="details"></div>
            <div>{video.snippet.title}</div>                             
            <div>{video.snippet.description}</div>

        </div>
    );
};

export default VideoDetail;
