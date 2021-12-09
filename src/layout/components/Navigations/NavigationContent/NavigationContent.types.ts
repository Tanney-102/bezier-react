/* Internal dependencies */
import { ChildrenComponentProps } from 'Types/ComponentProps'
import { ColumnState } from 'Layout/redux/LayoutActions'

export default interface NavigationContentProps extends ChildrenComponentProps {
  header?: React.ReactElement | null
  fixedHeader?: boolean
  stickyFooter?: React.ReactElement | null
  scrollRef?: React.Ref<HTMLDivElement>
  scrollClassName?: string
  withScroll?: boolean
  onScroll?: () => void
  onChangeWidth?: (width: number) => void

  /* LayoutState Prop */
  navigationKey: string
  layoutOption: ColumnState
}