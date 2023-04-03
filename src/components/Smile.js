import React from 'react';
import smile from '../assets/smile.png';
import '../styles/dist/smile.css';

function Smile(){
    return(
        <img className='smile' src={smile} alt='cute smile' />
    )
}
export default Smile;