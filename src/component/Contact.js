import React from 'react';
import './Contact.css';

function Contact()
{
  return(
    <div className="Contact" id="contact">
        <div className="contactCard">
          <h2>Contact Me</h2>
          <p><i>Hey, there ... <br/>
            Please, connect with me on
            <b><a href="https://www.linkedin.com/in/madhav-kaza-7702596857k/" rel="no-opener no-referrer" target="_blank">Linkedin</a></b>
            and follow professional work on
            <b><a href="https://github.com/kvsaimadhav" rel="no-opener no-referrer" target="_blank">GitHub</a></b></i>
          </p>
        </div>
        <table className="contactTb">
          <tr>
            <td valign="bottom">
              <div className="contactInfo">
                <h3>Contact Info</h3>
                <div class="contactInfoBx">
                   <div class="box">
                      <div class="text">
                         <h3>Address</h3>
                         <p>DRDL Kanchanbagh, Hyderabad, TS - 500058</p>
                      </div>
                   </div>
                   <div class="box">
                      <div class="text">
                         <h3>Phone</h3>
                         <p>+91-8331065200</p>
                      </div>
                   </div>
                   <div class="box">
                      <div class="text">
                         <h3>Email</h3>
                         <p>kvsaimadhav@gmail.com</p>
                      </div>
                   </div>
                </div>
              </div>
          </td>
          <td>
          <div className="formBx">
            <form>
             <input type="text" name="firstName" placeholder="First Name"/><br/>
             <input type="text" name="lastName" placeholder="Last Name"/><br/>
             <input type="Email" name="email" placeholder="Email Address"/><br/>
             <input type="text" name="phone" placeholder="Contact Number"/><br/>
             <textarea placeholder="Your Message"/><br/>
             <input type="submit" name="send" value="Send"/>
             </form>
            </div>
          </td>
         </tr>
        </table>
    </div>
  );
}

export default Contact;
