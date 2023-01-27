function GetNum(){
    return Math.floor(Math.random()*10) +1;

}


class RandomPicker extends React.Component {
    render(){
        const num = GetNum()
        return(
            <div> 
                <h1>Seu numero é  {num}</h1>
                <p>{num ===7? 'Voce ganhou' : 'Você perdeu'} </p>

            </div>
        )
    }
}
