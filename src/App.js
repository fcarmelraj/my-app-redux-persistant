import { RouterProvider } from "react-router";
import { Suspense } from "react";
import { router } from "./routes/appRouter";
import { ErrorFallback } from "./GlobalError";
import { ErrorBoundary } from "react-error-boundary";
import { store, persistor } from "./Store/store";
import { Provider } from "react-redux";
import {PersistGate} from 'redux-persist/integration/react';

function App() {
  return (
    <div className="App">
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Suspense fallback={<p>Loading...</p>}>
          <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
             <RouterProvider router={router} />
             </PersistGate>
          </Provider>
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

export default App;