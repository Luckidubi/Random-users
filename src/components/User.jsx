import { Box, Text, Image } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function User({
  imgUrl,
  title,
  first,
  last,
  phone,
  email,
  location,
  country,
  username,
}) {
  const navigate = useNavigate();

  return (
    <div>
      <Box
        display="flex"
        overflow="clip"
        flexDirection="row"
        alignItems="center"
        p={{ base: 4, sm: 4, md: "24px" }}
        gap="8px"
        w={{ base: "320px", md: "360px", xl: 370 }}
        h={{ md: "auto" }}
        bg="#FBFCFF"
        boxShadow="lg"
        borderRadius="16px"
        mb={{ base: 4, sm: 6 }}
        onClick={() => navigate(`/${username}`)}
        _hover={{ boxShadow: "2xl", cursor: "pointer" }}
      >
        <Image
          borderRadius="full"
          boxSize="97px"
          src={imgUrl}
          alt="User Image"
          order={0}
        />

        <Box
          display="flex"
          flexDirection="column"
          alignItems="flex-start"
          gap="14px"
          h={{ md: "140px" }}
          flex="none"
          order={1}
          p={{ md: 13 }}
        >
          <Box
            display="flex"
            flexDirection="column"
            alignItems="flex-start"
            p="20px 0px 0px"
            gap="4px"
            textOverflow="hidden"
          >
            <Box
              fontWeight="bold"
              fontSize={{ base: 12, md: 14, lg: 16 }}
              noOfLines={1}
            >
              {title}
              {""} {first} {last}
            </Box>
            <Box fontSize={14}>
              {location}
              {", "}
              {country}
            </Box>
          </Box>

          <Box
            display="flex"
            flexDirection="column"
            alignItems="flex-start"
            p="0px"
            gap="4px"
            order="1"
            w={{ md: "140px" }}
            h={{ md: "48px" }}
          >
            <Text fontSize={{ base: 11, sm: 13 }} letterSpacing="-3%">
              {email}
            </Text>
            <Text fontSize={14}>{phone}</Text>
          </Box>
        </Box>
      </Box>
    </div>
  );
}
