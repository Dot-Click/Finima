import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Router from "./routers/Router";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { me } from "./redux/slices/auth/thunks";

function App() {
  const dispatch = useDispatch();
  const foo = async () => {
    dispatch(me());
    // const res2 = await custAxios.get("/auth/me");
  };
  useEffect(() => {
    foo();
  }, []);
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App;
