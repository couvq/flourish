/**
 * Merges any number of strings with a default string
 */
export const classMerge = (
  defaultString: string,
  ...args: Array<string | undefined>
): string => {
  for (let i = 0; i < args.length; i++) {
    if (args[i]) defaultString += ` ${args[i]}`
  }
  return defaultString
}
