<template>
  <div class="z-calendar">
    <div class="calendar-box">
      <!--  -->
      <div class="calendar-box-header">
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
          <div 
            class="prev-month"
            @click="onPrevMonth"
          >
            <v-icon>mdi-chevron-left</v-icon>
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

          <div 
            class="next-month"
            @click="onNextMonth"
          >
            <v-icon>mdi-chevron-right</v-icon>
          </div>
        </div>

        <div 
          class="back-today"
          @click="onBackToday"
        >返回今天</div>
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
              `${ currentMonth }-${ currentDay }` === `${ item.record.month }-${ item.record.date }` ? 'selected' : '',
              item.cellClass,
              'cell'
            ]"
            >
              {{ item.label }}
              <i :class="[item.cellClass === 'selected' ? 'z-block' : 'z-none', 'badge']"></i>
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

  export default {
    name: 'ZCalendar',

    data() {
      return {
        weekName: weekName,
        monthsName: [],
        yearsName: [],

        year: null,
        month: null,
        week: null,
        day: null,
        months: [],
        calendar: [],

        thisYear: null,
        thisMonth: null,
        today: null,

        currentYear: null,
        currentMonth: null,
        currentDay: null,

        selectedDate: null
      }
    },

    created() {
      this.monthsName = []
      this.yearsName = []

      for(let item of monthsName) {
        this.monthsName.push({
          text: item.label,
          value: item.value
        })
      }

      for(let item of yearsName) {
        this.yearsName.push({
          text: item.label,
          value: item.value
        })
      }

      this.init()
    },

    methods: {
      /**
       * @description 修改当前年份
       * @param {string | number} value
       */ 
      onChangeCurrentYear(value) {
        this.currentYear = value
        this.currentMonth = 0
      },

      /**
       * @description 修改当前月份
       * @param {string | number} value
       */ 
      onChangeCurrentMonth(value) {
        this.currentMonth = value
        this.currentDay = 1
      },

      /**
       * @description 当前选中日期
       * @param {object} item
       */ 
      onSelectDate(item) {
        const { record } = item
        this.currentYear = record.year
        this.currentMonth = record.month
        this.currentDay = record.date

        const value = `${ this.currentMonth }-${ this.currentDay }`

        console.log(value)

        for(let item of this.calendar) {
          if(item.value === value) {
            console.log(item)

            if(item.cellClass === 'selected') {
              item.cellClass = 'unselected'
            }else {
              item.cellClass = 'selected'
            }

          }
        }

        this.calendar = [...this.calendar]

        console.log(this.calendar)
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
      },

      /**
       * @description 返回今天
       */ 
      onBackToday() {
        this.currentYear = this.thisYear
        this.currentMonth = this.thisMonth
        this.currentDay = this.today

        console.log(this.thisYear, this.thisMonth, this.today)
      },

      // 闰年
      isLeapYear(year) {
        return (year % 400 === 0) || (year % 100 !== 0 && year % 4 === 0)
      },

      // 获取 YYYY/MM/DD 是星期几
      getDayOfWeek(year, month, date = 1) {
        return new Date(year, month, date).getDay()
      },

      // 获取 MM 有多少天
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
      
      // 设置日历
      setCalendar(year, month) {
        // console.log(year, month)
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
            value: `${ lastMonth - 1 }-${ h }`,
            record: {
              year: lastYear,
              month: lastMonth - 1,
              realMonth: lastMonth,
              date: h
            },
            class: 'gray'
          })
        }

        // 本月
        for(let b = 1; b <= currDaysOfMonth; b++) {
          body.push({
            label: b,
            value: `${ month }-${ b }`,
            record: {
              year: thisYear,
              month: month,
              realMonth: thisMonth,
              date: b
            },
            class: 'white'
          })
        }

        // 下个月
        for(let t = 1; t <= nextHeadDaysOfMonth; t++) {
          tail.push({
            label: t,
            value: `${ nextMonth - 1 }-${ t }`,
            record: {
              year: nextYear,
              month: nextMonth - 1,
              realMonth: nextMonth,
              date: t
            },
            class: 'gray'
          })
        }

        this.calendar = [...head, ...body, ...tail]

        // console.log(this.calendar)
      },

      // 初始化
      init() { 
        this.year = new Date().getFullYear()
        this.month = new Date().getMonth()
        this.week = new Date().getDay()
        this.day = new Date().getDate()

        this.thisYear = this.year
        this.thisMonth = this.month
        this.today = this.day

        this.currentMonth = this.month
        this.currentYear = this.year

        // this.months = this.isLeapYear(this.currentYear) ? monthsLeap : monthsCommon
        // this.setCalendar(this.currentYear, this.currentMonth)
      }
    },

    computed: {
      currentYM() {
        const { currentYear, currentMonth } = this
        console.log(currentYear, currentMonth)
        return {
          currentYear,
          currentMonth
        }
      }
    },

    watch: {
      // currentYear() {
      //   this.months = this.isLeapYear(this.currentYear) ? monthsLeap : monthsCommon
      //   console.log(this.currentYear, this.currentMonth)
      // },

      // currentMonth() {
      //   console.log(this.currentMonth)
      //   this.setCalendar(this.currentYear, this.currentMonth)
      // },

      currentYM: {
        handler(value, oldValue) {
          if(value.currentYear !== oldValue.currentYear) {
            this.months = this.isLeapYear(this.currentYear) ? monthsLeap : monthsCommon
          }
          this.setCalendar(this.currentYear, this.currentMonth)
        },
        deep: true
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
          width: 150px;
        }

        .month {
          display: flex;
          align-items: center;

          .prev-month {
            cursor: pointer;
          }

          .select-month {
            width: 150px;
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
              min-height: 56px;
              text-align: center;
              border: 2px solid transparent;
              border-radius: 6px;
              overflow: hidden;

              &.today {
                border: 2px solid #1976d2 !important;
              }

              &.selected {
                border: 2px solid #bdbdbd;
              }

              &.unselected {
                border: 2px solid transparent;
              }

              &:hover {
                border: 2px solid #bdbdbd;
              }

              i.badge {
                position: absolute;
                width: 30px;
                height: 30px;
                top: -15px;
                right: -15px;
                background-color: #1976d2;
                transform: rotate(45deg);
              }
            }
          }
        }
      }
    }
  }
</style>
