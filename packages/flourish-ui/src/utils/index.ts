/**
 * Merges two className strings in the case that a className is given, if not it returns just the defaultString
 */
export const classMerge = (
  defaultString: string,
  className?: string
): string => (className ? `${defaultString} ${className}` : defaultString)
