module.exports = {
  publicPath: process.env.DEPLOY_ENV === 'GH_PAGES'
    ? '/nyeri-traders.com/'
    : '/',

  pwa: {
    name: 'Nyeri Traders',
    themeColor: '#344675',
    msTileColor: '#344675',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: '#344675',
    workboxOptions: {
      skipWaiting: true
    }
  }
}
