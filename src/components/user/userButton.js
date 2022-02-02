import React, { useRef } from "react"
import {
  IconButton,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  Stack,
  InputGroup,
  InputLeftElement,
  Input,
  Button,
} from "@chakra-ui/react"
import { FaUserAlt, FaLock } from "react-icons/fa"
import firebase from "gatsby-plugin-firebase"
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth"
import { useAuthState } from "react-firebase-hooks/auth"

export function LoginButton() {
  const auth = getAuth(firebase)
  // const [userName, setUserName] = useState();
  // const [password, setPassword] = useState();
  const username = useRef()
  const password = useRef()
  const login = () => {
    console.log(username.current.target.value)
    console.log(password.current.target.value)
    // signInWithEmailAndPassword(auth, "test@test.com", "password")
  }

  const logout = () => {
    signOut(auth)
  }
  const [user, loading, error] = useAuthState(auth)
  return (
    <Popover>
      <PopoverTrigger>
        <IconButton
          colorScheme="transparent"
          onClick={null}
          color="white"
          icon={<FaUserAlt size="22" />}
        />
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader>Login</PopoverHeader>
        <PopoverBody as="form">
          <Stack spacing={4}>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<FaUserAlt color="gray.300" />}
              />
              <Input
                type="email"
                placeholder="email@address.com"
                ref={username}
              />
            </InputGroup>

            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<FaLock color="gray.300" />}
              />
              <Input type="password" ref={password} />
            </InputGroup>
            <Button onClick={login}>Login</Button>
          </Stack>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  )
}
