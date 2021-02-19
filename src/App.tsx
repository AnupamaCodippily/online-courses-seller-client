import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'
import Landing from './components/pages/Landing';
import AuthRoute from './components/AuthRoutes/AuthRoute';
import Admin from './components/admin'
import Footer from './components/layouts/Footer'
import Browse from './components/pages/Browse';
import CourseHome from './components/pages/course/CourseHome';
function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Route path='/' exact component={Landing} />
            <Route path='/courses' exact component={Browse} />
            <Route path='/course/:id' component={CourseHome} />
            <AuthRoute path='/admin' component={Admin} />
            <Footer/>
        </BrowserRouter>
    </div>
  );
}

export default App;
