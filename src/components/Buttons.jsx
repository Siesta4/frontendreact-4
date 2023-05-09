import refresh from '../img/refresh.png'

function Buttons() {
    return (
      <div className="buttons">
        <button className='button__plus'>+</button>
        <button className='button__refresh'><img src={refresh} alt="" className='refresh'/></button>
        <button className='button__minus'>-</button>
      </div>
    );
  }
  
  export default Buttons;