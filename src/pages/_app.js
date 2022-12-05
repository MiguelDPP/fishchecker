import '../styles/globals.css';
// Importar bootstrap
import 'Bootstrap/dist/css/bootstrap.min.css';
import { ProviderData } from 'hooks/useData';
import MainLayout from '@layouts/MainLayout';



export default function MyApp({ Component, pageProps }) {
  return (
    <ProviderData>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </ProviderData>
  )
}

// function MyApp({ Component, pageProps }) {
//   return (
//     <providerData>
//       <MainLayout>
//         <Component {...pageProps} />
//       </MainLayout>
//     </providerData>
//   )
// }

// export default MyApp
