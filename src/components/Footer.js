import packageJson from '../../package.json'
import { useWeb3Provider } from '../context/web3Data/hooks/useWeb3Provider'

const Footer = () => {
  const { state: {connectionType} } = useWeb3Provider()
  return (
    <div className="text-gray-400 text-xs my-4">
      <div className="flex justify-between pb-6">
        <div>v{packageJson.version + '+' + process.env.REACT_APP_GIT_HASH}</div>
        <div>{connectionType}</div>
      </div>
    </div>
  )
}

export default Footer