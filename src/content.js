let txt = process.env.NODE_ENV == 'development' ? env_dev : env_pro
document.write('<br>' + txt)
