"use client"
import React from 'react'
import { Fade, AttentionSeeker } from 'react-awesome-reveal'
import Button from './Button'

const LearnMoreButton = () => {
  return (
	<Fade className="z-10 w-max">
	<AttentionSeeker effect="tada" delay={1000}>
		<Button variant="secondary">Learn More</Button>
	</AttentionSeeker>
</Fade>  )
}

export default LearnMoreButton