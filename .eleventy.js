module.exports = config => {
  // I/O
  config.dir = {
    input: './src',
    output: './dist',
  }

  // Passthrough
  config.addPassthroughCopy('src/files')
  config.addPassthroughCopy('src/icons')
  config.addPassthroughCopy('src/img')

  // Custom Collections
  config.addCollection('tillandsias', (collection) => {
    return collection.getFilteredByGlob('src/tillandsias/*.md').sort( (a, b) => {
      return a.data.weight > b.data.weight
    })
  })

  return config
}
