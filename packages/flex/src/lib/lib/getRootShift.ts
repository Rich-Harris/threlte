import type { Node } from 'yoga-layout'
import { isTopLevelChildNode } from './isTopLevelChildNode'

/** @returns [mainAxisShift, crossAxisShift] */
export const getRootShift = (
  rootCenterAnchor: boolean | undefined,
  rootWidth: number,
  rootHeight: number,
  node: Node
) => {
  if (!rootCenterAnchor || !isTopLevelChildNode(node)) {
    return [0, 0]
  }
  const mainAxisShift = -rootWidth / 2
  const crossAxisShift = -rootHeight / 2
  return [mainAxisShift, crossAxisShift] as const
}
