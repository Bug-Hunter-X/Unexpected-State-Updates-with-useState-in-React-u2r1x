```javascript
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This effect runs on every render, including initial render
    console.log('Count:', count);
  }, [count]); // Only re-run the effect if 'count' changes

  const handleClick = () => {
    setCount(count + 1);
    setCount(count + 1); // This line causes the unexpected behavior
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}

export default MyComponent;
```