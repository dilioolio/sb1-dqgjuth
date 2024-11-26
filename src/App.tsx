import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import CPCCalculatorPage from './pages/CPCCalculatorPage';
import CopyButton from './components/shared/CopyButton';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 p-4">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold text-gray-900">
              Marketing Calculator Suite
            </h1>
            <p className="mt-2 text-gray-600">
              Professional tools for digital marketers
            </p>
          </div>
          <div className="flex justify-center">
            <CPCCalculatorPage />
          </div>
          <div className="mt-8 flex flex-col items-center gap-4">
            <p className="text-sm font-medium text-gray-600">
              Want to embed this calculator on your website?
            </p>
            <CopyButton
              textToCopy={`<iframe 
  src="${window.location.origin}/embed/cpc"
  width="100%"
  height="500"
  frameborder="0"
  style="background: transparent;"
></iframe>`}
              label="Copy Embed Code"
            />
          </div>
        </div>
      </div>
    ),
  },
  {
    path: '/embed/cpc',
    element: <CPCCalculatorPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;