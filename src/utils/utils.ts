/**
 * Transform classNames with conditions to string
 */
export const clsx: (...classNames: (any | any[] | { [classNames: string]: any })[]) => string = (...args) =>
	args
		.flat()
		.map((className) => {
			if (typeof className !== "object") return className;
			if (Array.isArray(className)) return className;
			return Object.keys(className).map((key) => (!!className[key] ? key : null));
		})
		.flat()
		.filter((className) => {
			const classType = typeof className;
			const isAvailable = classType !== "boolean" && classType !== "number";
			return isAvailable ? className : null;
		})
		.filter((className) => !!className)
		.join(" ");

export const isMobile = ():boolean => window.matchMedia('(width < 992px)').matches;