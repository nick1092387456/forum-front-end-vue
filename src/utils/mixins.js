import moment from 'moment'

export const fromNowFilter = {
  methods: {
    fromNow(dateTime) {
      if (!dateTime) {
        return '-'
      }
      // 使用 moment 提供的 fromNow 方法
      return moment(dateTime).fromNow()
    },
  },
}

export const emptyImageFilter = {
  methods: {
    emptyImage(src) {
      return src || 'https://via.placeholder.com/350x220/DFDFDF?text=No+Image'
    },
  },
}
