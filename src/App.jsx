import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import Navigation from './components/Navigation.jsx';
import SignIn, {action as loginInfo} from './components/SignIn.jsx';
import Register, {action as userData} from './components/Register.jsx';
import {action as deleteUserAction} from './components/DeleteUser.jsx';
import About from './components/About.jsx';
import PrivacyPolicy from './components/PrivacyPolicy.jsx';
import Disclaimers from './components/Disclaimers.jsx';
import {action as LogoutAction} from './components/Logout.jsx';
import SavedJobs from './components/SavedJobs.jsx';
import Layout from './components/Layout.jsx';
import {tokenLoader} from './util/auth.js'
import PasswordReset from './components/PasswordReset.jsx';
import {action as PassworResetAction} from './components/PasswordReset.jsx';



const router = createBrowserRouter([
  {
    path: '/', 
    element: <Layout />,
    id: 'root',
    loader: tokenLoader,
    children: [
      {path: '/', element: <Navigation />},
      {path: '/about', element: <About />},
      {path: '/signin', element: <SignIn />, action: loginInfo},
      {path: '/register', element: <Register />, action: userData },
      {path: '/deleteUser', action: deleteUserAction },
      {path: '/privacypolicies', element: <PrivacyPolicy />},
      {path: '/disclaimers', element: <Disclaimers />},
      {path: '/logout', action: LogoutAction},
      {path: '/savedjobs', element: <SavedJobs />},
      {path: '/forgotpassword', element: <PasswordReset />, action: PassworResetAction}
    ]
  },
  
])


function App() {
  return (
    <>
    <RouterProvider router={router} />
  </>
  ) 
   
}

export default App
