import React from 'react';


const fname = 'Netflix';
const lname = 'App';
const heading = {
    textAlign: 'center',
    color: 'darkGreen',
    textShadow: '0px 2px 4px red',
    margin: '40px',
    fontFamily: '"Smooch", cursive'
};
const Headin = ()=>{
    return(
        <h1 style={heading}>{`This is a chanel is ${fname} ${lname}`}</h1>
    );
}
export default Headin;