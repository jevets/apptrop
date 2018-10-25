module.exports = config => {
  config.dir = {
    input: './src',
    output: './dist',
  }

  config.addPassthroughCopy('src/files')
  config.addPassthroughCopy('src/img')

  return config
}
