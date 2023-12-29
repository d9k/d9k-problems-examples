import { Navigate, Outlet, Route, Routes, useLocation } from 'react-router-dom';
import useAsset from "ultra/hooks/use-asset.js";
import React, { useEffect, useState } from "react";

const PageHome = React.lazy(() => import('./pages/home.tsx'));
const PageDemo = React.lazy(() => import('./pages/demo.tsx'));
const PageNestedDemo = React.lazy(() => import('./pages/nested-demo.tsx'));

export default function App() {
  const [testVar, setTestVar] = useState(100);

  console.log(testVar);

  useEffect(() => {
    setTestVar((x: number) => x + 100)
  }, [])

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>Ultra</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href={useAsset("/favicon.ico")} />
        <link rel="stylesheet" href={useAsset("/style.css")} />
      </head>
      <body>
        <main>
          <div className="menu">
            <a href="/">Home</a>
            <a href="/demo">Demo</a>
            <a href="/nested/demo">NestedDemo</a>
          </div>
        <Routes>
          <Route
            path='/'
            element={<PageHome />}
          />
          <Route
            path='/demo'
            element={<PageDemo />}
          />
          <Route
            path='/nested/demo'
            element={<PageNestedDemo />}
          />
        </Routes>
        </main>
      </body>
    </html>
  );
}
