import Loadable from 'react-loadable'

export const Home = Loadable({
    loader: () => import('../components/Home'),
    loading: Loader,
  })