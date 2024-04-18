import { useContext } from "react";

import {  ProducersContext } from "@contexts/ProducersContext";

export function useProducers() {
  const context = useContext(ProducersContext);
  
  return context;
}