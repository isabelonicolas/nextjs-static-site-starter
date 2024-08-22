"use client"

import { forwardRef, useContext } from "react"
import clsx from "clsx"

import { AccordionItemContext } from "./accordionItem"

import scss from "./accordion.module.scss"

interface AccordionBodyProps extends React.ComponentPropsWithoutRef<"div"> {
	children?: React.ReactNode
	className?: string
}

export const AccordionBody = forwardRef<HTMLDivElement, AccordionBodyProps>(function AccordionBody(
	{ children, className, id, "aria-labelledby": ariaLabelledBy, role = "region", ...props },
	forwardedRef
) {
	const { itemId } = useContext(AccordionItemContext)

	return (
		<div
			ref={forwardedRef}
			id={id || `accordion-${itemId}-body`}
			className={clsx(scss.accordion_body, className)}
			role={role}
			aria-labelledby={ariaLabelledBy || `accordion-${itemId}`}
			{...props}
		>
			<div>{children}</div>
		</div>
	)
})
