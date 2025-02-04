import Parallax from "@/components/Parallax";

import Feature from "@/components/Feature/Feature";
import {
  Group,
  Text,
  Paper,
  Space,
  Image,
  rem,
  Container,
  Title,
  Button,
  ActionIcon,
  Grid,
  Center,
  UnstyledButton,
} from "@mantine/core";
import {
  IconBrandTwitter,
  IconBrandYoutube,
  IconBrandInstagram,
} from "@tabler/icons-react";
import { Fade } from "react-awesome-reveal";
import { useScrollIntoView } from "@mantine/hooks";
import { RiArrowDropUpLine } from "react-icons/ri";
import { RiArrowDropUpFill } from "react-icons/ri";

function Home() {
  // Hook to scroll back to top
  const { scrollIntoView, targetRef } = useScrollIntoView({
    offset: 0, // Scroll to the top of the page
    behavior: "smooth", // Smooth scrolling
  });

  return (
    <>
      {/* Parallax Hero Section */}
      <Parallax />

      {/* About Section */}
      <Center>
        <Paper p="xl" style={{ backgroundColor: "#282a57", color: "#fafafa" }}>
          <Container size="md">
            <div>
              <Fade>
                <Text fz={28} fw={500} c="white">
                  Fuel Your Adventure at the Desert Brezz Pit Stop
                </Text>
              </Fade>

              <Fade>
                <Text size="lg" mt="md">
                  Nestled along the iconic Arizona Peace Trail, Desert Brezz is
                  your ultimate pit stop for a seamless and thrilling outdoor
                  experience. From free firewood delivery and e-bike rentals to
                  guided UTV tours, professional drone footage services, and a
                  café serving refreshing drinks and delicious meals-we have
                  everything you need to make your time on the trail a Brezz.
                </Text>
              </Fade>
              <Fade>
                <Button
                  variant="outline"
                  color="#FFA500"
                  size="lg"
                  mt="xl"
                  radius="md"
                  target="_blank"
                  component="a"
                  href="tel:+1 9286628897"
                >
                  Learn More
                </Button>
              </Fade>
            </div>
          </Container>
        </Paper>
      </Center>

      <Center>
        <Fade>
          <Image
            fit="contain"
            w={400}
            radius="md"
            shadow="md"
            src="/parallax/az1.png"
            alt="Arizona Peace Trail"
          />
        </Fade>
      </Center>

      <Space h={60} />

      <Feature />

      <Space h={60} />

      {/* Contact Section */}
      <Paper p="xl" style={{ backgroundColor: "#282a57" }}>
        <Container size="md">
          <Grid justify="center">
            <div>
              <Fade>
                <Text fz={28} fw={500} c="white" ta="center" mb="xl">
                  Get In Touch
                </Text>
              </Fade>
              <Fade>
                <Text align="center" size="lg">
                  Ready to fuel your adventure on the Arizona Peace Trail?
                  Whether you&apos;re looking for details on our services, need
                  help with booking, or just want to chat about the top trails
                  and hidden gems, we&apos;re here to ensure your journey is
                  nothing short of extraordinary.
                </Text>
              </Fade>
              <Center>
                <Fade>
                  <Button
                    size="lg"
                    mt="xl"
                    color="#b22222"
                    radius="xl"
                    target="_blank"
                    component="a"
                    href="tel:+1 9286628897"
                  >
                    Contact Now
                  </Button>
                </Fade>
              </Center>
            </div>
          </Grid>
        </Container>
      </Paper>

      <Space h={100} />

      {/* Scroll to Top Button */}
      <Fade>
        <Center>
          <UnstyledButton onClick={() => scrollIntoView()}>
            <Center>
              <RiArrowDropUpFill style={{ height: "40px", width: "70px" }} />
            </Center>
            <Text ta="center" size="sm" fs="italic" mt={-10}>
              Back to top
            </Text>
          </UnstyledButton>
        </Center>
      </Fade>

      <Space h={77} />

      <Group justify="space-between" p="md" mr={30} ml={30} visibleFrom="md">
        <Text fz={20} fw={300} mr={10} mb={10}>
          Desert Brezz Pit Stop
        </Text>

        <Group gap={0} justify="flex-end" wrap="nowrap"></Group>
      </Group>
    </>
  );
}

export default Home;
