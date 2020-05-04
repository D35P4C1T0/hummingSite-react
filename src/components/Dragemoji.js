import React from 'react'
import { motion } from 'framer-motion'

export const Dragemoji = (props) => {
  return (
    <motion.div drag>
      <span>{props.emoji}</span>
    </motion.div>
  )
}
