"use client"

import { Accordion } from "@/components/ui/accordion/accordion"
import { Button } from "@/components/ui/button/button"

import scss from "./page.module.scss"
import { BasicAccordion } from "@/components/BasicAccordion/BasicAccordion"

export default function Page() {
	return (
		<div className={scss.wrapper}>
			<div className={scss.container}>
				<div className={scss.content}>
					<h1 className={scss.headline}>Lorem ipsum dolor</h1>
					<p className={scss.subheadline}>Consectetur adipiscing elit sed do</p>
					<div className={scss.body}>
						<p>
							Eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
							quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
							Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
							nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
							officia deserunt mollit anim id est laborum.
						</p>
						<BasicAccordion
							items={[
								{
									title: "Lorem ipsum dolor?",
									body: "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
								},
								{
									title: "Lorem ipsum dolor?",
									body: "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
								},
								{
									title: "Lorem ipsum dolor?",
									body: "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
								},
								{
									title: "Lorem ipsum dolor?",
									body: "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
								},
							]}
						/>
					</div>
					<div className={scss.cta_wrapper}>
						<Button as="nextlink" href="#get-started" color="primary">
							Get Started
						</Button>
					</div>
				</div>
			</div>
		</div>
	)
}
