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
            @change="onChangeCurrentYear($event), onSelect('year')"
          ></v-select>
        </div>

        <div class="month">
          <div class="pl-4 pr-1 prev-month">
            <v-btn
              icon
              @click="onPrevMonth(), onSelect('prev')"
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
              @change="onChangeCurrentMonth($event), onSelect('month')"
            ></v-select>
          </div>

          <div class="pl-1 pr-4 next-month">
            <v-btn
              icon
              @click="onNextMonth(), onSelect('next')"
            >
              <v-icon size="28">mdi-chevron-right</v-icon>
            </v-btn>
          </div>
        </div>

        <div class="back-today">
          <v-btn
            depressed
            @click="onBackToday(), onSelect('today')"
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
            :class="['day', item.gray ? 'gray' : '']"
            @click="onSelectDate(item)"
          > 
            <div 
              :class="['cell', 
                item.selected ? 'selected' : '', 
                item.disabledGray ? 'cursor-not-allow' : ''
              ]"
            >
              {{ item.day }}
              <i :class="['badge', item.selected ? 'z-block' : 'z-none']"></i>
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
  const [YEAR, MONTH, DAY] = [date.getFullYear(), date.getMonth(), date.getDate()]

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

        selectedItem: {},
        selectedItems: []
      }
    },

    mounted() {
      const timer = setTimeout(() => {
        this.onSelect()
        clearTimeout(timer)
      })
    },

    methods: {
      /**
       * @description 修改当前年份
       * @param {string | number} value
       */ 
      onChangeCurrentYear(value) {
        this.currentYear = value
        this.$emit('change:year', this._setOutputDate())
      },

      /**
       * @description 修改当前月份
       * @param {string | number} value
       */ 
      onChangeCurrentMonth(value) {
        this.currentMonth = value
        this.$emit('change:month', this._setOutputDate())
      },

      /**
       * @description 当前选中日期
       * @param {object} value
       */ 
      onSelectDate(value) {
        const { selected, year, month, day, gray } = value

        if(gray && this.disabledGray) return

        for(let item of this.calendar) {
          if(item.year === year 
              && item.month === month 
              && item.day === day
            ) {

            item.selected = !selected

            this._setSelectedItems(item)

            this.selectedItem = {
              ...this._setOutputDate(),
              selected: item.selected
            }

            this.currentDay = item.selected ? day : null
          }
        }

        this.$emit('change:date', this.selectedItem, this.selectedItems)
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

        this.$emit('prev', this._setOutputDate())
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

        this.$emit('next', this._setOutputDate())
      },

      /**
       * @description 返回今天
       */ 
      onBackToday() {
        this.currentYear = YEAR
        this.currentMonth = MONTH
        this.currentDay = DAY

        this.$emit('click:today', this._setOutputDate())
      },

      /**
       * @description 当前选中的日期
       * @param {string} value
       */ 
      onSelect(value) {
        if(value !== 'date' && value !== 'today') {
          this.currentDay = null
        }

        this.$emit('select', this._setOutputDate(), this.selectedItems)
      },

      /**
       * @description 是否闰年
       * @param {number} year 年
       */ 
      _isLeapYear(year) {
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
      _setCalendar(year, month) {
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

        // console.log(`当前为：${ year }年，${ month + 1 }月，且1号为：周${ currDayOfWeek }`)
        // console.log(`上个月共${ prevDaysOfMonth }天，且开始日期为：${ prevTailDaysOfMonth }号；下个月结束日期为${ nextHeadDaysOfMonth }号`)

        const [head, body, tail] = [[], [], []]

        // 上个月
        for(let day = prevTailDaysOfMonth; day <= prevDaysOfMonth; day++) {
          head.push({
            year: lastYear,
            month: lastMonth,
            week: this.getDayOfWeek(lastYear, lastMonth - 1, day),
            day,

            gray: true,
            selected: false,
            disabledGray: this.disabledGray
          })
        }

        // 本月
        for(let day = 1; day <= currDaysOfMonth; day++) {
          body.push({
            year: thisYear,
            month: thisMonth,
            week: this.getDayOfWeek(thisYear, month, day),
            day,

            gray: false,
            selected: false
          })
        }

        // 下个月
        for(let day = 1; day <= nextHeadDaysOfMonth; day++) {
          tail.push({
            year: nextYear,
            month: nextMonth,
            week: this.getDayOfWeek(nextYear, nextMonth - 1, day),
            day,

            gray: true,
            selected: false,
            disabledGray: this.disabledGray
          })
        }

        this.calendar = [...head, ...body, ...tail]

        if(!this.selectedItems.length) return

        for(let date of this.calendar) {
          for(let item of this.selectedItems) {
            if(date.year === item.year
                && date.month === item.month
                && date.day === item.day
            ) {
              date.selected = true
            }
          }
        }

        // console.log(this.calendar)
      },

      /**
       * @description 设置对外输出日期
       */ 
      _setOutputDate() {
        return {
          year: this.currentYear,
          month: this.currentMonth + 1,
          week: this.getDayOfWeek(this.currentYear, this.currentMonth, this.currentDay),
          day: this.currentDay,
          days: this.getDaysOfMonth(this.currentMonth)
        }
      },

      /**
       * @description 设置所有选中的日期
       * @param {object} value
       */ 
      _setSelectedItems(value) {
        const { selected, year, month, day } = value
        const date = '' + year + month + day

        if(selected) {
          const isRepeat = this.selectedItems.find(item => ('' + item.year + item.month + item.day) === date)

          if(!isRepeat) {
            this.selectedItems.push({ year, month, day })
          }
        }
        else {
          this.selectedItems.map((item, index) => {
            if(('' + item.year + item.month + item.day) === date) {
              this.selectedItems.splice(index, 1)
            }
          })
        }
      },

      /**
       * @description 清除选中的日期（暂时未用到）
       */ 
      _emptySelectedItems() {
        if(this.clearSelectedItems) {
          this.selectedItems = []

          for(let item of this.calendar) {
            item.selected = false
          }
        }
      }
    },

    computed: {
      yummyCalendar() {
        return {
          currentYear: this.currentYear,
          currentMonth: this.currentMonth,
          defaultValue: this.defaultValue
        }
      }
    },

    watch: {
      // 默认选中
      defaultValue: {
        handler(value) {
          if(value.length) {
            this.selectedItems = [...value]
          }
        },
        immediate: true
      },

      // 日历
      yummyCalendar: {
        handler(value, oldValue) {
          if(!oldValue || (value.currentYear !== oldValue.currentYear)) {
            this.months = this._isLeapYear(this.currentYear) ? monthsLeap : monthsCommon
          }
          this._setCalendar(this.currentYear, this.currentMonth)
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
