import moment from 'moment'
export const capitalize = (value: string) => {
  const newStr = `${value[0].toUpperCase()}${value.slice(1)}`
  return newStr
}
export const getWeeksBetween = (startDate: string, endDate: string) => {
  var a = moment(startDate, 'DD-MM-YYYY')
  var b = moment(endDate, 'DD-MM-YYYY')
  var days = b.diff(a, 'week')
  return days
}
export const getDateFromTimestamp = (timestamp: string) => {
  let ts = parseInt(timestamp)
  var a = new Date(ts * 1000)
  var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  var year = a.getFullYear()
  var month = months[a.getMonth()]
  var date = a.getDate()
  return date + ' ' + month + ' ' + year
}
export const getFullDateFromTimestamp = (timestamp: string) => {
  let ts = parseInt(timestamp)
  var a = new Date(ts * 1000)
  var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  var year = a.getFullYear()
  var month = months[a.getMonth()]
  var date = a.getDate()
  var hour = a.getHours()
  var min = a.getMinutes()
  var sec = a.getSeconds()
  return date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec
}
