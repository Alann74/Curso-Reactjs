
const blusas = [
    {
        id: '1',
        title: 'Blusa lino',
        precio: '4000',
        imagen: '/public/images/blusa colorida.jpeg'
    },
    {
        id: '2',
        title: 'Blusa estampada fibrana',
        precio: '5000',
        imagen: 'https://http2.mlstatic.com/D_NQ_NP_767547-MLA52539002944_112022-W.jpg'
    },
    {
        id: '3',
        title: 'Blusa estampada lino',
        precio: '4500',
        imagen: '#'
    },
    {
        id: '4',
        title: 'Blusa de lino acebrada',
        precio: '4500',
        imagen: '#'
    },
    {
      id: '5',
      title: 'Blusa lino c/boton',
      precio: '6000',
      imagen: '#'
    },
    {
      id: '6',
      title: 'Blusa fibrana estampada',
      precio: '3500',
      imagen: '/public/images/blusa colorida.jpeg'
    },
    
  ];
export const getBlusas = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(blusas)
      }, 2000)
    })
}

export const getBlusasById = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(blusas.find(blusa => blusa.id === id))
    }, 500)
})
}
