import { Accordion } from "@/components/ui/accordion/accordion"

import scss from "./BasicAccordion.module.scss"

interface BasicAccordionProps {
	items: {
		title: string
		body: string
	}[]
}

export function BasicAccordion({ items }: BasicAccordionProps) {
	if (items.length <= 0) {
		return null
	}

	return (
		<Accordion.Root className={scss.accordion}>
			{items.map((item, itemIndex) => (
				<Accordion.Item
					key={`accordion${itemIndex}`}
					className={scss.accordion_item}
					value={`accordion${itemIndex}`}
				>
					<Accordion.Header className={scss.accordion_header}>
						<Accordion.Trigger className={scss.accordion_trigger}>
							<span>Lorem ipsum dolor?</span>
							<span className={scss.accordion_chevron}>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 40.97 185.35 103.4"
									display="block"
									width="1em"
									height="1em"
								>
									<path
										fill="currentColor"
										d="M92.672 144.373a10.707 10.707 0 0 1-7.593-3.138L3.145 59.301c-4.194-4.199-4.194-10.992 0-15.18a10.72 10.72 0 0 1 15.18 0l74.347 74.341 74.347-74.341a10.72 10.72 0 0 1 15.18 0c4.194 4.194 4.194 10.981 0 15.18l-81.939 81.934a10.694 10.694 0 0 1-7.588 3.138z"
									/>
								</svg>
							</span>
						</Accordion.Trigger>
					</Accordion.Header>
					<Accordion.Body className={scss.accordion_body}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
						incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
						exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
						dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
						Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
						mollit anim id est laborum.
					</Accordion.Body>
				</Accordion.Item>
			))}
		</Accordion.Root>
	)
}
