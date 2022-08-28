// @ts-ignore
import makeInspectable from 'mobx-devtools-mst';
import * as React from 'react';

import {getDefaultStore, RootStore} from './RootStore';

export const StoreContext = React.createContext<RootStore>({} as RootStore);

export const useStore = () => React.useContext(StoreContext);

export const StoreProvider: React.FC = ({children}) => {
  const [defaultStore, setDefaultStore] = React.useState<RootStore | undefined>(
    undefined,
  );
  React.useEffect(() => {
    const loadStoreFromStorage = async () => {
      // console.log('loadStoreFromStorage');
      setDefaultStore(await getDefaultStore());
    };
    loadStoreFromStorage();
  }, []);

  if (defaultStore) {
    makeInspectable(defaultStore);
    return (
      <StoreContext.Provider value={defaultStore}>
        {children}
      </StoreContext.Provider>
    );
  }
  return null;
};

export default StoreProvider;
