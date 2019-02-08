import { Component, Vue } from 'vue-property-decorator'
const EVENT_SHOW = 'show'
const EVENT_HIDE = 'hide'
@Component
export default class Popup extends Vue {
  public visible = false

  public show() {
    this.visible = true
    this.$emit(EVENT_SHOW)
  }

  public hide() {
    this.visible = false
    this.$emit(EVENT_HIDE)
  }
}
