"use client"

import { forwardRef } from "react"
import Link from "next/link"
import clsx from "clsx"

import scss from "./button.module.scss"

type BaseButtonType = {
	children?: React.ReactNode
	iconPrefix?: React.ReactNode
	iconSuffix?: React.ReactNode
	color?: "primary" | "dark" | "outline-dark"
}

type ButtonAsAnchorType = BaseButtonType &
	React.AnchorHTMLAttributes<HTMLAnchorElement> & {
		as: "anchor"
	}

type ButtonAsButtonType = BaseButtonType &
	React.ButtonHTMLAttributes<HTMLButtonElement> & {
		as: "button"
	}

type ButtonAsLinkType = BaseButtonType &
	React.AnchorHTMLAttributes<HTMLAnchorElement> & {
		as: "link"
	}

export type ButtonProps = ButtonAsAnchorType | ButtonAsButtonType | ButtonAsLinkType

type ButtonRefProps = HTMLAnchorElement | HTMLButtonElement

export const Button = forwardRef<ButtonRefProps, ButtonProps>(function Button(
	{ as, children, className, iconPrefix, iconSuffix, color, ...props },
	ref
) {
	const btnClassName = clsx(scss.btn, className)

	const buttonContent = () => {
		return (
			<>
				{iconPrefix && <span className={scss.btn_icon_prefix}>{iconPrefix}</span>}
				{children && <span className={scss.btn_label}>{children}</span>}
				{iconSuffix && <span className={scss.btn_icon_suffix}>{iconSuffix}</span>}
			</>
		)
	}

	if (as === "anchor") {
		const anchorProps = props as React.AnchorHTMLAttributes<HTMLAnchorElement>
		const anchorRef = ref as React.Ref<HTMLAnchorElement>

		return (
			<a ref={anchorRef} className={btnClassName} data-state-color={color} {...anchorProps}>
				{buttonContent()}
			</a>
		)
	}

	if (as === "button") {
		const { type, ...buttonProps } = props as React.ButtonHTMLAttributes<HTMLButtonElement>
		const buttonRef = ref as React.Ref<HTMLButtonElement>

		return (
			<button
				ref={buttonRef}
				className={btnClassName}
				type={type || "button"}
				data-state-color={color}
				{...buttonProps}
			>
				{buttonContent()}
			</button>
		)
	}

	if (as === "link") {
		const linkProps = props as React.AnchorHTMLAttributes<HTMLAnchorElement>
		const linkRef = ref as React.Ref<HTMLAnchorElement>

		return (
			<Link href={linkProps.href || ""} passHref legacyBehavior>
				<a ref={linkRef} className={btnClassName} data-state-color={color} {...linkProps}>
					{buttonContent()}
				</a>
			</Link>
		)
	}

	return null
})
