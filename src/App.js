import ReactDOM from 'react-dom/client'
import Body from './components/Body'

const App = () => {
    return (
        <Body />
    )
}
export default App

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App />)