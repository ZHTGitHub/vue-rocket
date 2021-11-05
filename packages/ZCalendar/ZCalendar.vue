<template>
  <div class="z-calendar">
    <div class="calendar-box">
      <!--  -->
      <div class="z-flex justify-center pb-2 calendar-box-header">
        <div class="year">
          <v-select
            dense
            outlined
            hide-details
            :items="yearsName"
            v-model="currentYear"
            @change="onChangeCurrentYear"
          ></v-select>
        </div>

        <div class="month">
          <div class="pl-4 pr-1 prev-month">
            <v-btn
              icon
              @click="onPrevMonth"
            >
              <v-icon size="28">mdi-chevron-left</v-icon>
            </v-btn>
          </div>

          <div class="select-month">
            <v-select
              dense
              outlined
              hide-details
              :items="monthsName"
              v-model="currentMonth"
              @change="onChangeCurrentMonth"
            ></v-select>
          </div>

          <div class="pl-1 pr-4 next-month">
            <v-btn
              icon
              @click="onNextMonth"
            >
              <v-icon size="28">mdi-chevron-right</v-icon>
            </v-btn>
          </div>
        </div>

        <div class="back-today">
          <v-btn
            depressed
            @click="onBackToday"
          >
            返回今天
          </v-btn>
        </div>
      </div>
      <!--  -->

      <!--  -->
      <div class="calendar-box-content">
        <div class="content-header">
          <div 
            v-for="item in weekName"
            :key="item.value"
            class="week"
          >{{ item.label }}</div>
        </div>

        <div class="content-row">
          <div 
            v-for="item in calendar"
            :key="item.value"
            :class="[item.class, 'day']"
            @click="onSelectDate(item)"
          > 
            <div :class="[
              `${ thisMonth }-${ today }` === `${ item.record.month }-${ item.record.date }` ? 'today' : '' ,
              item.selected ? 'selected' : '',
              item.disabledGray ? 'cursor-not-allow' : '',
              'cell'
            ]"
            >
              {{ item.label }}
              <i :class="[item.selected ? 'z-block' : 'z-none', 'badge']"></i>
            </div>
          </div>
        </div>
      </div>
      <!--  -->
    </div>
  </div>
</template>

<script>
  import { monthsCommon, monthsLeap, yearsName, monthsName, weekName } from './cells'

  const date = new Date()
  // 本年本月本周本日
  const [YEAR, MONTH, WEEK, DAY] = [date.getFullYear(), date.getMonth(), date.getDay(), date.getDate()]

  export default {
    name: 'ZCalendar',

    props: {
      clearSelectedItems: {
        type: Boolean,
        default: false
      },

      defaultValue: {
        type: Array,
        default: () => []
      },

      disabledGray: {
        type: Boolean,
        default: false
      }
    },

    data() {
      return {
        weekName,
        monthsName,
        yearsName,

        months: [],
        calendar: [],

        thisYear: YEAR,
        thisMonth: MONTH,
        today: DAY,

        currentYear: YEAR,
        currentMonth: MONTH,
        currentDay: DAY,

        selectedItem: {
          id: null,
          year: YEAR, 
          month: MONTH, 
          realMonth: MONTH + 1, 
          date: null,
          days: null
        },
        selectedItems: []
      }
    },

    methods: {
      /**
       * @description 修改当前年份
       * @param {string | number} value
       */ 
      onChangeCurrentYear(value) {
        this.currentYear = value
        this.currentMonth = 0
        this.$emit('change:year', {
          year: value,
          month: this.currentMonth,
          realMonth: this.currentMonth + 1
        })
      },

      /**
       * @description 修改当前月份
       * @param {string | number} value
       */ 
      onChangeCurrentMonth(value) {
        this.currentMonth = value
        this.currentDay = 1
        this.$emit('change:month', {
          month: value,
          realMonth: value + 1,
          days: this.getDaysOfMonth(value)
        })
      },

      /**
       * @description 当前选中日期
       * @param {object} value
       */ 
      onSelectDate(value) {
        const { id, selected, record } = value

        if(value.class === 'gray') {
          if(this.disabledGray) {
            return
          }
        }

        this.currentYear = record.year
        this.currentMonth = record.month
        this.currentDay = record.date

        for(let item of this.calendar) {
          if(item.id === id) {
            item.selected = !selected
            this.setSelectedItems(item)
          }
        }

        this.selectedItem = {
          id,
          year: record.year, 
          month: record.month, 
          realMonth: record.realMonth, 
          date: record.date,
          days: this.getDaysOfMonth(record.month)
        }

        // this.$emit('change', this.selectedItem, this.selectedItems)
      },

      /**
       * @description 上个月
       */ 
      onPrevMonth() {
        this.currentMonth -= 1

        if(this.currentMonth < 0)  {
          this.currentMonth = 11
          this.currentYear -= 1
        }

        this.$emit('previous:month', {
          month: this.currentMonth,
          realMonth: this.currentMonth + 1,
          days: this.getDaysOfMonth(this.currentMonth)
        })
      },

      /**
       * @description 下个月
       */ 
      onNextMonth() {
        this.currentMonth += 1

        if(this.currentMonth > 11) {
          this.currentMonth = 0
          this.currentYear += 1
        }

        this.$emit('next:month', {
          month: this.currentMonth,
          realMonth: this.currentMonth + 1,
          days: this.getDaysOfMonth(this.currentMonth)
        })
      },

      /**
       * @description 返回今天
       */ 
      onBackToday() {
        this.currentYear = this.thisYear
        this.currentMonth = this.thisMonth
        this.currentDay = this.today

        this.$emit('back:today', {
          year: this.thisYear,
          month: this.thisMonth,
          realMonth: this.thisMonth + 1,
          date: this.today,
          days: this.getDaysOfMonth(this.thisMonth)
        })
      },

      /**
       * @description 是否闰年
       * @param {number} year 年
       */ 
      isLeapYear(year) {
        return (year % 400 === 0) || (year % 100 !== 0 && year % 4 === 0)
      },

      /**
       * @description 某年某月某日是星期几
       * @param {number} 年 year
       * @param {number} 月 month
       * @param {number} 日 date = 1
       */ 
      getDayOfWeek(year, month, date = 1) {
        return new Date(year, month, date).getDay()
      },

      /**
       * @description 某年某月有多少天
       * @param {number} 月 month 
       */ 
      getDaysOfMonth(month) {
        if(month < 0) {
          return this.months[11].label
        }
        else if(month > 11) {
          return this.months[0].label
        }
        else {
          return this.months.find(m => m.value === month).label
        }
      },
      
      /**
       * @description 设置日历
       * @param {number} year 年
       * @param {number} month 月
       */ 
      setCalendar(year, month) {
        const currDayOfWeek = this.getDayOfWeek(year, month, 1)
        const currDaysOfMonth = this.getDaysOfMonth(month)

        const prevDaysOfMonth = this.getDaysOfMonth(month - 1)

        const prevTailDaysOfMonth = prevDaysOfMonth - currDayOfWeek + 1
        const nextHeadDaysOfMonth = 42 - currDaysOfMonth - currDayOfWeek

        let [lastYear, nextYear, thisYear] = [year, year, year]
        let [lastMonth, nextMonth, thisMonth] = [month, month + 2, month + 1]

        switch (month) {
          case 0:
            lastYear = year - 1
            lastMonth = 12
            break;

          case 11:
            nextYear = year + 1
            nextMonth = 1
            break;
        }

        // console.log('本月共'+currDaysOfMonth+'天，且一号为：星期'+currDayOfWeek)
        // console.log('上个月共'+prevDaysOfMonth+'天')
        // console.log('上个月开始日期'+prevTailDaysOfMonth)
        // console.log('下个月结束日期'+nextHeadDaysOfMonth)

        const [head, body, tail] = [[], [], []]

        // 上个月
        for(let h = prevTailDaysOfMonth; h <= prevDaysOfMonth; h++) {
          head.push({
            label: h,
            id: '' + lastYear + (lastMonth - 1) + h,
            record: {
              year: lastYear,
              month: lastMonth - 1,
              realMonth: lastMonth,
              date: h
            },
            class: 'gray',
            selected: false,
            disabledGray: this.disabledGray
          })
        }

        // 本月
        for(let b = 1; b <= currDaysOfMonth; b++) {
          body.push({
            label: b,
            id: '' + thisYear + month + b,
            record: {
              year: thisYear,
              month: month,
              realMonth: thisMonth,
              date: b
            },
            class: 'white',
            selected: false
          })
        }

        // 下个月
        for(let t = 1; t <= nextHeadDaysOfMonth; t++) {
          tail.push({
            label: t,
            id: '' + nextYear + (nextMonth - 1) + t,
            record: {
              year: nextYear,
              month: nextMonth - 1,
              realMonth: nextMonth,
              date: t
            },
            class: 'gray',
            selected: false,
            disabledGray: this.disabledGray
          })
        }

        this.calendar = [...head, ...body, ...tail]

        for(let c of this.calendar) {
          for(let s of this.selectedItems) {
            if(c.id === s.id) {
              c.selected = true
            }
          }
        }

        // console.log(this.calendar)
      },

      /**
       * @description 设置所有选中的日期
       * @param {object} value
       */ 
      setSelectedItems(value) {
        const { id, selected, record } = value
        const { date, month, realMonth, year } = record

        if(selected) {
          const isRepeat = this.selectedItems.find(s => s.id === id)

          if(!isRepeat) {
            this.selectedItems.push({
              id,
              date,
              month,
              realMonth,
              year
            })
          }
        }
        else {
          this.selectedItems.map((item, index) => {
            if(id === item.id) {
              this.selectedItems.splice(index, 1)
            }
          })
        }

        // console.log(this.selectedItems)
      },

      /**
       * @description 清除选中的日期
       */ 
      emptySelectedItems() {
        if(this.clearSelectedItems) {
          this.selectedItems = []

          for(let item of this.calendar) {
            item.selected = false
          }
        }
      }
    },

    computed: {
      currentYM() {
        return {
          currentYear: this.currentYear,
          currentMonth: this.currentMonth
        }
      }
    },

    watch: {
      currentYM: {
        handler(value, oldValue) {
          if(!oldValue || (value.currentYear !== oldValue.currentYear)) {
            this.months = this.isLeapYear(this.currentYear) ? monthsLeap : monthsCommon
          }
          this.setCalendar(this.currentYear, this.currentMonth)
        },
        immediate: true
      },

      currentMonth() {
        this.emptySelectedItems()
      },

      selectedItem: {
        handler() {

          if(!this.selectedItem.days) {
            this.selectedItem.days = this.getDaysOfMonth(MONTH)
          }

          // console.log(this.selectedItem)
          // console.log(this.selectedItems)

          this.$emit('change', this.selectedItem, this.selectedItems)

        },
        immediate: true
      },

      defaultValue: {
        handler() {
          this.selectedItems = this.defaultValue
        },
        immediate: true
      }
    }
  }
</script>

<style scoped lang="scss">
  .z-calendar {
    .calendar-box {
      .calendar-box-header {
        display: flex;
        align-items: center;

        .year {
          width: 120px;
        }

        .month {
          display: flex;
          align-items: center;

          .prev-month {
            cursor: pointer;
          }

          .select-month {
            width: 120px;
          }

          .next-month {
            cursor: pointer;
          }
        }

        .back-today {
          cursor: pointer;
        }
      }

      .calendar-box-content {
        .content-header {
          display: grid;
          align-items: center;
          grid-template-columns: repeat(7, 14.2857143%);
          height: 36px;
          margin-top: 14px;

          .week {
            height: 13px;
            line-height: 13px;
            color: #333;
            font-size: 13px;
            text-align: center;
          }
        }

        .content-row {
          display: grid;
          align-items: center;
          grid-template-columns: repeat(7, 14.2857143%);

          .day {
            box-sizing: border-box;
            padding: 4px 2px 2px 2px;
            cursor: pointer;

            &.gray {
              opacity: .4;
            }

            .cell {
              position: relative;
              height: 56px;
              line-height: 56px;
              text-align: center;
              border: 2px solid transparent;
              border-radius: 6px;
              color: #616161;
              font-weight: bold;
              overflow: hidden;

              &.today {
                border: 2px solid #1E88E5 !important;
              }

              &.selected {
                border: 2px solid #1976d2 !important;
              }

              &:hover {
                border: 2px solid #bdbdbd;
              }

              i.badge {
                position: absolute;
                width: 35px;
                height: 35px;
                top: -17.5px;
                right: -17.5px;
                background-color: #1976d2;
                transform: rotate(45deg);

                &::after {
                  content: " ";
                  position: absolute;
                  left: 6px;
                  top: 18px;
                  width: 55%;
                  height: 20%;
                  border: 2px solid #fff;
                  border-radius: 1px;
                  border-top: none;
                  border-right: none;
                  background: transparent;
                  transform: rotate(-90deg);
                }
              }
            }
          }
        }
      }
    }

    .cursor-not-allow {
      cursor: not-allowed;
    }
  }
</style>
