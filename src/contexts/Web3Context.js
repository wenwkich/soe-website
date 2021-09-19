import React, { useState } from 'react';
import { ethers } from 'ethers';
import { CHAIN_ID, CONTRACT_ABI, CONTRACT_ADDRESS } from '../constants';

export const Web3Context = React.createContext({});

export const Web3Provider = ({ children }) => {
  const [account, setAccount] = useState();
  const [contract, setContract] = useState();
  const [connected, setConnected] = useState(false);
  const contractAddress = CONTRACT_ADDRESS;
  const contractAbi = CONTRACT_ABI;
  const chainId = CHAIN_ID;

  const connect = async () => {
    if (window.ethereum) {
      await window.ethereum.enable();
      checkEthereumAndInit();
    } else {
      alert(
        "To use this app you'll need metamask or another web3 provider.'"
      );
    }
  };

  const checkEthereumAndInit = async () => {
    if (window.ethereum) {
      if (window.ethereum.isConnected()) {
        initApp();
      }
    }
  };

  const initApp = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const network = await provider.getNetwork();
    // eslint-disable-next-line
    if (network.chainId != chainId) {
      alert("To use this app you need to connect to Ethereum Network");
      return;
    }
    await loadSigner(provider);
    setConnected(true);

    window.ethereum.on('accountsChanged', function (accounts) {
      if (!accounts) return;
      loadSigner(provider);
    });

    window.ethereum.on('chainChanged', function (networkId) {
      // eslint-disable-next-line
      if (networkId != chainId) {
        setConnected(false);
        alert("To use this app you need to connect to Ethereum Network");
        return;
      }
      loadSigner(provider);
      setConnected(true);
    });

    window.ethereum.on('disconnect', function () {
      setConnected(false);
    });
  };

  const loadSigner = async (provider) => {
    try {
      const signer = await provider.getSigner();
      const account = await signer.getAddress();

      const contract = new ethers.Contract(
        contractAddress,
        contractAbi,
        signer
      );
      setAccount(account);
      setContract(contract);
    } catch (e) {
      console.log(e);
    }

  };

  const value = {
    connected,
    contract,
    connect,
    account
  };

  return (
    <Web3Context.Provider value={value}>
      {children}
    </Web3Context.Provider>
  );
}