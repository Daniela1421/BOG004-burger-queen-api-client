import Logout from "../components/Logout";
import Restaurant from "../components/Restaurant";

export default function Waiter() {
  return (
      <div className='waiter'>
        <header className="header">
        <div className="menu">
          <button className='input-buttons' id="breakfast"/*onClick={handleClick}*/>BREAKFAST</button>
          <button className='input-buttons' id="today-menu"/*onClick={handleClick}*/>TODAY'S MENU</button>
        </div>
        <Restaurant/>
        <Logout/>
        </header>
        <section>
          <div className="info">
            <ul>
              <li>CLIENT</li>
              <li>PRODUCT</li>
              <li>AMOUNT</li>
            </ul>
          </div>
          <div>
          <input className='user-name' type="text" placeholder="Enter customer name"/*value={email} onChange={(e) => { setEmail(e.target.value);}}*/ />
          </div>
        </section>
        <section>
          <div className="resume">
              <ul>
                <li>RESUME</li>
                <li>PRICE</li>
              </ul>
          </div>
          <div>
          <input className='user-name' type="text" placeholder="Products"/*value={email} onChange={(e) => { setEmail(e.target.value);}}*/ />
          </div>
        </section>
        <section className="send-cancel">
          <button className='input-buttons' /*onClick={handleClick}*/>SEND</button>
          <button className='input-buttons' /*onClick={handleClick}*/>CANCEL</button>
        </section>
    </div>
  )
}
