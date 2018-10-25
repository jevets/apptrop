module.exports = config => {
  config.dir = {
    input: './src',
    output: './dist',
  }

  config.addPassthroughCopy('src/files')
  config.addPassthroughCopy('src/icons')
  config.addPassthroughCopy('src/img')

  config.addCollection('tillandsias', (collection) => {
    return collection.getFilteredByGlob('src/tillandsias/*.md')
  })

  return config
}
