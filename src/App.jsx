import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import Navigation from './components/Navigation.jsx';
import SignIn, {action as loginInfo} from './components/SignIn.jsx';
import Register, {action as userData} from './components/Register.jsx';
import About from './components/About.jsx';
import PrivacyPolicy from './components/PrivacyPolicy.jsx';
import Disclaimers from './components/Disclaimers.jsx';
import {action as LogoutAction} from './components/Logout.jsx';
import SavedJobs from './components/SavedJobs.jsx';

const router = createBrowserRouter([
  {path: '/', element: <Navigation />},
  {path: '/about', element: <About />},
  {path: '/signin', element: <SignIn />, action: loginInfo},
  {path: '/register', element: <Register />, action: userData },
  {path: '/privacypolicies', element: <PrivacyPolicy />},
  {path: '/disclaimers', element: <Disclaimers />},
  {path: '/logout', action: LogoutAction},
  {path: '/savedjobs', element: <SavedJobs />, loader: () => {
    fetch(`http://localhost:4000/savedjobs`)
    .then((res) => {
       if(!res.ok) throw new Error()
       return res.json()
       })
    .then((data) => {
       if (data.length === 0) throw new Error("You don't have any saved Jobs")
    })
    .catch(err => setError(err.message))
  } }

])

function App() {
  return <>
    <RouterProvider router={router} />
  </>
   
}

export default App
