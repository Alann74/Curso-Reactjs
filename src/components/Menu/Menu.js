import './Menu.css'

function Menu () {
    return (
        <div>
          <main className="page-content">
            <div className="card1">
              <div className="content">
                <img className='foto' alt='foto' src='./images/modelo3.jpg'></img> 
                <h2 className="title">CONJUNTOS</h2>
                <p className="copy">Conjuntos de lino estampados y mucho más...</p>
                <a href=","><button className="btn1" style={{color: 'rgb(255, 255, 255)'}}>+Info</button></a>
              </div>
            </div>
            <div className="card1">
              <div className="content">
                <img className='foto' alt='foto' src='./images/modelo4.jpg'></img> 
                <h2 className="title">SACOS</h2>
                <p className="copy">Sacos de crepe, de lino y mucho más...</p>
                <a href="."><button className="btn1" style={{color: 'rgb(255, 255, 255)'}}>+Info</button></a>
              </div>
            </div>
            <div className="card1">
              <div className="content">
                <img className='foto' alt='foto' src='./images/modelo.jpg'></img> 
                <h2 className="title">NEW NEW NEW</h2>
                <p className="copy">Toda la nueva temporada te espera...</p>
                <a href="."><button className="btn1" style={{color: 'rgb(255, 255, 255)'}}>+Info</button></a>
              </div>
            </div>
          </main>
        </div>
      );
    }

export default Menu