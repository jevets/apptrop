const foxycartBaseUrl = 'https://appalachiantropicals.foxycart.com/cart'

const foxycartBuildProductUrl = (variant, product, page) => {
  const price = variant.price
  const code = variant.id
  const image = product.image

  const name = `${product.title} (${variant.label})`
  const url = `${page.url}`

  const queryString = `code=${code}&name=${name}&price=${price}&url=${url}&image=${image}`

  return encodeURI(`${foxycartBaseUrl}?${queryString}`)
}

module.exports = () => {
  const copyrightDate = new Date().getFullYear()

  return {
    copyrightDate,

    title: 'Appalachian Tropicals',
    tagline: 'Inspiring Epiphytic Designs',

    foxycartBaseUrl,
    foxycartBuildProductUrl,
  }
}
