class App extends React.Component {
    render(){
        return(
        <div>
            <Hello/>
            <RandomPicker/>
        </div>
        )
    }
}
ReactDOM.render(<App/>, document.getElementById('root'))