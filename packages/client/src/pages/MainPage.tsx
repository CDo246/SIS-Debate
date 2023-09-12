import { useState } from "react";
import { trpc } from "../utils/trpc";

export function MainPage() {
  const [count, setCount] = useState(0);

  const hello = trpc.greeting.useQuery();

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank"></a>
        <a href="https://react.dev" target="_blank"></a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs bg-red-600">
        Click on the Vite and React logos to learn more
      </p>
      <p>{hello.data}</p>
    </>
  );
}