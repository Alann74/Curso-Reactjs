import Blusas from "../Product/Blusas";

const BlusasList = ( {blusas} ) => {
    return (
        <div style={{ display: 'flex' }}>
        { 
            blusas.map(blusas => (
                <Blusas key={blusas.id} blusa={blusas}/>                )) 
        } 
    </div>
    )
}

export default BlusasList