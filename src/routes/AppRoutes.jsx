import { Routes, Route, Link, Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { SignUp } from "../users/SignUp";
import { SignIn } from "../users/SignIn";
import { Videos } from "../videos/Videos";
import { VideosForm } from "../videos/VideosForm";
import { VideoShow } from "../videos/VideoShow";
import { Profile } from "../users/Profile";
import { Home } from '../Home';

const NotImplemented = () => {
  return (
    <>
      <Link to="/videos"> Ir a Videos </Link>{" "}
      <h1> Página aún en desarrollo </h1>
    </>
  );
};

const Page404 = () => {
  return (
    <>
      <Link to="/"> Ir al Inicio </Link> <h1> Pagina no Existe! </h1>
    </>
  );
};

export const AppRoutes = () => {
  const user = useSelector((state) => state.user.user);

  console.log(user)
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/videos" />} />

      <Route path="/usuario" element={user ? <Navigate to="/videos" /> : <Outlet />} >
        <Route path="signup" element={<SignUp />} />
        <Route path="signin" element={<SignIn />} />
      </Route>

      <Route path="" element={user ? <Outlet /> : <Navigate to="/usuario/signin" />} >

        <Route path="/usuario/perfil" element={<Profile />} />
        <Route path="/usuario/:id/videos" element={<NotImplemented />} />

        <Route path="/videos">
          <Route path="" element={<Videos />} />
          <Route path="nuevo" element={<VideosForm />} />
          <Route path=":id" element={<VideoShow />} />
        </Route>
      </Route>

      <Route path="*" element={<Page404 />} />
    </Routes>
  );
};
