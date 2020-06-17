import path = require('path')
import fs = require('fs-extra')
import JSON5 from 'json5'
/**
 * 递归解析json文本
 *
 * @author CaoMeiYouRen
 * @date 2020-06-17
 * @export
 * @param {*} obj
 * @returns
 */
export function jsonDeepParse(obj: any) {
    try {
        if (typeof obj !== 'object' || obj === null) {
            return obj
        }
        const keys = Object.keys(obj)
        for (let i = 0; i < keys.length; i++) {
            if (typeof obj[keys[i]] === 'string') { // 如果是string就尝试解析
                try {
                    obj[keys[i]] = JSON.parse(obj[keys[i]])
                } catch (error) {

                }
            }
        }
        for (let i = 0; i < keys.length; i++) {
            if (typeof obj[keys[i]] === 'object') { // 如果是对象就递归
                obj[keys[i]] = jsonDeepParse(obj[keys[i]])
            }
        }
        return obj
    } catch (error) {
        return obj
    }
}

/**
 * 提取字符串中的数字
 *
 * @author CaoMeiYouRen
 * @date 2020-06-18
 * @export
 * @param {string} text
 * @returns {number}
 */
export function getNumber(text: string): number {
    const result = text.match(/(\d+)/)
    if (result) {
        return Number(result[1])
    }
    return 0
}
// console.log(getNumber('https://space.bilibili.com/451066708/'))