import {
  Badge,
  Group,
  Title,
  Text,
  Card,
  SimpleGrid,
  Container,
  rem,
  useMantineTheme,
} from "@mantine/core";
import { IconGauge, IconUser, IconCookie } from "@tabler/icons-react";
import classes from "./Feature.module.css";
import React from "react";
import { AiFillFire } from "react-icons/ai";
import { MdElectricBike, MdOutlineLocalCafe } from "react-icons/md";
import { GiDeliveryDrone, GiCampingTent } from "react-icons/gi";
import { MdGroups } from "react-icons/md";
import { Fade } from "react-awesome-reveal";
// Mock data array with services information and react-icons
const mockdata = [
  {
    title: "Firewood Delivery",
    description:
      "Enjoy a cozy campfire with our premium firewood delivered directly to your site.",
    icon: AiFillFire, // Icon from react-icons
  },
  {
    title: "E-Bike Rentals",
    description:
      "Explore the trail effortlessly with our high-quality e-bike rentals for all experience levels.",
    icon: MdElectricBike, // Icon from react-icons
  },
  {
    title: "UTV Guided Tours",
    description:
      "Discover hidden gems with our guided UTV tours led by experienced locals.",
    icon: MdGroups, // Icon from react-icons
  },
  {
    title: "Drone Services",
    description:
      "Capture breathtaking aerial footage of your adventure with our professional drone services.",
    icon: GiDeliveryDrone, // Icon from react-icons
  },
  {
    title: "Café & Refreshments",
    description:
      "Refuel at our café with delicious food and a wide variety of hot and cold beverages.",
    icon: MdOutlineLocalCafe, // Icon from react-icons
  },
  {
    title: "Camping Essentials & More",
    description:
      "Stock up on everything you need for a comfortable and safe camping experience.",
    icon: GiCampingTent, // Icon from react-icons
  },
];

export default function Feature() {
  const theme = useMantineTheme();
  const features = mockdata.map((feature) => (
    <Card
      key={feature.title}
      shadow="md"
      radius="md"
      className={classes.card}
      h={250}
      padding="xl"
    >
      <feature.icon
        style={{ width: rem(50), height: rem(50) }}
        stroke={2}
        color={"#b22222"}
      />
      <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
        {feature.title}
      </Text>
      <Text fz="sm" c="dimmed" mt="sm">
        {feature.description}
      </Text>
    </Card>
  ));

  return (
    <Container size="lg" py="xl">
      <Title ta="center" mb="xl">
        Our Services
      </Title>

      <SimpleGrid
        cols={{ base: 1, md: 3 }}
        spacing="xl"
        mt={50}
        mr={50}
        ml={50}
      >
        <Fade> {features}</Fade>
      </SimpleGrid>
    </Container>
  );
}
