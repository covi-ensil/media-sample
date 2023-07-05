import React, { useRef } from 'react';

function SourceComponent() {
  const divRef = useRef(null);

  const handleMoveDiv = () => {
    const targetComponent = document.getElementById('targetComponent');
    targetComponent.appendChild(divRef.current);
  };

  return (
    <div>
      <button onClick={handleMoveDiv}>div 옮기기</button>
      <div className='change' ref={divRef}>111 div</div>
    </div>
  );
}

function TargetComponent() {
  return (
    <div id="targetComponent">
      {/* 여기에 옮길 div가 추가됩니다 */}
      <div>
        woww
      </div>
    </div>
  );
}

function App() {
  return (
    <div>
      <SourceComponent />
      <TargetComponent />
    </div>
  );
}

export default App;