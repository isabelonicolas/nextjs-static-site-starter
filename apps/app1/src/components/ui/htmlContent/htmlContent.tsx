import { forwardRef } from "react"
import clsx from "clsx"

import scss from "./htmlContent.module.scss"

interface HtmlContentProps {
	children?: React.ReactNode
	className?: string
	text?: string
}

export const HtmlContent = forwardRef<HTMLDivElement, HtmlContentProps>(function HtmlContent(
	{ className, text, ...props },
	forwardedRef
) {
	if (!text) {
		return null
	}

	return (
		<div
			ref={forwardedRef}
			className={clsx(scss.wrapper, className)}
			dangerouslySetInnerHTML={{ __html: text }}
			{...props}
		/>
	)
})
