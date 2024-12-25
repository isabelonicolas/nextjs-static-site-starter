"use client"

import { createContext, forwardRef, useCallback, useMemo, useState } from "react"
import clsx from "clsx"

import scss from "./accordion.module.scss"

interface AccordionRootContextProps {
	itemsExpanded: string[]
	toggle: (_value: string) => void
}

export const AccordionRootContext = createContext<AccordionRootContextProps>({
	itemsExpanded: [],
	toggle: (_value) => console.error("Missing AccordionRootContext Provider."),
})

interface AccordionRootProps extends React.ComponentPropsWithoutRef<"div"> {
	children?: React.ReactNode
	className?: string
	type?: "multiple" | "single"
}

export const AccordionRoot = forwardRef<HTMLDivElement, AccordionRootProps>(function AccordionRoot(
	{ children, className, type = "single", ...props },
	forwardedRef
) {
	const [itemsExpanded, setItemsExpanded] = useState<string[]>([])

	const toggleSingle = useCallback((value: string) => {
		setItemsExpanded((prevState) => (prevState.includes(value) ? [] : [value]))
	}, [])

	const toggleMultiple = useCallback((value: string) => {
		setItemsExpanded((prevState) =>
			prevState.includes(value) ? prevState.filter((item) => item !== value) : [...prevState, value]
		)
	}, [])

	const toggle = useMemo(
		() => (type === "single" ? toggleSingle : toggleMultiple),
		[type, toggleSingle, toggleMultiple]
	)

	return (
		<AccordionRootContext.Provider value={{ itemsExpanded, toggle }}>
			<div
				ref={forwardedRef}
				className={clsx(scss.accordion, className)}
				data-state-type={type}
				{...props}
			>
				{children}
			</div>
		</AccordionRootContext.Provider>
	)
})
