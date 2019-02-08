import { Component, Vue } from 'vue-property-decorator'

const ALL = 2
@Component
export default class Rating extends Vue {
  private selectType: number = ALL
  private onlyContent: boolean = true

  get computedRatings() {
    const ret: any = []
    // mixins文件会和继承mixins的类合并，ratings在food.vue里面有定义
    // @ts-ignore
    this.ratings.forEach((rating: any) => {
      if (this.onlyContent && !rating.text) {
        return
      }
      if (this.selectType === ALL || rating.rateType === this.selectType) {
        ret.push(rating)
      }
    })
    return ret
  }

  private onSelect(type: any) {
    this.selectType = type
  }
  private onToggle() {
    this.onlyContent = !this.onlyContent
  }
}
