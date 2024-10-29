import type { Props, Stage } from '@threlte/core'
import type { Component, Snippet } from 'svelte'
import type { Box3, Group, Object3D, Sphere, Vector3 } from 'three'

export interface AlignProps extends Omit<Props<Group>, 'children'> {
  /** Align the object on the x-axis. If a number between -1 and 1 is provided, it will be used as the alignment on the x-axis. */
  x?: false | number
  /** Align the object on the y-axis. If a number between -1 and 1 is provided, it will be used as the alignment on the y-axis. */
  y?: false | number
  /** Align the object on the z-axis. If a number between -1 and 1 is provided, it will be used as the alignment on the z-axis. */
  z?: false | number
  /** See https://threejs.org/docs/index.html?q=box3#api/en/math/Box3.setFromObject */
  precise?: boolean
  /** Injects a plugin in all child `<T>` components to automatically align whenever a component mounts or unmounts, defaults to false */
  auto?: boolean

  /** The objects to algin. */
  children: Snippet<[{ align: () => void; ref: Group }]>

  onalign?: (event: AlignEventData) => void
  stage?: Stage
}

type AlignEventData = {
  /** The outmost container group of the <Align> component */
  container: Object3D
  /** The width of the bounding box */
  width: number
  /** The height of the bounding box */
  height: number
  /** The depth of the bounding box */
  depth: number
  boundingBox: Box3
  boundingSphere: Sphere
  center: Vector3
  verticalAlignment: number
  horizontalAlignment: number
  depthAlignment: number
}

export type AlignExports = {
  align: () => void
}

declare const Align: Component<AlignProps, AlignExports>

export default Align
