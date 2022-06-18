import WalletConnectProvider from '@walletconnect/ethereum-provider';

export const WEB3_MODAL_CONFIG = {
  providerOptions: {
    walletconnect: {
      package: WalletConnectProvider,
      options: {
        infuraId: process.env.REACT_APP_INFURA_KEY,
      },
    },
  },
};
