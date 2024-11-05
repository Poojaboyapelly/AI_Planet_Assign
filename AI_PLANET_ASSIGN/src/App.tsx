// import React from 'react';
// import OpenAI from 'openai';
// import '@xyflow/react/dist/style.css';
// import {Button} from '@mui/material';
// import { ReactFlow, Background, Controls } from '@xyflow/react';
// import OPEN_AGI_LOGO from './components/imgs/OPENAGI_LOGO.png';
// import drag_n_drop_logo from './components/imgs/drag_n_drop.png';
// import '@xyflow/react/dist/style.css';
 
// const initialNodes = [
//   { id: '1', position: { x: 50, y: 100 }, data: { label: '1' } },
//   { id: '2', position: { x: 100, y: 300 }, data: { label: '2' } },
// ];
// const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }];

// export default function App() {


//   return (
//     <div style={{ width: '100vw', height: '100vh' }}>
//      <div>
//           <img src={OPEN_AGI_LOGO} className="logo react" alt="React logo" />  
       
//         <Button className="bg-success"> 
//             Deploy
//           </Button>
//           <Button>
//            Run
//           </Button>

//      </div>
       
//       <ReactFlow nodes={initialNodes} edges={initialEdges} >
        
//         <Background/>
//         <a >
//           <img src={drag_n_drop_logo} className="logo react" alt="drag_n_drop" />
//         </a>
//         <Controls/>
//         </ReactFlow>
//     </div>
//   );
// }
import React, { useState, useCallback } from 'react';
import OpenAI from 'openai';
import '@xyflow/react/dist/style.css';
import { Button } from '@mui/material';
import { ReactFlow, Background, Controls, addEdge, MiniMap, useEdgesState, useNodesState } from '@xyflow/react';
import OPEN_AGI_LOGO from './components/imgs/OPENAGI_LOGO.png';
import drag_n_drop_logo from './components/imgs/drag_n_drop.png';

const initialNodes = [
  { id: '1', type: 'input', position: { x: 50, y: 100 }, data: { label: 'Input Node' } },
  { id: '2', type: 'llm', position: { x: 50, y: 300 }, data: { label: 'LLM Node' } },
  { id: '3', type: 'output', position: { x: 50, y: 500 }, data: { label: 'Output Node' } },
];

// const initialEdges =  [{ id: 'e1-2', source: '1', target: '2' },{ id:'e2-3',source:'2',target:'3'}];
const initialEdges =  [{}];
export default function App() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback((params: any) => {
    setEdges((eds) => addEdge(params, eds));
  }, []);

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <div>
        <img src={OPEN_AGI_LOGO} className="logo react" alt="React logo" />
        <Button className="bg-success">Deploy</Button>
        <Button>Run</Button>
      </div>
  
        <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
      >
        <Background />
        <MiniMap />
        <Controls />
        {/* <a>
          <img src={drag_n_drop_logo} className="logo react" alt="drag_n_drop" />
        </a> */}


      </ReactFlow>
  
    </div>
  );
}
