import React from 'react'

export default function Player() {
    return (
        <div className='c-main' >
            <div className='c-player' >
                <div className='box-img'>
                    <img src="https://uploads-ssl.webflow.com/6206088de5b0708e27001c97/6394eea1831ce26d9ba448ad_binaural-beats.png" alt="" />

                </div>
                <button class="button-20" role="button" >Binural Beats</button>
                {/* <h4 className='box-title'>Binural Beats</h4> */}
            </div>

            <div className='c-player' >
                <div className='box-img'>
                    <img src="https://www.108.house/wp-content/uploads/2021/11/imagen-blog-saty-mantras-1024x711.jpeg" alt="" />

                </div>
                <button class="button-20" role="button" >Mantras Meditation</button>
                {/* <button className='box-button'>Mantras Meditation</button> */}
                {/* <h4 className='box-title'>Mantras Meditaion</h4> */}
            </div>


        </div>

    )
}