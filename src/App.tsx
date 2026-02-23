import './App.css'
import { ProfileGrid } from './components/ProfileGrid'
import { Dialog } from './components/Dialog'

function App() {
  return (
    <div className="relative h-screen overflow-hidden flex items-center justify-center">
      <ProfileGrid />
      <Dialog />
    </div>
  )
}

export default App
