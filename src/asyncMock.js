
const Blusas = [
    {
        id: '1',
        nombre: 'Blusa lino',
        precio: '4000',
        imagen: '/public/images/blusa colorida.jpeg'
    },
    {
        id: '2',
        nombre: 'Blusa estampada fibrana',
        precio: '5000',
        imagen: 'https://http2.mlstatic.com/D_NQ_NP_767547-MLA52539002944_112022-W.jpg'
    },
    {
        id: '3',
        nombre: 'Blusa estampada lino',
        precio: '4500',
        imagen: '#'
    },
    {
        id: '4',
        nombre: 'Blusa de lino acebrada',
        precio: '4500',
        imagen: '#'
    },
    {
      id: '5',
      nombre: 'Blusa lino c/boton',
      precio: '6000',
      imagen: '#'
    },
    {
      id: '6',
      nombre: 'Blusa fibrana estampada',
      precio: '3500',
      imagen: '#'
    },
    
  ];
export const getBlusas = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(Blusas)
      }, 2000)
    })
}

export const getBlusasById = () => {

}
// perfect