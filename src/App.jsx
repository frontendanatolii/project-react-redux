import { useDispatch, useSelector } from "react-redux";
import Bugs from "./components/Bugs";
import { useEffect } from "react";
import { setIsLoading } from "./store/Bugs";
import { loading } from "./store/selectors";

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(loading);

  useEffect(() => {
    dispatch(setIsLoading({loading: true}));

    const timer = setTimeout(() => dispatch(setIsLoading({loading: false})), 3000);

    return () => clearTimeout(timer);
  }, [dispatch])


  return (
    <>
      {isLoading ? <p>Loading...</p> : <Bugs />}
    </>
  );
}

export default App;
