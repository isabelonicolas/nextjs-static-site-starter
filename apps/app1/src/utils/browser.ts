/**
 * Checks if the code is running in a browser environment.
 *
 * @returns {boolean} Returns `true` if running in a browser, `false` otherwise.
 */
export function isBrowser() {
	return typeof window !== "undefined"
}

/**
 * Smoothly scrolls the page to the specified element if it exists.
 *
 * @param {HTMLElement | null} element - The target element to scroll to.
 */
export const scrollToElement = (element: HTMLElement | null) => {
	if (!isBrowser()) return

	if (!element) return

	element?.focus({ preventScroll: true })

	element.scrollIntoView({
		behavior: "smooth",
	})
}

/**
 * Scrolls the page smoothly back to top and and sets the focus at the top of the page
 */
export function scrollToTop() {
	if (!isBrowser()) return

	scrollToElement(document.querySelector("#top"))
}

/**
 * Retrieves URL parameters from the current window's location.
 *
 * @returns {Record<string, string>} An object containing key-value pairs of URL parameters.
 */
export function getUrlParameters() {
	if (!isBrowser()) return

	const params = new URLSearchParams(window.location.search)

	return Object.fromEntries(params)
}

/**
 * Retrieves the value of a specific URL parameter by its key.
 *
 * @param {string} key - The key of the URL parameter to retrieve.
 * @returns {string | undefined} The value of the specified URL parameter, or undefined if the parameter is not found.
 */
export function getUrlParameterValue(key: string) {
	if (!isBrowser()) return

	const urlParameters = getUrlParameters()

	if (!urlParameters) return

	const match = Object.keys(urlParameters).find((k) => k.toLowerCase() === key.toLowerCase())

	return match ? urlParameters[match] : undefined
}

/**
 * Retrieves the value of a cookie by its name.
 *
 * @param {string} name - The name of the cookie to retrieve.
 * @returns {string | undefined} The value of the cookie if found, or undefined if the cookie is not present.
 */
export function getCookie(name: string) {
	if (!isBrowser()) return

	const value = `; ${document.cookie}`
	const parts = value.split(`; ${name}=`)

	if (parts.length === 2) return parts.pop()?.split(";").shift()
}
