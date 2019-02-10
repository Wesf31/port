import Loadable from 'react-loadable'
import Loader from '../components/Loader'


export const Home = Loadable({
    loader: () => import('../components/Home'),
    loading: Loader,
  })