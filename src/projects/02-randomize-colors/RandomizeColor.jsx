import React from 'react'
import Title from '../components/Title'

export default function RandomizeColor() {
    const handleClick = (e) => {
        console.log(e.target.style.backgroudColor);
        let body = document.querySelector("body");
        body.style.background = getRandomColor();
        e.target.style.backgroudColor = getRandomColor();
    }

    function getRandomColor() {
        let letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];   
        }
        return color;
    }
  return (
    <div className='container m-auto text-center'>
      <Title text={"Randomize Color"} classes={"mb-4"}/>
      <button className='btn btn-primary' onClick={handleClick}>Click me</button>
    </div>
  )
}
