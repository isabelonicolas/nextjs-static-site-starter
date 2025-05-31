"use client"

import { ComponentProps } from "react"
import Link from "next/link"
import clsx from "clsx"

import scss from "./button.module.scss"

type BaseButtonType = {
	children?: React.ReactNode
	color?: "primary" | "dark" | "outline-dark"
	iconPrefix?: React.ReactNode
	iconSuffix?: React.ReactNode
}

type ButtonAsAnchorType = ComponentProps<"a"> &
	BaseButtonType & {
		as: "anchor"
	}

type ButtonAsButtonType = ComponentProps<"button"> &
	BaseButtonType & {
		as: "button"
	}

type ButtonAsLinkType = ComponentProps<"a"> &
	BaseButtonType & {
		as: "nextlink"
	}

type ButtonProps = ButtonAsAnchorType | ButtonAsButtonType | ButtonAsLinkType

export function Button({
	as,
	children,
	className,
	color,
	iconPrefix,
	iconSuffix,
	...props
}: ButtonProps) {
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

	switch (as) {
		case "anchor": {
			const anchorProps = props as ComponentProps<"a">

			return (
				<a className={btnClassName} data-state-color={color} {...anchorProps}>
					{buttonContent()}
				</a>
			)
		}

		case "button": {
			const { type, ...buttonProps } = props as ComponentProps<"button">

			return (
				<button
					className={btnClassName}
					type={type || "button"}
					data-state-color={color}
					{...buttonProps}
				>
					{buttonContent()}
				</button>
			)
		}

		case "nextlink": {
			const { href, ...anchorProps } = props as ComponentProps<"a">

			return (
				<Link href={href || ""} className={btnClassName} data-state-color={color} {...anchorProps}>
					{buttonContent()}
				</Link>
			)
		}

		default: {
			return null
		}
	}
}
