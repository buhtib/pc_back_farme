import dayjs from 'dayjs'
import { dateTimeFormat,dateFormat } from '@/constValues'


/**
 * 时间格式化
 *
 * @param {String} value 时间
 * @param {String} format format格式
 *  format 默认支持参数 dt,d  也可自定义 @example https://day.js.org/docs/zh-CN/parse/string-format
 *
 * @example '2020/2/19' | dateFormat('dt')
 *
 * @returns format后的时间
 */
export default function (value, format) {
    if (!value) return "";
    const formatMap = {
        dt: dateTimeFormat,
        d: dateFormat
    }

    return dayjs(value).format(formatMap[format] || format)
}
