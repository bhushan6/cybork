import './App.css';
import { Canvas } from '@react-three/fiber'


function App() {
  return (
    <div className="App">
      <Canvas>
        <ambientLight intensity={0.5} />
      </Canvas>
    </div>
  );
}

export default App;
