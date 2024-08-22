import { Accordion } from "@/components/ui/accordion/accordion"

import scss from "./BasicAccordion.module.scss"
import { HtmlContent } from "../ui/htmlContent/htmlContent"

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
							<span
								className={scss.accordion_title}
								dangerouslySetInnerHTML={{ __html: item.title }}
							/>
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
					<Accordion.Body>
						<HtmlContent className={scss.accordion_body_inner} text={item.body} />
					</Accordion.Body>
				</Accordion.Item>
			))}
		</Accordion.Root>
	)
}
