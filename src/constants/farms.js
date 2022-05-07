import { serializeTokens } from "./tokens";

const serializedTokens = serializeTokens();

const farms = [
  {
    pid: 0,
    lpSymbol: "SLT-WBNB LP",
    lpAddresses: {
      97: "",
      56: "0x2d823FcB0a3Fd67a2c631EDD251B5173c1917A49",
    },
    token: serializedTokens.slt,
    quoteToken: serializedTokens.wbnb,
    strat: "0x18FeBf2dB75eBA89F4952230F8D6216F51821fB9",
  },
  {
    pid: 1,
    lpSymbol: "SLT-BUSD LP",
    lpAddresses: {
      97: "",
      56: "0x6f479911009037A9A56eF2762383358e22df838A",
    },
    token: serializedTokens.slt,
    quoteToken: serializedTokens.busd,
    strat: "0x67A6Fec1F458fDd06dcc5825258e0F2293CD2EE8",
  },
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
    pid: 3,
    lpSymbol: "USDT-BUSD LP",
    lpAddresses: {
      97: "",
      56: "0x7EFaEf62fDdCCa950418312c6C91Aef321375A00",
    },
    token: serializedTokens.usdt,
    quoteToken: serializedTokens.busd,
    strat: "0x81b2501187C4cF79546f9608e09D5b546C4a3B60",
  },
  {
    pid: 4,
    lpSymbol: "USDC-BUSD LP",
    lpAddresses: {
      97: "",
      56: "0x2354ef4DF11afacb85a5C7f98B624072ECcddbB1",
    },
    token: serializedTokens.usdc,
    quoteToken: serializedTokens.busd,
    strat: "0x438df4EA7c12205181371E494a24484aB360cfc1",
  },
  {
    pid: 5,
    lpSymbol: "TUSD-BUSD LP",
    lpAddresses: {
      97: "",
      56: "0x2E28b9B74D6d99D4697e913b82B41ef1CAC51c6C",
    },
    token: serializedTokens.tusd,
    quoteToken: serializedTokens.busd,
    strat: "0x5D2D4E5a8C51b62569266f014b0b694113a19332",
  },
  {
    pid: 6,
    lpSymbol: "DAI-BUSD LP",
    lpAddresses: {
      97: "",
      56: "0x66FDB2eCCfB58cF098eaa419e5EfDe841368e489",
    },
    token: serializedTokens.dai,
    quoteToken: serializedTokens.busd,
    strat: "0x83f07F91e90110595B0Cf85d0d1678E14778F8D9",
  },
  {
    pid: 7,
    lpSymbol: "ETH-BTCB LP",
    lpAddresses: {
      97: "",
      56: "0xD171B26E4484402de70e3Ea256bE5A2630d7e88D",
    },
    token: serializedTokens.eth,
    quoteToken: serializedTokens.btcb,
    strat: "0x1bd827cC5331d3f96a12be8781edCDA5c7Cb0AA3",
  },
  {
    pid: 8,
    lpSymbol: "ETH-WBNB LP",
    lpAddresses: {
      97: "",
      56: "0x74E4716E431f45807DCF19f284c7aA99F18a4fbc",
    },
    token: serializedTokens.eth,
    quoteToken: serializedTokens.wbnb,
    strat: "0xDA199aD2368292d4CA0bE12B631eA0ecf5a381Bd",
  },
  {
    pid: 9,
    lpSymbol: "BTCB-WBNB LP",
    lpAddresses: {
      97: "",
      56: "0x61EB789d75A95CAa3fF50ed7E47b96c132fEc082",
    },
    token: serializedTokens.btcb,
    quoteToken: serializedTokens.wbnb,
    strat: "0x4C49270DB5Dd8284e5D98f397b0Dde35b747C58a",
  },
  {
    pid: 10,
    lpSymbol: "ETH-USDC LP",
    lpAddresses: {
      97: "",
      56: "0xEa26B78255Df2bBC31C1eBf60010D78670185bD0",
    },
    token: serializedTokens.eth,
    quoteToken: serializedTokens.usdc,
    strat: "0xe8F1D3ECe647cA6A7aa27c784Fc859d79A03ADc2",
  },
  {
    pid: 11,
    lpSymbol: "BTCB-BUSD LP",
    lpAddresses: {
      97: "",
      56: "0xF45cd219aEF8618A92BAa7aD848364a158a24F33",
    },
    token: serializedTokens.btcb,
    quoteToken: serializedTokens.busd,
    strat: "0x2F60d0a137cEEAED23Df3836b46360191cf5d609",
  },
  {
    pid: 12,
    lpSymbol: "USDT-WBNB LP",
    lpAddresses: {
      97: "",
      56: "0x16b9a82891338f9bA80E2D6970FddA79D1eb0daE",
    },
    token: serializedTokens.usdt,
    quoteToken: serializedTokens.wbnb,
    strat: "0x98C7081c1C94f92B33536656FB51813590640d2c",
  },
  {
    pid: 13,
    lpSymbol: "CAKE-BUSD LP",
    lpAddresses: {
      97: "",
      56: "0x804678fa97d91B974ec2af3c843270886528a9E6",
    },
    token: serializedTokens.cake,
    quoteToken: serializedTokens.busd,
    strat: "0x4dFA7c868E5E522b6Fa1Cf41679eAd7DcDc12EF8",
  },
  {
    pid: 14,
    lpSymbol: "CAKE-USDT LP",
    lpAddresses: {
      97: "",
      56: "0xA39Af17CE4a8eb807E076805Da1e2B8EA7D0755b",
    },
    token: serializedTokens.cake,
    quoteToken: serializedTokens.usdt,
    strat: "0x03C7C80364AAF4C641Bc612aC7564A7D533aC5ed",
  },
  {
    pid: 15,
    lpSymbol: "CAKE-WBNB LP",
    lpAddresses: {
      97: "",
      56: "0x0eD7e52944161450477ee417DE9Cd3a859b14fD0",
    },
    token: serializedTokens.cake,
    quoteToken: serializedTokens.wbnb,
    strat: "0xB1437eC57f3c11Ea2eb9189cf2dEF26854969333",
  },
  {
    pid: 16,
    lpSymbol: "BNB-BELT LP",
    lpAddresses: {
      97: "",
      56: "0xF3Bc6FC080ffCC30d93dF48BFA2aA14b869554bb",
    },
    token: serializedTokens.wbnb,
    quoteToken: serializedTokens.belt,
    strat: "0xa369DF1924472dd0A2Ff7fC4e0D61c36ee77c951",
  },
  {
    pid: 17,
    lpSymbol: "DOT-WBNB LP",
    lpAddresses: {
      97: "",
      56: "0xDd5bAd8f8b360d76d12FdA230F8BAF42fe0022CF",
    },
    token: serializedTokens.dot,
    quoteToken: serializedTokens.wbnb,
    strat: "0x4DEDEA2db6cD7dda6406C3aFe7C0178A61267234",
  },
  {
    pid: 18,
    lpSymbol: "WBNB-LINK LP",
    lpAddresses: {
      97: "",
      56: "0x824eb9faDFb377394430d2744fa7C42916DE3eCe",
    },
    token: serializedTokens.wbnb,
    quoteToken: serializedTokens.link,
    strat: "0xC0154BCD5cbdE1C49F58591fbB985182d12093c2",
  },
];

export default farms;
