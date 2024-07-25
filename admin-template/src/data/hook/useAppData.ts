import { useContext } from "react";
import AppContext from "../context/AppContext";

const useAppdata = () => useContext(AppContext)

export default useAppdata