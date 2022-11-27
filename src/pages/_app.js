import '../styles/globals.css';
// Importar bootstrap
import 'Bootstrap/dist/css/bootstrap.min.css';
import MainLayout from '@layouts/MainLayout';

function MyApp({ Component, pageProps }) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  )
}

export default MyApp
