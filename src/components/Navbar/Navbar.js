import './Navbar.css'

// el Navbar empieza si o si con mayúscula.
const Navbar = () => {
    return (
        <nav className='navbar'> 
            <h1 style={{color:'red'}}>MyApp</h1>
            <button className='btn'>boton 1</button >
            <button className='btn'>boton 1</button >
        </nav>
    )
}

export default Navbar //hay q exportar al archivo App.js
