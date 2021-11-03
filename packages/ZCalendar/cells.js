// 平年
const monthsCommon = [
  { label: 31, value: 0 },
  { label: 28, value: 1 },
  { label: 31, value: 2 },
  { label: 30, value: 3 },
  { label: 31, value: 4 },
  { label: 30, value: 5 },
  { label: 31, value: 6 },
  { label: 31, value: 7 },
  { label: 30, value: 8 },
  { label: 31, value: 9 },
  { label: 30, value: 10 },
  { label: 31, value: 11 }
]
// 闰年
const monthsLeap = [
  { label: 31, value: 0 },
  { label: 29, value: 1 },
  { label: 31, value: 2 },
  { label: 30, value: 3 },
  { label: 31, value: 4 },
  { label: 30, value: 5 },
  { label: 31, value: 6 },
  { label: 31, value: 7 },
  { label: 30, value: 8 },
  { label: 31, value: 9 },
  { label: 30, value: 10 },
  { label: 31, value: 11 }
]
// 年份
const yearsName = []
for(let year = 2010; year <= 2030; year++) {
  yearsName.push({ 
    label: `${ year }年`, 
    value: year 
  })
}

// 月份
const monthsName = [
    { label: '一月', value: 0 },
    { label: '二月', value: 1 },
    { label: '三月', value: 2 },
    { label: '四月', value: 3 },
    { label: '五月', value: 4 },
    { label: '六月', value: 5 },
    { label: '七月', value: 6 },
    { label: '八月', value: 7 },
    { label: '九月', value: 8 },
    { label: '十月', value: 9 },
    { label: '十一月', value: 10 },
    { label: '十二月', value: 11 }
]
// 星期
const weekName = [
  { label: '星期日', value: 0 },
  { label: '星期一', value: 1 },
  { label: '星期二', value: 2 },
  { label: '星期三', value: 3 },
  { label: '星期四', value: 4 },
  { label: '星期五', value: 5 },
  { label: '星期六', value: 6 }
]

export {
  monthsCommon,
  monthsLeap,
  yearsName,
  monthsName,
  weekName
}