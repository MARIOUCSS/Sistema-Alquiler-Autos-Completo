import { useContext } from "react";
//import axios from "axios";
import { dummyCars } from "../assets/data";
import { Contextu } from "./ContextU";
//export const Context = createContext();
import PropTypes from "prop-types";
export const useGlobalState = () => {
  const context = useContext(Contextu);
  return context;
};
export const GlobarProvider = (props) => {
  const value = { dummyCars };
  return <Contextu.Provider value={value}>{props.children}</Contextu.Provider>;
};
GlobarProvider.propTypes = {
  children: PropTypes.node.isRequired, // Valida que children sea un nodo de React y sea obligatorio
};
