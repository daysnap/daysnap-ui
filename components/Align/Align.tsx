
import React from 'react'
import classnames from 'classnames'
import { } from 'dom-align'
import { createPrefixCls } from '../utils/create'

export interface AlignProps {
  className?: string
}
const d: React.ForwardRefRenderFunction<any>

const Align: React.FC<AlignProps> = ({
  className,
  ...restProps
}) => {

  const cls = createPrefixCls('align')
  const classes = classnames(
    `${cls}`,
    className,
  )

  return (
    <div
      {...restProps}
      className={classes}
    />
  )
}

export default Align

