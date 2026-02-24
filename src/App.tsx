import { ProfileGrid } from './components/ProfileGrid'
import { Dialog } from './components/Dialog'

function App() {
  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center overflow-hidden -z-10">
        <ProfileGrid />
      </div>
      <div className="min-h-screen flex items-center justify-center py-8">
        <Dialog />
      </div>
    </>
  )
}

export default App
