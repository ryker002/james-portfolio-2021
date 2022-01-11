import { Box, Heading, useColorModeValue } from "@chakra-ui/react"
import React from "react"

export function GhostWrapper(props) {
  const pre = useColorModeValue("gray.100", "gray.800")
  return (
    <Box as="section">
      <Heading
        as="h1"
        size="xl"
        textAlign={"center"}
        color={"primary"}
        textTransform={"uppercase"}
      >
        {props.title}
      </Heading>
      {/* The main post content */}
      <Box
        as="section"
        sx={{
          p: {
            margin: "8px 0",
            textIndent: 25,
          },
          figure: {
            margin: "15px auto",
            img: {
              borderRadius: "md",
              boxShadow: "md",
            },
            pre: {
              background: pre,
              code: {
                background: "transparent",
              },
            },
            figcaption: {
              fontSize: "sm",
              opacity: 0.7,
              textAlign: "center",
              padding: 3,
            },
            "&.kg-card.kg-bookmark-card": {
              background: pre,
              borderRadius: "md",
              ".kg-bookmark-container": {
                display: "flex",
                justifyContent: "space-between",
                ".kg-bookmark-content": {
                  flex: 2,
                  padding: 5,
                  ".kg-bookmark-title": {
                    fontWeight: "medium",
                  },
                  ".kg-bookmark-description": {
                    fontSize: "sm",
                    opacity: 0.8,
                  },
                  ".kg-bookmark-metadata": {
                    marginTop: 5,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    ".kg-bookmark-icon": {
                      width: 30,
                      margin: 0,
                    },
                    ".kg-bookmark-author": {
                      fontSize: "sm",
                      fontWeight: "medium",
                    },
                  },
                },
                ".kg-bookmark-thumbnail": {
                  flex: 1,
                  img: {
                    height: "100%",
                    margin: 0,
                    objectFit: "cover",
                  },
                },
              },
            },
            "&.kg-card.kg-embed-card": {
              iframe: {
                width: "100%",
                minHeight: 300,
                borderRadius: "md",
              },
            },
            "&.kg-card.kg-gallery-card": {
              ".kg-gallery-container": {
                ".kg-gallery-row": {
                  display: "grid",
                  gap: 15,
                  gridTemplateColumns: "repeat(2, 1fr)",
                  img: {
                    flex: 1,
                    height: "100%",
                    objectFit: "cover",
                  },
                },
              },
            },
            "&.kg-width-wide": {
              marginLeft: "calc(-30vw + 50%)",
              marginRight: "calc(-30vw + 50%)",
            },
            "&.kg-width-full": {
              marginLeft: "calc(-50vw + 50%)",
              marginRight: "calc(-50vw + 50%)",
              width: "100vw",
            },
          },
          blockquote: {
            background: "primary",
            color: "white",
            padding: 3,
            borderRadius: "md",
          },
        }}
        dangerouslySetInnerHTML={{ __html: props.html }}
      />
    </Box>
  )
}
