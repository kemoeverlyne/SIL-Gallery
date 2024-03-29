import { useIsMounted } from "@/hooks/useIsMounted";
import { HStack, Image, Skeleton, Text } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function NavbarBrand() {
  const { isMounted } = useIsMounted();
  const router = useRouter();
  const { pathname } = router;

  const inSignPage = pathname === "/signin" || pathname === "/signup";

  return (
    <>
      <Link href="/">
        <Skeleton isLoaded={isMounted} paddingY={2} rounded={"md"}>
          <HStack fontWeight={"bold"}>
            {/* <Icon as={SiGooglephotos} boxSize={6}></Icon> */}
            <Image src="/google_photos_logo.svg" height={"8"} alt="" />

            <Text
              fontSize={
                inSignPage || pathname === "/invitation/[invitationId]"
                  ? "2xl"
                  : ""
              }
            >
              photo-album
            </Text>
          </HStack>
        </Skeleton>
      </Link>
    </>
  );
}
