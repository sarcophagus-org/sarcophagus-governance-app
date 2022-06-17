import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

import { supportedChains } from '../chains';

const useListeners = (
  web3Modal,
  connectDefaultProvider,
  connect
) => {
  const [modalProvider, setModalProvider] = useState(null);

  useEffect(() => {
    // subscribe to connect events
    web3Modal.on('connect', _modalProvider => {
      // check that connected chain is supported
      if (!supportedChains().includes(parseInt(_modalProvider.chainId))) {
        toast(`Switch to a supported chain: ${supportedChains().join(', ')}`, {
          toastId: 'switchChain',
        });
        // switch to a default provider
        connectDefaultProvider();
      } else {
        setModalProvider(_modalProvider);
        toast('Connected', { toastId: 'connected' });
      }
    });
  }, [web3Modal, connectDefaultProvider]);

  useEffect(() => {
    if (!modalProvider) return;

    // subscribe to chain events
    modalProvider.on('chainChanged', (chainId) => {
      if (!supportedChains().includes(parseInt(chainId))) {
        // check that connected chain is supported
        toast(`Chain changed: Switch to a supported chain: ${supportedChains().join(', ')}`, {
          toastId: 'switchChain',
        });
        // switch to a default provider
        connectDefaultProvider();
      } else {
        toast(`Chain changed: ${chainId}`, {
          toastId: 'connected',
        });
        connect();
      }
    });

    // subscribe to account change events
    modalProvider.on('accountsChanged', (accounts) => {
      if (!accounts.length) {
        toast('Account access revoked', { toastId: 'accessChanged' });
        // switch to a default provider
        connectDefaultProvider();
        // remove listeners
        setModalProvider(null);
      } else {
        toast('Account changed', { toastId: 'connected' });
        connect();
      }
    });

    // subscribe to provider disconnection
    modalProvider.on('disconnect', () => {
      toast('Account disconnected', { toastId: 'disconnected' });
      // switch to a default provider
      connectDefaultProvider();
      // remove listeners
      setModalProvider(null);
    });

    // unsubscribe
    return () => {
      modalProvider.removeAllListeners();
    };
  }, [modalProvider, web3Modal, connectDefaultProvider, connect]);
};

export { useListeners };
