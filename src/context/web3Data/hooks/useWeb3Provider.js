import { createContext, useContext } from 'react';

export const Web3ProviderContext = createContext(null);

export const useWeb3Provider = () => useContext(Web3ProviderContext);
