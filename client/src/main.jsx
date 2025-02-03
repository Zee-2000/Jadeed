import { createRoot } from 'react-dom/client'
import './index.css'
import App from "./App"
import{store, presister} from "../src/Redux/store"
import { PersistGate } from 'redux-persist/integration/react'
createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate loading={null} presister={presister}>
      <App/>
    </PersistGate>
  </Provider>  

)
 