import React from 'react';
import './Academic.css';
import CMich from './images/CMICH.jpg';
import BITS from './images/bits.jpg';

function Academic()
{
  return(
    <div className="Academic" id="academic">
      <div class="academicHeader">
        <h2 align="center">Academics</h2>
      </div>
      <div class="academicContent">
        <div class="academicBx">
          <img src={CMich}/>
          <h3>CMU - Masters in Computer Science</h3>
          <p>
            Completed Masters degree in Computer Science in August 2021. Dedicated
            &nbsp; individual with High Performance in theory and practical fields of
            &nbsp; computer industry. Attained 98.25% grade in CMU masters.
          </p>
        </div>
        <div class="academicBx">
          <img src={BITS}/>
          <h3>BITS Pilani Alumni</h3>
          <p>
            Graduated in Bachelors Degree with a Pass. And, bagged BOSM'16 Medals,   
            &nbsp; Winner of Nationals IT Olympiad Competition. With all extensive curriculum,
            &nbsp; never lost hope of basic foundational subjects. Freelanced, Studied, Participated,
            &nbsp; and Ruled Software Technology with Required Courses. Because of like in physics, 
            &nbsp; able to manage all courses with credit based system. Hope to be a better person,
            &nbsp; and giving my best for it.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Academic;
