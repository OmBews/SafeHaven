import { serializeTokens } from "./tokens";

const serializedTokens = serializeTokens();

const pools = [
  {
    pid: 2,
    lpSymbol: "WBNB-BUSD LP",
    lpAddresses: {
      97: "",
      56: "0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16",
    },
    token: serializedTokens.wbnb,
    quoteToken: serializedTokens.busd,
    strat: "0x535AD88658FD3cC0dD7307aDb202c20874eb5DCC",
  },
  {
    pid: 19,
    stakeSymbol: "SLT",
    lpAddresses: {
      97: "",
      56: "0x2d823FcB0a3Fd67a2c631EDD251B5173c1917A49",
    },
    token: serializedTokens.slt,
    quoteToken: serializedTokens.wbnb,
    strat: "0xBfa4164f0950c33B834A26f0307B94747a9f3D0e",
  },
  {
    pid: 20,
    stakeSymbol: "WBNB",
    lpAddresses: {
      97: "",
      56: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
    },
    token: serializedTokens.wbnb,
    quoteToken: serializedTokens.wbnb,
    strat: "0x114356F00E22175628Af3374B9ccFE2d23CE1F3C",
  },
  {
    pid: 21,
    stakeSymbol: "BUSD",
    lpAddresses: {
      97: "",
      56: "0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16",
    },
    token: serializedTokens.busd,
    quoteToken: serializedTokens.wbnb,
    strat: "0x28f85D5181fb971a34A5B530cCfEb44b2F14c3DA",
  },
  {
    pid: 22,
    stakeSymbol: "ETH",
    lpAddresses: {
      97: "",
      56: "0x74E4716E431f45807DCF19f284c7aA99F18a4fbc",
    },
    token: serializedTokens.eth,
    quoteToken: serializedTokens.wbnb,
    strat: "0x0a84a35972F942EE44C2872e226121e3f7969678",
  },
  {
    pid: 23,
    stakeSymbol: "BTCB",
    lpAddresses: {
      97: "",
      56: "0x61EB789d75A95CAa3fF50ed7E47b96c132fEc082",
    },
    token: serializedTokens.btcb,
    quoteToken: serializedTokens.wbnb,
    strat: "0xa75C9722185862c7eEE88F526bAD5D51ee77D374",
  },
  {
    pid: 24,
    stakeSymbol: "CAKE",
    lpAddresses: {
      97: "",
      56: "0x0eD7e52944161450477ee417DE9Cd3a859b14fD0",
    },
    token: serializedTokens.cake,
    quoteToken: serializedTokens.wbnb,
    strat: "0x7517Ef145d7c0401983046c40666D24Fe17Ef0ce",
  },
];

export default pools;
