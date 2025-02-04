import { createRoot } from 'react-dom/client'
import App from "./App"
import { PersistGate } from 'redux-persist/integration/react'
createRoot(document.getElementById('root')).render(
  <App/> 

)
 