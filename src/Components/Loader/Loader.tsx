import React from 'react'
import LoaderImage from '../../assets/images/BlackLoading.gif';
import './loader.styles.scss';
const Loader : React.FC = () => {
    return (
        <div>
            <img src={LoaderImage} alt="loading-image" className='img-loader' />
        </div>
    )
}

export default Loader;
