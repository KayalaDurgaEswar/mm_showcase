import React from 'react';

export default function YouTubeSlider({ videos = [] }){
  if (!videos || videos.length === 0) return null;
  return (
    <div style={{padding:'12px 0'}}>
      <div className="youtube-row">
        {videos.map((v, idx) => (
          <div className="youtube-item" key={idx}>
            <iframe
              width="320"
              height="180"
              src={v}
              title={`yt-${idx}`}
              frameBorder="0"
              allowFullScreen
              style={{display:'block',width:'100%',height:'100%'}}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
