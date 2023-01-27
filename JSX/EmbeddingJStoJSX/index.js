
function getMood(){  
    const moods = ['Angy','Hungy','Silly','Quiet','Paranoid'];
    const randomIndex = Math.floor(Math.random() * moods.length)
    return moods[randomIndex]
}
class JSXDemo extends React.Component {
    render(){
        return(
            <div> 
                <h1>my number is{getMood()} </h1>
            </div>
        )
    }
}

ReactDOM.render(<JSXDemo/>, document.getElementById('root'))