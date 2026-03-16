"use client";

import Link from "next/link";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from "@/components/navbar/NavbarStyleApple/NavbarStyleApple";
import InlineImageSplitTextAbout from "@/components/sections/about/InlineImageSplitTextAbout";
import FeatureCardMedia from "@/components/sections/feature/FeatureCardMedia";
import ContactSplitForm from "@/components/sections/contact/ContactSplitForm";
import FooterBase from "@/components/sections/footer/FooterBase";
import { CheckCircle } from "lucide-react";

export default function AboutPage() {
  const navItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Leadership", id: "leadership" },
    { name: "Achievements", id: "achievements" },
    { name: "Speaking", id: "speaking" },
    { name: "Contact", id: "contact" },
  ];

  const footerColumns = [
    {
      title: "Navigation",      items: [
        { label: "Home", href: "/" },
        { label: "About", href: "/about" },
        { label: "Leadership", href: "/leadership" },
        { label: "Speaking", href: "/speaking" },
      ],
    },
    {
      title: "Connect",      items: [
        { label: "LinkedIn", href: "https://linkedin.com" },
        { label: "Twitter", href: "https://twitter.com" },
        { label: "Contact", href: "/contact" },
        { label: "Newsletter", href: "#" },
      ],
    },
    {
      title: "Resources",      items: [
        { label: "Blog", href: "#" },
        { label: "Speaking Topics", href: "/speaking" },
        { label: "Media Kit", href: "#" },
        { label: "Press", href: "#" },
      ],
    },
    {
      title: "Legal",      items: [
        { label: "Privacy Policy", href: "#" },
        { label: "Terms of Service", href: "#" },
      ],
    },
  ];

  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="reveal-blur"
      borderRadius="rounded"
      contentWidth="compact"
      sizing="mediumSizeLargeTitles"
      background="grid"
      cardStyle="layered-gradient"
      primaryButtonStyle="radial-glow"
      secondaryButtonStyle="solid"
      headingFontWeight="normal"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple brandName="Vitaliy" navItems={navItems} />
      </div>

      <div id="about" data-section="about">
        <InlineImageSplitTextAbout
          heading={[
            {
              type: "text",              content: "My Journey: From Tech Pioneer to LGBTQ+ Inclusion Leader"},
          ]}
          useInvertedBackground={false}
          buttons={[
            {
              text: "Back to Home",              href: "/"},
          ]}
          buttonAnimation="slide-up"
          ariaLabel="About Vitaliy - Full Journey"
        />
      </div>

      <div id="values" data-section="values">
        <FeatureCardMedia
          title="My Core Values & Leadership Philosophy"
          description="Driven by authenticity, innovation, and unwavering commitment to building a more inclusive tech industry."
          tag="Leadership Values"
          tagIcon={CheckCircle}
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          features={[
            {
              id: "authentic-leadership",              title: "Authentic Leadership",              description:
                "Leading with vulnerability and honesty. Believing that bringing your whole self—your identity, values, and experiences—makes you a stronger leader and creates psychological safety in teams.",              tag: "Authenticity",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3A2kdHi1NSExmmN97qC0PBBxl6G/powerful-moment-of-authentic-leadership--1773421349421-02ed66a9.png?_wi=2",              imageAlt: "Authentic leadership connection"},
            {
              id: "inclusive-innovation",              title: "Inclusive Innovation",              description:
                "Believing that diversity drives better innovation. Teams with varied backgrounds, perspectives, and lived experiences solve harder problems faster and build products that serve everyone.",              tag: "Diversity",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3A2kdHi1NSExmmN97qC0PBBxl6G/vibrant-diverse-team-of-tech-professiona-1773421319421-abd8f91f.png?_wi=2",              imageAlt: "Diverse team innovation"},
            {
              id: "servant-leadership",              title: "Servant Leadership",              description:
                "My role is to enable others to succeed. Removing obstacles, providing mentorship, and creating opportunities for those underrepresented in tech. True impact is measured by how many others you lift up.",              tag: "Service",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3A2kdHi1NSExmmN97qC0PBBxl6G/dynamic-collaboration-scene-showing-prof-1773421323236-38d18747.png?_wi=2",              imageAlt: "Collaborative leadership"},
            {
              id: "bold-vision",              title: "Bold Vision for Change",              description:
                "Technology should be a force for good. Leveraging resources, platform, and influence to accelerate systemic change in how tech companies treat LGBTQ+ people and other marginalized communities.",              tag: "Vision",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3A2kdHi1NSExmmN97qC0PBBxl6G/entrepreneurial-startup-ecosystem-visual-1773421323337-525d63f8.png?_wi=2",              imageAlt: "Vision and transformation"},
          ]}
          animationType="slide-up"
          ariaLabel="Core values and leadership philosophy"
        />
      </div>

      <div id="contact-about" data-section="contact-about">
        <ContactSplitForm
          title="Let's Build Something Together"
          description="Whether you're looking for mentorship, partnership opportunities, or just want to connect about tech and inclusion, I'd be happy to hear from you."
          useInvertedBackground={false}
          inputs={[
            {
              name: "name",              type: "text",              placeholder: "Your Name",              required: true,
            },
            {
              name: "email",              type: "email",              placeholder: "your@email.com",              required: true,
            },
            {
              name: "inquiry",              type: "text",              placeholder: "Nature of Inquiry (Mentorship, Partnership, etc.)",              required: false,
            },
          ]}
          textarea={{
            name: "message",            placeholder: "Tell me about your thoughts or opportunity...",            rows: 5,
            required: true,
          }}
          mediaAnimation="slide-up"
          mediaPosition="right"
          buttonText="Send Message"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3A2kdHi1NSExmmN97qC0PBBxl6G/dynamic-collaboration-scene-showing-prof-1773421323236-38d18747.png?_wi=3"
          ariaLabel="Contact form on about page"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          logoText="Vitaliy"
          copyrightText="© 2025 Vitaliy. Building inclusive tech leadership."
          columns={footerColumns}
          ariaLabel="Footer navigation"
        />
      </div>
    </ThemeProvider>
  );
}