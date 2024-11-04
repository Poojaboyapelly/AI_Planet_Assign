import React from 'react';
import '@xyflow/react/dist/style.css';
import { ReactFlow, Background, Controls } from '@xyflow/react';
import OPEN_AGI_LOGO from './components/imgs/OPENAGI_LOGO.png';
import drag_n_drop_logo from './components/imgs/drag_n_drop.png';
 
import '@xyflow/react/dist/style.css';
 
const initialNodes = [
  { id: '1', position: { x: 50, y: 100 }, data: { label: '1' } },
  { id: '2', position: { x: 100, y: 300 }, data: { label: '2' } },
];
const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }];
 
export default function App() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
     <div >
     <a href="https://react.dev" target="_blank">
          <img src={OPEN_AGI_LOGO} className="logo react" alt="React logo" />
        </a>

     </div>
       
      <ReactFlow nodes={initialNodes} edges={initialEdges} >
        
        <Background/>
        <a >
          <img src={drag_n_drop_logo} className="logo react" alt="drag_n_drop" />
        </a>
        <Controls/>
        </ReactFlow>
    </div>
  );
}
