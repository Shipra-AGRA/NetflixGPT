import ReactDOM from 'react-dom/client'
import Body from './components/Body'
import { Provider } from 'react-redux'
import appStore from './utils/appStore'

const App = () => {
    return (
        <Provider store={appStore}>
            <Body />
        </Provider>
    )
}
export default App

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App />)