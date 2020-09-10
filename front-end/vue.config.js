module.exports = {
    devServer: {
      // useLocalIp: false, // disable using local ip
      // public: 'localhost', // fix hot reloading socket
      // disableHostCheck: true,
      // host: '0.0.0.0',
      // port: 8080,
      proxy: {
        '/api/*': {
          target: 'http://localhost:8033',
          secure: false,
        },
      },
      progress: false,
    }
};