import React from 'react'
import CardSlider from './CardSlider';


export default React.memo( function Slider({movies}) {


    const getMoviesFromRanges=(from,to)=>{
        return movies.slice(from,to);
    };
    console.log(movies);
  return (
    <div>
        <CardSlider title="Popular Now" data={getMoviesFromRanges(0,10)}/>
        <CardSlider title="Released Recently" data={getMoviesFromRanges(10,20)}/>
        <CardSlider title="Popular in Pakistan" data={getMoviesFromRanges(20,30)}/>
    </div>
    );
}
)
