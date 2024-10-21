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
import { GiDeliveryDrone, GiThreeFriends } from "react-icons/gi";
import { GiCampfire } from "react-icons/gi";
import { TiGroup } from "react-icons/ti";
import { GiPartyPopper } from "react-icons/gi";
import { IoIosCafe } from "react-icons/io";

import { LuPartyPopper } from "react-icons/lu";
import { MdGroups } from "react-icons/md";
import { Fade } from "react-awesome-reveal";
// Mock data array with services information and react-icons
const mockdata = [
  {
    title: "Firewood Delivery",
    description:
      "Enjoy a cozy campfire with our premium firewood delivered directly to your site – free delivery included!",
    icon: GiCampfire, // Icon from react-icons
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
    icon: IoIosCafe, // Icon from react-icons
  },
  {
    title: "Offroad Fun",
    description:
      "Gear up for offroad excitement with thrilling activities for both experts and newcomers alike!",
    icon: GiPartyPopper, // Icon from react-icons
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
      h={275}
      padding="xl"
    >
      <div style={{ height: "35px" }}>
        <feature.icon
          style={{ width: rem(50), height: rem(50) }}
          color={"#b22222"}
        />
      </div>
      <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
        {feature.title}
      </Text>
      <Text fz="md" c="dimmed" mt="sm">
        {feature.description}
      </Text>
    </Card>
  ));

  return (
    <Container size="md" py="xl">
      <Text ta="center" mb="xl" fz={28} fw={500}>
        Our Services
      </Text>

      <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl" mt={50}>
        <Fade> {features}</Fade>
      </SimpleGrid>
    </Container>
  );
}
