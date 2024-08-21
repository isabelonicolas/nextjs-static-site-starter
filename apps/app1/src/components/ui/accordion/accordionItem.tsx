"use client"

import { createContext, forwardRef, useContext, useId } from "react"
import clsx from "clsx"

import { AccordionRootContext } from "./accordionRoot"

import scss from "./accordion.module.scss"

interface AccordionItemContext {
	isExpanded: boolean
	itemId: string
	toggleItem: () => void
}

export const AccordionItemContext = createContext<AccordionItemContext>({
	isExpanded: false,
	itemId: "",
	toggleItem: () => console.error("Missing AccordionItemContext Provider."),
})

interface AccordionItemProps extends React.ComponentPropsWithoutRef<"div"> {
	children?: React.ReactNode
	className?: string
	value: string
}

export const AccordionItem = forwardRef<HTMLDivElement, AccordionItemProps>(function AccordionItem(
	{ children, className, value, ...props },
	forwardedRef
) {
	const itemId = useId()
	const { itemsExpanded, toggle } = useContext(AccordionRootContext)
	const isExpanded = itemsExpanded.includes(value)

	const toggleItem = () => {
		toggle(value)
	}

	return (
		<AccordionItemContext.Provider value={{ itemId, isExpanded, toggleItem }}>
			<div
				ref={forwardedRef}
				className={clsx(scss.accordion_item, className)}
				data-state-expanded={isExpanded}
				{...props}
			>
				{children}
			</div>
		</AccordionItemContext.Provider>
	)
})
