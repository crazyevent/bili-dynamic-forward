import dotenv = require('dotenv')
import path = require('path')
import fs = require('fs-extra')
let envParsed = {}
// 载入本地变量
if (fs.existsSync('.env.local')) {
    const envFound = dotenv.config({ path: '.env.local' })
    if (envFound.error) {
        console.error(envFound.error)
    } else {
        envParsed = Object.assign({}, envFound.parsed)
    }
}
if (fs.existsSync('.env')) {
    const envFound = dotenv.config()
    if (envFound.error) {
        console.error(envFound.error)
    } else {
        envParsed = Object.assign(envFound.parsed, envParsed)
    }
}
const env = process.env
/**
 * 运行环境 development | production
 */
export const NODE_ENV = env.NODE_ENV

/**
 * 是否为debug
 */
export const IS_DEBUG = env.NODE_ENV === 'development'

if (IS_DEBUG) {
    console.log(envParsed)
}

export const CACHE = {
    CACHE_AGE: Number(env.CACHE_AGE || 3600),
    CACHE_MAX: Number(env.CACHE_MAX || Infinity),
}

/**
 * 浏览器 user-agent
 */
export const UA = env.UA || 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36'

/**
 * 访问B站api的延时
 */
export const API_SLEEP_TIME = Number(env.API_SLEEP_TIME || 7000)
/**
 * 发送消息的延时
 */
export const MSG_SLEEP_TIME = Number(env.MSG_SLEEP_TIME || 500)

/**
 * 一轮访问后的延时
 */
export const SLEEP_TIME = Number(env.SLEEP_TIME || 60000)
/**
 * 是否使用AV号
 */
export const USE_AV = env.USE_AV === 'true'