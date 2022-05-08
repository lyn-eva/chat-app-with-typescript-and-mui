import { lazy, Suspense } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
const SignIn = lazy(() => import('./pages/SignIn'));
const Home = lazy(() => import('./pages/Home'));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<p className='fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>loading ...</p>}>
        <Routes>
          <Route path='signin' element={<SignIn />}></Route>
          <Route path='/' element={<Home />}></Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
