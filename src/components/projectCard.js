import { Box, Image, Link } from "@chakra-ui/react"
import React from "react"

export function ProjectCard({ image, link }) {
  return (
    <Box
      rounded={"md"}
      boxShadow={"md"}
      background={"gray.800"}
      overflow={"hidden"}
      transition={"0.3s ease-in-out"}
      _hover={{
        transform: "translateY(-10px)",
      }}
    >
      <Link>
        <Image src={image} height={"100%"} objectFit={"cover"} width={"100%"} />
      </Link>
    </Box>
  )
}

ProjectCard.defaultProps = {
  image: "https://source.unsplash.com/random",
}
