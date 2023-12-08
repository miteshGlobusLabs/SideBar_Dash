


// // src/App.js
// import React from 'react';
// import { Routes, Route, useLocation } from 'react-router-dom';
// import Header from './Header';
// import Sidebar from './Sidebar';
// import MainRoutes from './routes/mainRoutes';
// import AuthRoutes from './routes/authRoutes';

// function App() {
//   const location = useLocation();
//   const isLoginPage = location.pathname === '/auth/login';
//   const isRegistration = location.pathname === '/auth/register';

//   return (
//     <div>
//       {(!isLoginPage && !isRegistration) && <Header />}
//       {(!isLoginPage && !isRegistration) && (
//         <div style={{ display: 'flex' }}>
//           <Sidebar />
//           <div>
//             <Routes>
//               {/* Main Routes */}
//               <Route path="/" element={<MainRoutes />} />
//             </Routes>
//           </div>
//         </div>
//       )}
//       <Routes>
//         <Route path="/auth/*" element={<AuthRoutes />} />
//       </Routes>
//     </div>
//   );
// }

// export default App;




import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
import MainRoutes from './routes/mainRoutes';
import AuthRoutes from './routes/authRoutes';

function App() {
  const location = useLocation();
  const isLoginPage = location.pathname === '/auth/login';
  const isRegistration = location.pathname === '/auth/register';
  const shouldRenderHeaderAndSidebar = !isLoginPage && !isRegistration;

  return (
    <div>
      {shouldRenderHeaderAndSidebar && (
        <>
          <Header />
          <div style={{ display: 'flex' }}>
            <Sidebar />
            <div>
              <Routes>
                {/* Main Routes */}
                <Route path="/" element={<MainRoutes />} />
              </Routes>
            </div>
          </div>
        </>
      )}
      <Routes>
        <Route path="/auth/*" element={<AuthRoutes />} />
      </Routes>
    </div>
  );
}
 export default App;





