import {
  Box,
  Divider,
  Flex,
  Grid,
  GridItem,
  Heading,
  List,
  ListIcon,
  ListItem,
  Text,
  useColorModeValue,
  SimpleGrid,
  Tooltip,
  Center,
} from "@chakra-ui/react"
import React from "react"
import { AiFillHtml5, AiFillCustomerService } from "react-icons/ai"
import { BsWordpress } from "react-icons/bs"
import { GrGatsbyjs, GrReactjs } from "react-icons/gr"
import {
  MdCheckCircle,
  MdManageAccounts,
  MdOutlineAttachMoney,
} from "react-icons/md"
import { DiCss3, DiGitBranch } from "react-icons/di"
import { SiPhp, SiNextdotjs, SiNodedotjs, SiJavascript } from "react-icons/si"

export function Resume() {
  const color = useColorModeValue("gray.100", "gray.800")
  const defaultBoxProps = {
    borderRadius: "md",
    background: color,
    boxShadow: "md",
    padding: 5,
  }
  return (
    <>
      <Heading as="h2" id="#blog">
        Resume
      </Heading>
      <Divider />
      <Grid
        templateRows="repeat(3, 1fr)"
        templateColumns="repeat(4, 1fr)"
        gridGap={5}
        marginBottom={5}
        marginTop={5}
      >
        <GridItem colSpan={2} rowSpan={3} {...defaultBoxProps}>
          <Heading as="h3">Education</Heading>
          <Divider mb={5} />
          <Box id="MaryvilleUniversity">
            <Heading as="h4" size="sm" marginBottom={0} color={"primary"}>
              Maryville University
            </Heading>
            <Flex justifyContent={"space-between"}>
              <Text fontSize={"sm"} opacity={0.8}>
                Bachelor of Fine Arts
              </Text>
              <Text fontSize={"sm"} opacity={0.8}>
                GPA 3.2
              </Text>
            </Flex>
            <Text fontSize={"sm"} fontWeight={500} marginBottom={0}>
              Notable Courses
            </Text>
            <List
              spacing={1}
              size="sm"
              marginLeft={0}
              marginTop={2}
              marginBottom={2}
            >
              <ListItem
                fontSize={"sm"}
                alignItems={"center"}
                display={"flex"}
                mb={0}
              >
                <ListIcon as={MdCheckCircle} color="primary" />
                Web Design I & II
              </ListItem>
              <ListItem
                fontSize={"sm"}
                alignItems={"center"}
                display={"flex"}
                mb={0}
              >
                <ListIcon as={MdCheckCircle} color="primary" />
                Interactive Applications I & II
              </ListItem>
              <ListItem
                fontSize={"sm"}
                alignItems={"center"}
                display={"flex"}
                mb={0}
              >
                <ListIcon as={MdCheckCircle} color="primary" />
                UI / UX Design
              </ListItem>
            </List>
            <Flex justifyContent={"space-between"}>
              <Text fontSize={"sm"} fontWeight={500} marginBottom={0}>
                Awards & Honors
              </Text>
              <Text fontSize={"sm"} marginBottom={0}>
                Cum Laude
              </Text>
            </Flex>
            <Flex justifyContent={"space-between"}>
              <Text fontSize={"sm"} fontWeight={500} marginBottom={0}>
                Graduated
              </Text>
              <Text fontSize={"sm"} marginBottom={0}>
                May 2020
              </Text>
            </Flex>
          </Box>
          <Box id="WildwoodCommunityCollege" marginTop={5}>
            <Heading as="h4" size="sm" marginBottom={0} color="primary">
              Wildwood Community College
            </Heading>
            <Flex justifyContent={"space-between"}>
              <Text fontSize={"sm"} opacity={0.8}>
                General Studies
              </Text>
            </Flex>
            <Text fontSize={"sm"} fontWeight={500} marginBottom={0}>
              Notable Courses
            </Text>
            <List
              spacing={1}
              size="sm"
              marginLeft={0}
              marginTop={2}
              marginBottom={2}
            >
              <ListItem
                fontSize={"sm"}
                alignItems={"center"}
                display={"flex"}
                mb={0}
              >
                <ListIcon as={MdCheckCircle} color="primary" />
                Web Design
              </ListItem>
              <ListItem
                fontSize={"sm"}
                alignItems={"center"}
                display={"flex"}
                mb={0}
              >
                <ListIcon as={MdCheckCircle} color="primary" />
                Introduction to Database Management
              </ListItem>
              <ListItem
                fontSize={"sm"}
                alignItems={"center"}
                display={"flex"}
                mb={0}
              >
                <ListIcon as={MdCheckCircle} color="primary" />
                Linux
              </ListItem>
              <ListItem
                fontSize={"sm"}
                alignItems={"center"}
                display={"flex"}
                mb={0}
              >
                <ListIcon as={MdCheckCircle} color="primary" />
                Introduction to Programming (C#)
              </ListItem>
            </List>
          </Box>
          <Box id="ParkwaySouthHigh" marginTop={5}>
            <Heading as="h4" size="sm" marginBottom={0} color="primary">
              Parkway South High
            </Heading>
            <Flex justifyContent={"space-between"}>
              <Text fontSize={"sm"} opacity={0.8}>
                High School
              </Text>
            </Flex>
            <Text fontSize={"sm"} fontWeight={500} marginBottom={0}>
              Notable Courses
            </Text>
            <List
              spacing={1}
              size="sm"
              marginLeft={0}
              marginTop={2}
              marginBottom={2}
            >
              <ListItem
                fontSize={"sm"}
                alignItems={"center"}
                display={"flex"}
                mb={0}
              >
                <ListIcon as={MdCheckCircle} color="primary" />
                Web Design
              </ListItem>
            </List>
          </Box>
        </GridItem>
        <GridItem colSpan={1} rowSpan={2} {...defaultBoxProps} id="muv">
          <Heading as="h4" size="sm" marginBottom={0} color={"primary"}>
            müv
          </Heading>
          <Flex justifyContent={"space-between"}>
            <Text fontSize={"sm"} opacity={0.8}>
              Lead Developer
            </Text>
            <Text
              fontSize={"sm"}
              color="primary"
              fontWeight="medium"
              opacity={1}
            >
              Sep 2019
            </Text>
          </Flex>
          <Text fontSize={"sm"} fontWeight={500} marginBottom={0}>
            Responsibilities
          </Text>
          <List
            spacing={0}
            size="sm"
            marginLeft={0}
            marginTop={2}
            marginBottom={2}
          >
            <ListItem
              fontSize={"xs"}
              alignItems={"center"}
              display={"flex"}
              mb={0}
            >
              <ListIcon as={MdCheckCircle} color="primary" />
              Lead in the creation of the developmental process.
            </ListItem>
            <ListItem
              fontSize={"xs"}
              alignItems={"center"}
              display={"flex"}
              mb={0}
            >
              <ListIcon as={MdCheckCircle} color="primary" />
              Transfer designed websites into progressive and responsive web
              applications.
            </ListItem>
            <ListItem
              fontSize={"xs"}
              alignItems={"center"}
              display={"flex"}
              mb={0}
            >
              <ListIcon as={MdCheckCircle} color="primary" />
              Develop & Setup Backend services for the client.
            </ListItem>
            <ListItem
              fontSize={"xs"}
              alignItems={"center"}
              display={"flex"}
              mb={0}
            >
              <ListIcon as={MdCheckCircle} color="primary" />
              Continuously learn in order to create growth.
            </ListItem>
            <ListItem
              fontSize={"xs"}
              alignItems={"center"}
              display={"flex"}
              mb={0}
            >
              <ListIcon as={MdCheckCircle} color="primary" />
              Troubleshoot & Fix problems that occur with websites.
            </ListItem>
          </List>
          <Flex justifyContent={"space-between"}>
            <Text fontSize={"sm"} fontWeight={500} marginBottom={0}>
              Skills
            </Text>
            <SimpleGrid
              marginBottom={0}
              gridGap={3}
              columns={6}
              rows={2}
              justifyContent={"flex-end"}
            >
              <Tooltip label="Wordpress" hasArrow fontSize="md">
                <span>
                  <BsWordpress />
                </span>
              </Tooltip>
              <Tooltip label="Gatsby JS" hasArrow fontSize="md">
                <span>
                  <GrGatsbyjs />
                </span>
              </Tooltip>
              <Tooltip label="React JS" hasArrow fontSize="md">
                <span>
                  <GrReactjs />
                </span>
              </Tooltip>
              <Tooltip label="HTML5" hasArrow fontSize="md">
                <span>
                  <AiFillHtml5 />
                </span>
              </Tooltip>
              <Tooltip label="CSS3" hasArrow fontSize="md">
                <span>
                  <DiCss3 />
                </span>
              </Tooltip>
              <Tooltip label="PHP" hasArrow fontSize="md">
                <span>
                  <SiPhp />
                </span>
              </Tooltip>
              <Tooltip label="Next JS" hasArrow fontSize="md">
                <span>
                  <SiNextdotjs />
                </span>
              </Tooltip>
              <Tooltip label="Node JS" hasArrow fontSize="md">
                <span>
                  <SiNodedotjs />
                </span>
              </Tooltip>
              <Tooltip label="Javascript" hasArrow fontSize="md">
                <span>
                  <SiJavascript />
                </span>
              </Tooltip>
              <Tooltip label="Git" hasArrow fontSize="md">
                <span>
                  <DiGitBranch />
                </span>
              </Tooltip>
            </SimpleGrid>
          </Flex>
        </GridItem>
        <GridItem colSpan={1} rowSpan={2} {...defaultBoxProps} id="muv">
          <Heading as="h4" size="sm" marginBottom={0} color={"primary"}>
            Jockey
          </Heading>
          <Flex justifyContent={"space-between"}>
            <Text fontSize={"sm"} opacity={0.8}>
              Key Holder
            </Text>
            <Text fontSize={"sm"} opacity={0.8}>
              Sep 2015 - May 2020
            </Text>
          </Flex>
          <Text fontSize={"sm"} fontWeight={500} marginBottom={0}>
            Responsibilities
          </Text>
          <List
            spacing={0}
            size="sm"
            marginLeft={0}
            marginTop={2}
            marginBottom={2}
          >
            <ListItem
              fontSize={"xs"}
              alignItems={"center"}
              display={"flex"}
              mb={0}
            >
              <ListIcon as={MdCheckCircle} color="primary" />
              Manage a team and ensure daily tasks are being completed.
            </ListItem>
            <ListItem
              fontSize={"xs"}
              alignItems={"center"}
              display={"flex"}
              mb={0}
            >
              <ListIcon as={MdCheckCircle} color="primary" />
              Sell & Upsell product to customers.
            </ListItem>
          </List>
          <Flex justifyContent={"space-between"}>
            <Text fontSize={"sm"} fontWeight={500} marginBottom={0}>
              Skills
            </Text>
            <SimpleGrid
              marginBottom={0}
              gridGap={3}
              columns={6}
              rows={2}
              justifyContent={"flex-end"}
            >
              <Tooltip label="Customer Service" hasArrow fontSize="md">
                <span>
                  <AiFillCustomerService />
                </span>
              </Tooltip>
              <Tooltip label="Management" hasArrow fontSize="md">
                <span>
                  <MdManageAccounts />
                </span>
              </Tooltip>
              <Tooltip label="Sales" hasArrow fontSize="md">
                <span>
                  <MdOutlineAttachMoney />
                </span>
              </Tooltip>
            </SimpleGrid>
          </Flex>
        </GridItem>
        <GridItem {...defaultBoxProps} colSpan={2} rowSpan={1}>
          <Heading as="h4" size="sm" marginBottom={0} color={"primary"}>
            Skills
          </Heading>
          <SimpleGrid
            marginBottom={0}
            gridGap={3}
            columns={6}
            rows={2}
            justifyContent={"flex-end"}
            marginTop={5}
          >
            <Tooltip label="Wordpress" hasArrow fontSize="md">
              <Center as="span">
                <BsWordpress size="2em" />
              </Center>
            </Tooltip>
            <Tooltip label="Gatsby JS" hasArrow fontSize="md">
              <Center as="span">
                <GrGatsbyjs size="2em" />
              </Center>
            </Tooltip>
            <Tooltip label="React JS" hasArrow fontSize="md">
              <Center as="span">
                <GrReactjs size="2em" />
              </Center>
            </Tooltip>
            <Tooltip label="HTML5" hasArrow fontSize="md">
              <Center as="span">
                <AiFillHtml5 size="2em" />
              </Center>
            </Tooltip>
            <Tooltip label="CSS3" hasArrow fontSize="md">
              <Center as="span">
                <DiCss3 size="2em" />
              </Center>
            </Tooltip>
            <Tooltip label="PHP" hasArrow fontSize="md">
              <Center as="span">
                <SiPhp size="2em" />
              </Center>
            </Tooltip>
            <Tooltip label="Next JS" hasArrow fontSize="md">
              <Center as="span">
                <SiNextdotjs size="2em" />
              </Center>
            </Tooltip>
            <Tooltip label="Node JS" hasArrow fontSize="md">
              <Center as="span">
                <SiNodedotjs size="2em" />
              </Center>
            </Tooltip>
            <Tooltip label="Javascript" hasArrow fontSize="md">
              <Center as="span">
                <SiJavascript size="2em" />
              </Center>
            </Tooltip>
            <Tooltip label="Git" hasArrow fontSize="md">
              <Center as="span">
                <DiGitBranch size="2em" />
              </Center>
            </Tooltip>
            <Tooltip label="Customer Service" hasArrow fontSize="md">
              <Center as="span">
                <AiFillCustomerService size="2em" />
              </Center>
            </Tooltip>
            <Tooltip label="Management" hasArrow fontSize="md">
              <Center as="span">
                <MdManageAccounts size="2em" />
              </Center>
            </Tooltip>
            <Tooltip label="Sales" hasArrow fontSize="md">
              <Center as="span">
                <MdOutlineAttachMoney size="2em" />
              </Center>
            </Tooltip>
          </SimpleGrid>
        </GridItem>
      </Grid>
    </>
  )
}
