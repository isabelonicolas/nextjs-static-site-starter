"use client"

import { forwardRef } from "react"
import clsx from "clsx"

import scss from "./accordion.module.scss"

interface AccordionHeaderProps extends React.ComponentPropsWithoutRef<"div"> {
	children?: React.ReactNode
	className?: string
}

export const AccordionHeader = forwardRef<HTMLDivElement, AccordionHeaderProps>(
	function AccordionHeader({ children, className, ...props }, ref) {
		return (
			<div ref={ref} className={clsx(scss.accordion_header, className)} {...props}>
				{children}
			</div>
		)
	}
)