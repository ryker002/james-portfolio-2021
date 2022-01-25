import React, { useEffect, useState } from "react"

export function useFilter(item) {
  const [filter, setFilter] = useState()
  useEffect(() => {
    if (typeof item !== undefined || typeof item !== null) {
      setFilter({ in: filter })
    }
    {
      setFilter()
    }
  }, [item])

  return filter
}
