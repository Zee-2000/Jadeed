import { createRoot } from 'react-dom/client'
import './index.css'
import App from "./App"
import{store, persister} from "../src/Redux/store"
import { PersistGate } from 'redux-persist/integration/react'
createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate loading={null} persister={persister}>
      <App/>
    </PersistGate>
  </Provider>  

)
 