import React from 'react'

const Errpage = () => {
    const image = 'https://www.pngitem.com/pimgs/m/254-2549834_404-page-not-found-404-not-found-png.png'
    return (
        <div style={{ display: 'flex', justifyContent: 'center', textAlign: 'center' }}>
            <div>
                <img src={image} />
                <p style={{ textAlign: "center" }}>
                    <a href="/" style={{color:'blue',textDecoration:'none', cursor:'pointer'}} ><h1>Go to Home Page</h1></a>
                </p>
            </div>
        </div>
    )
}

export default Errpage
