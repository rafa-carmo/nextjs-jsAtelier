module.exports = {
    images: {
        domains: ['i.ibb.co'],
      },
      webpack: (config, { isServer }) => {
        // Fixes npm packages that depend on `fs` module
        if (!isServer) {
          config.node = {
            fs: 'empty'
          }
        }
    
        return config
      }
    
}