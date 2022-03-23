import config from '../../config/main'


// This gets called on every request
export const products = async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`${config.backendUrl}api/products`)
  const products = await res.json()
  // Pass data to the page via props
  return { props: { products } }
}

