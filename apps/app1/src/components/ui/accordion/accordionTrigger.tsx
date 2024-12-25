"use client"

import { forwardRef, useContext, useEffect } from "react"
import clsx from "clsx"

import { AccordionItemContext } from "./accordionItem"

import scss from "./accordion.module.scss"

interface AccordionTriggerProps extends React.ComponentPropsWithoutRef<"div"> {
	children?: React.ReactNode
	className?: string
	onTrigger?: ({ isExpanded }: { isExpanded: boolean }) => void
}

export const AccordionTrigger = forwardRef<HTMLDivElement, AccordionTriggerProps>(
	function AccordionTrigger(
		{
			"aria-controls": ariaControls,
			"aria-expanded": ariaExpanded,
			children,
			className,
			id,
			role,
			tabIndex,
			onClick,
			onKeyDown,
			onTrigger,
			...props
		},
		forwardedRef
	) {
		const { isExpanded, itemId, toggleItem } = useContext(AccordionItemContext)

		useEffect(() => {
			console.log(isExpanded)
		}, [isExpanded])

		return (
			<div
				ref={forwardedRef}
				id={id || `accordion-${itemId}`}
				className={clsx(scss.accordion_trigger, className)}
				role={role || "button"}
				tabIndex={tabIndex || 0}
				aria-controls={ariaControls || `accordion-${itemId}-body`}
				aria-expanded={ariaExpanded || isExpanded}
				onClick={(evt) => {
					if (onClick) {
						onClick(evt)
					}

					if (onTrigger) {
						onTrigger({
							isExpanded: !isExpanded,
						})
					}

					toggleItem()
				}}
				onKeyDown={(evt) => {
					if (onKeyDown) {
						onKeyDown(evt)
					}

					if (evt.key === "Enter" || evt.key === " ") {
						if (onTrigger) {
							onTrigger({
								isExpanded: !isExpanded,
							})
						}

						toggleItem()
					}
				}}
				{...props}
			>
				{children}
			</div>
		)
	}
)
