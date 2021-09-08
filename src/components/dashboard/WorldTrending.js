import React from 'react'

const WorldTrending = ({trendings}) => {




    return (
        <div className="section">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">Trending</span>
            <ul class="collection" style={{margin:'-10px',}}>
                {trendings && trendings.map((result,index) => (
                    <li class="collection-item" key={index}>
                    <a href={result.url} style={{display:'flex',justifyContent:'space-between'}} target="_blank">
                    <span style={{fontSize:'15px'}}>{result.name}</span>
                    <span style={{fontSize:'15px',backgroundColor:'#26a69a',color:'white'}}>{result.tweet_volume}</span>
                    </a></li>
                )).slice(0,4)}
                
            </ul>
            </div>
            </div>
        </div>
        
    )
}

export default WorldTrending
