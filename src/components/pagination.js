import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { Button, ButtonGroup } from "@chakra-ui/react"

const Pagination = ({ pageContext }) => {
  const { previousPagePath, nextPagePath, humanPageNumber, numberOfPages } =
    pageContext

  return (
    <ButtonGroup
      variant="outline"
      className="pagination"
      role="navigation"
      mt={3}
      spacing={6}
    >
      {previousPagePath && (
        <Button as={Link} to={previousPagePath} rel="prev">
          Previous
        </Button>
      )}
      {numberOfPages > 1 && (
        <Button className="pagination-location" disabled>
          Page {humanPageNumber} of {numberOfPages}
        </Button>
      )}

      {nextPagePath && (
        <Button as={Link} to={previousPagePath} to={nextPagePath} rel="next">
          Next
        </Button>
      )}
    </ButtonGroup>
  )
}

Pagination.propTypes = {
  pageContext: PropTypes.object.isRequired,
}

export default Pagination
