// @ts-ignore
import makeInspectable from 'mobx-devtools-mst'
// import { useLocalObservable } from 'mobx-react-lite'
import * as React from 'react'

import { getDefaultStore, RootStore } from './root.store'

export const StoreContext = React.createContext<RootStore>({} as RootStore)

export const useStore = () => React.useContext(StoreContext)

export const StoreProvider: React.FC = ({ children }) => {
  const [defaultStore, setDefaultStore] = React.useState<RootStore | undefined>(undefined)
  React.useEffect(() => {
    const loadStoreFromStorage = async () => {
      console.log('loadStoreFromStorage')
      setDefaultStore(await getDefaultStore())
    }
    loadStoreFromStorage()
  }, [])

  // const store = useLocalObservable(() => defaultStore)
  // console.log('setup store', !!store)
  if (defaultStore) {
    makeInspectable(defaultStore)
    return <StoreContext.Provider value={defaultStore}>{children}</StoreContext.Provider>
  }
  return null
}

export default StoreProvider
