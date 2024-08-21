"use client"

import { ComponentPropsWithoutRef, forwardRef } from "react"
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
	ComponentPropsWithoutRef<"a"> & {
		as: "anchor"
	}

type ButtonAsButtonType = BaseButtonType &
	ComponentPropsWithoutRef<"button"> & {
		as: "button"
	}

type ButtonAsLinkType = BaseButtonType &
	ComponentPropsWithoutRef<"a"> & {
		as: "nextlink"
	}

export type ButtonProps = ButtonAsAnchorType | ButtonAsButtonType | ButtonAsLinkType

type ButtonRefProps = HTMLAnchorElement | HTMLButtonElement

export const Button = forwardRef<ButtonRefProps, ButtonProps>(function Button(
	{ as, children, className, iconPrefix, iconSuffix, color, ...props },
	forwardedRef
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
		const anchorProps = props as ComponentPropsWithoutRef<"a">
		const anchorRef = forwardedRef as React.Ref<HTMLAnchorElement>

		return (
			<a ref={anchorRef} className={btnClassName} data-state-color={color} {...anchorProps}>
				{buttonContent()}
			</a>
		)
	}

	if (as === "button") {
		const { type = "button", ...buttonProps } = props as ComponentPropsWithoutRef<"button">
		const buttonRef = forwardedRef as React.Ref<HTMLButtonElement>

		return (
			<button
				ref={buttonRef}
				className={btnClassName}
				type={type}
				data-state-color={color}
				{...buttonProps}
			>
				{buttonContent()}
			</button>
		)
	}

	if (as === "nextlink") {
		const linkProps = props as ComponentPropsWithoutRef<"a">
		const linkRef = forwardedRef as React.Ref<HTMLAnchorElement>

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
