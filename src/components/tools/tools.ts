'use strict'
import axios from 'axios'

const urlMap: any = {
  development: '/',
  production: 'https://www.lanrenkeji.win/elm/'
}

const baseUrl: string = urlMap[process.env.NODE_ENV]

const ERR_OK = 0
export function url_get(url: string) {
  return function(params = {}) {
    return axios
      .get(baseUrl + url, {
        params
      })
      .then(res => {
        const { errno, data } = res.data
        if (errno === ERR_OK) {
          return data
        }
      })
      .catch(e => {
        return
      })
  }
}

const elementStyle = document.createElement('div').style

const vendor = (() => {
  const transformNames: any = {
    webkit: 'webkitTransform',
    Moz: 'MozTransform',
    O: 'Otransform',
    ms: 'msTransform',
    standard: 'transform'
  }

  for (const key in transformNames) {
    if (elementStyle[transformNames[key]] !== undefined) {
      return key
    }
  }

  return false
})()

export function prefixStyle(style: string) {
  if (vendor === false) {
    return false
  }
  if (vendor === 'standard') {
    return style
  }

  return vendor + style.charAt(0).toUpperCase() + style.substr(1)
}
