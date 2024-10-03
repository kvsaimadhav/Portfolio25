import React from 'react';
import './Home.css';
import Photo from './images/Photo.jpg';

function Home()
{
  return(
    <div className="Home" id="home">
      <table className="table">
       <tr>
        <td className="image">
          <img src={Photo}/>
        </td>
        <td className="para">
          <p>
            <b>Hi</b>, <i>Sai Madhav</i> .... <br/>
            <i>Software Engineer</i> with Keen Interest in <b>Web Development</b> .... <br/>
            You can reach out to me via <a href="https://www.linkedin.com/in/smadhavkv96/" rel="no-opener no-referrer" target="_blank">LinkedIn</a> 
            &nbsp; <i>or</i> &nbsp; <a href="https://github.com/kvsaimadhav" rel="no-opener no-referrer" target="_blank">Github</a>
          </p>
        </td>
        </tr>
      </table>
    </div>
  );
}

export default Home;
