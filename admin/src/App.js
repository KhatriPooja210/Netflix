import Sidebar from "./components/sidebar/Sidebar.jsx";
import Topbar from "./components/topbar/Topbar.jsx";
import "./app.css";
import Home from "./pages/home/Home.jsx";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import UserList from "./pages/userList/UserList.jsx";
import User from "./pages/user/User.jsx";
import NewUser from "./pages/newUser/NewUser.jsx";
import Login from "./pages/login/Login.jsx";
import { AuthContext } from "./context/authContext/AuthContext.js";
import { useContext } from "react";
import ListList from "./pages/listList/ListList.jsx";
import List from "./pages/list/List.jsx";
import NewList from "./pages/newList/NewList.jsx";
import MovieList from "./pages/movieList/MovieList.jsx";
import Movie from "./pages/movie/Movie.jsx";
import NewMovie from "./pages/newMovie/NewMovie.jsx";

function App() {
  const { user } = useContext(AuthContext);
  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/login"
          // element={user ? <Navigate to="/" /> : <Login />}
          element={<Login/>}
        />
      </Routes>
      {user && (
        <>
          <Topbar />
          <div className="container">
            <Sidebar />
            <Routes>
              <Route exact path="/" element={<Home />} />

              <Route exact path="/users" element={<UserList />} />

              <Route exact path="/user/:userId" element={<User />} />

              <Route exact path="/newUser" element={<NewUser />} />

              <Route exact path="/movies" element={<MovieList />} />

              <Route exact path="/movie/:movieId" element={<Movie />} />

              <Route exact path="/newMovie" element={<NewMovie />} />

              <Route exact path="/lists" element={<ListList />} />

              <Route exact path="/list/:listId" element={<List />} />

              <Route exact path="/newlist" element={<NewList />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </div>
        </>
      )}
    </Router>
  );
}

export default App;
