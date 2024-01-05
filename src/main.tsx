import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './router/index.tsx'
import { ConfigProvider } from 'antd'
import { Provider } from 'react-redux'
import store from './store/index.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
     <Provider store={store}>
        <ConfigProvider
           theme={{
             token: {
              colorPrimary: '#C9AC8C',
              borderRadius: 6,
              colorBgContainer: '#f6ffed',
      },
    }}
  >
      <RouterProvider router={router}/>
    <App />
        </ConfigProvider>
     </Provider>

  </React.StrictMode>,
)
