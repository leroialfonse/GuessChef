import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCow } from '@fortawesome/free-solid-svg-icons';
import { faBacon } from '@fortawesome/free-solid-svg-icons'
export default function MeatButton() {
  return (
    <div meat-card>
      <FontAwesomeIcon onClick={toggle} icon={faCow} size="6x" />
      {/* <h3>Mr. Whiskerson</h3> */}
      {/* <div className="info-group">
                  <img src="./images/phone-icon.png" alt="phone" />
                  <p>(212) 555-1234</p>
              </div>
              <div className="info-group">
                  <img src="./images/mail-icon.png" alt="email" />
                  <p>mr.whiskaz@catnap.meow</p>
              </div> */}
      {/* <button onClick={toggle} className='meatButton' >I'm a  meatButton button</button> */}
    </div>
  );
}


function toggle() {
  alert('Selected!')
}
