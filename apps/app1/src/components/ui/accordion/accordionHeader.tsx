"use client"

import { forwardRef } from "react"
import clsx from "clsx"

import scss from "./accordion.module.scss"

interface AccordionHeaderProps extends React.ComponentPropsWithoutRef<"div"> {
	children?: React.ReactNode
	className?: string
}

export const AccordionHeader = forwardRef<HTMLDivElement, AccordionHeaderProps>(
	function AccordionHeader({ children, className, ...props }, forwardedRef) {
		return (
			<div ref={forwardedRef} className={clsx(scss.accordion_header, className)} {...props}>
				{children}
			</div>
		)
	}
)
