import React from "react";
import preloader from '../../assets/images/preloader.gif'

let Preloader = () => {
    return (
        <div>
            <img src={preloader} alt={'some alt'} style={{width: 100}}/>
        </div>
    )
};

export default Preloader;