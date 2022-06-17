export const supportedChains = () => {
  const dev = process.env.NODE_ENV !== 'production' ? [parseInt(process.env.REACT_APP_CHAIN_ID, 10)] : []
  return [...dev, parseInt(process.env.REACT_APP_CHAIN_ID, 10)]
}
