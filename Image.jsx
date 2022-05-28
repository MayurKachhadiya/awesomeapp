import React from 'react';

const img1 = 'https://picsum.photos/200/300.jpg';
const img2 = 'https://picsum.photos/240/300.jpg';
const img3 = 'https://picsum.photos/280/300.jpg';
const img4 = 'https://picsum.photos/320/300.jpg';

const Image = ()=>{
    return(
        <div className='div_img'>
        <img src={img1} alt='Ready image'></img>
        <img src={img2} alt='Ready image'></img>
        <img src={img3} alt='Ready image'></img>
        <img src={img4} alt='Ready image'></img>
        </div>
    );
}
export default Image;