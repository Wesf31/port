import Loadable from 'react-loadable'
import Loader from '../components/Loader'


export const Home = Loadable({
    loader: () => import('../components/Home'),
    loading: Loader,
  })

  export const CreateImage = Loadable({
    loader: () => import('../components/Create'),
    loading: Loader,
  })