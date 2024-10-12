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
                <Title color="white">
                  Fuel Your Adventure on the Arizona Peace Trail
                </Title>
              </Fade>

              <Fade>
                <Text size="lg" mt="md">
                  Nestled along the iconic Arizona Peace Trail, we are your
                  ultimate pit stop for a seamless and thrilling outdoor
                  experience. Whether you’re gearing up for a day of exploration
                  or winding down after an exhilarating ride, we have everything
                  you need to make your adventure unforgettable. From firewood
                  delivery and e-bike rentals to guided UTV tours, drone footage
                  services, a café with delicious food and drinks, and more —
                  experience the best of the trail with us.
                </Text>
              </Fade>
              <Fade>
                <Button
                  variant="outline"
                  color="#FFA500"
                  size="lg"
                  mt="xl"
                  radius="md"
                  onClick={() => alert("Learn more about our services")}
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
                <Title align="center" mb="xl">
                  Get In Touch
                </Title>
              </Fade>
              <Fade>
                <Text align="center" size="lg">
                  Ready to fuel your adventure on the Arizona Peace Trail?
                  Whether you have questions about our services, need assistance
                  with your bookings, or simply want to chat about the best
                  trails and local spots, we're here to make your experience
                  unforgettable.
                </Text>
              </Fade>
              <Center>
                <Fade>
                  <Button
                    size="lg"
                    mt="xl"
                    color="#b22222"
                    radius="xl"
                    onClick={() => alert("Contact us via email or phone!")}
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
      <Center>
        <UnstyledButton onClick={() => scrollIntoView()}>
          <Center>
            <RiArrowDropUpLine style={{ height: "30px", width: "30px" }} />
          </Center>
          <Text ta="center" size="sm" fs="italic">
            Back to Top
          </Text>
        </UnstyledButton>
      </Center>

      <Group justify="space-between" p="md" mr={30} ml={30}>
        <Text fz={20} fw={300} mr={10} mb={10}>
          UTV Pit Stop
        </Text>

        <Group gap={0} justify="flex-end" wrap="nowrap">
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandTwitter
              style={{ width: rem(18), height: rem(18) }}
              stroke={1.5}
            />
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandYoutube
              style={{ width: rem(18), height: rem(18) }}
              stroke={1.5}
            />
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandInstagram
              style={{ width: rem(18), height: rem(18) }}
              stroke={1.5}
            />
          </ActionIcon>
        </Group>
      </Group>
    </>
  );
}

export default Home;
