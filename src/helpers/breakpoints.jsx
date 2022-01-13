import { useBreakpointValue } from "@chakra-ui/react"

export function useProjectsColumns() {
  const breakpoint = useBreakpointValue({ base: 1, xs: 1, sm: 2, md: 3, lg: 4 })
  return breakpoint
}

export function useBlogColumns() {
  const breakpoint = useBreakpointValue({ base: 1, xs: 1, sm: 1, md: 3 })
  return breakpoint
}
