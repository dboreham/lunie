const dev = process.env.NODE_ENV === `development`
const stargate = process.env.STARGATE || `https://localhost:9071`

const rpc = process.env.RPC || `localhost:26657`

export default {
  name: `Lunie`,
  development: dev,
  network: `cosmoshub`,
  stargate,
  rpc,
  google_analytics_uid: process.env.GOOGLE_ANALYTICS_UID || "",
  node_halted_timeout: 120000,
  block_timeout: 10000,
  default_gas_price: dev ? 1e-9 : 2.5e-8, // recommended from Cosmos Docs

  // Ledger
  CosmosAppTestModeAllowed: false,
  mobileApp: Boolean(process.env.MOBILE_APP),

  e2e: process.env.VUE_APP_E2E
}
