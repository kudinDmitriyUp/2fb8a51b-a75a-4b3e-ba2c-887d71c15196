"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from "@/components/navbar/NavbarStyleApple/NavbarStyleApple";
import FeatureCardMedia from "@/components/sections/feature/FeatureCardMedia";
import MetricCardFourteen from "@/components/sections/metrics/MetricCardFourteen";
import ContactSplitForm from "@/components/sections/contact/ContactSplitForm";
import FooterBase from "@/components/sections/footer/FooterBase";
import Link from "next/link";
import { CheckCircle } from "lucide-react";

export default function LeadershipPage() {
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
      title: "Navigation",
      items: [
        { label: "Home", href: "/" },
        { label: "About", href: "/about" },
        { label: "Leadership", href: "/leadership" },
        { label: "Speaking", href: "/speaking" },
      ],
    },
    {
      title: "Connect",
      items: [
        { label: "LinkedIn", href: "https://linkedin.com" },
        { label: "Twitter", href: "https://twitter.com" },
        { label: "Contact", href: "/contact" },
        { label: "Newsletter", href: "#" },
      ],
    },
    {
      title: "Resources",
      items: [
        { label: "Blog", href: "#" },
        { label: "Speaking Topics", href: "/speaking" },
        { label: "Media Kit", href: "#" },
        { label: "Press", href: "#" },
      ],
    },
    {
      title: "Legal",
      items: [
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
      {/* Navbar */}
      <div id="nav" data-section="nav">
        <NavbarStyleApple brandName="Vitaliy" navItems={navItems} />
      </div>

      {/* Leadership Expertise Section */}
      <div id="expertise" data-section="expertise">
        <FeatureCardMedia
          title="Leadership Philosophy & Approach"
          description="Deep expertise in transforming organizations through authentic leadership, strategic vision, and commitment to inclusive excellence."
          tag="Leadership Areas"
          tagIcon={CheckCircle}
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          features={[
            {
              id: "strategic-vision",
              title: "Strategic Vision & Execution",
              description: "Defining bold long-term strategies while maintaining operational excellence. Balanced visionary thinking with pragmatic execution to drive sustainable growth.",
              tag: "Strategy",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3A2kdHi1NSExmmN97qC0PBBxl6G/abstract-visualization-of-enterprise-tec-1773421318926-afa0ff1b.png?_wi=2",
              imageAlt: "Abstract visualization of strategic enterprise vision",
            },
            {
              id: "team-building",
              title: "High-Performance Team Building",
              description: "Attracting and developing exceptional talent. Creating psychologically safe environments where diverse perspectives drive innovation and exceptional results.",
              tag: "Teams",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3A2kdHi1NSExmmN97qC0PBBxl6G/vibrant-diverse-team-of-tech-professiona-1773421319421-abd8f91f.png?_wi=3",
              imageAlt: "Diverse high-performing team collaborating",
            },
            {
              id: "innovation-culture",
              title: "Building Innovation Culture",
              description: "Fostering environments where experimentation thrives and calculated risk-taking is celebrated. Balancing stability with the agility needed for breakthrough innovation.",
              tag: "Culture",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3A2kdHi1NSExmmN97qC0PBBxl6G/dynamic-product-innovation-scene-showing-1773421322959-d8094f26.png?_wi=2",
              imageAlt: "Innovation culture and creative collaboration",
            },
            {
              id: "stakeholder-alignment",
              title: "Stakeholder Alignment & Communication",
              description: "Translating complex strategies into compelling narratives. Engaging board members, investors, employees, and customers with authentic, transparent communication.",
              tag: "Communication",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3A2kdHi1NSExmmN97qC0PBBxl6G/entrepreneurial-startup-ecosystem-visual-1773421323337-525d63f8.png?_wi=3",
              imageAlt: "Stakeholder engagement and alignment",
            },
          ]}
          animationType="slide-up"
          buttons={[
            {
              text: "Explore Speaking Topics",
              href: "/speaking",
            },
          ]}
          buttonAnimation="slide-up"
          ariaLabel="Leadership philosophy and expertise areas"
        />
      </div>

      {/* Metrics Section */}
      <div id="metrics" data-section="metrics">
        <MetricCardFourteen
          title="Impact & Results"
          tag="Leadership Track Record"
          tagAnimation="slide-up"
          metrics={[
            {
              id: "org-scale",
              value: "Fortune 500",
              description: "Organizations led and transformed across enterprise",
            },
            {
              id: "team-scale",
              value: "500+",
              description: "Team members directly developed and mentored",
            },
            {
              id: "innovation-pipeline",
              value: "$2.5B+",
              description: "Revenue from products and strategies implemented",
            },
            {
              id: "diversity-impact",
              value: "2x",
              description: "Retention improvement through inclusive leadership",
            },
            {
              id: "founder-network",
              value: "30+",
              description: "Startups advised and invested in with founder support",
            },
          ]}
          metricsAnimation="slide-up"
          useInvertedBackground={false}
          ariaLabel="Leadership impact metrics"
        />
      </div>

      {/* Contact Section */}
      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Let's Discuss Your Leadership Challenges"
          description="Exploring how my experience can support your organization's growth, transformation, or strategic initiatives."
          useInvertedBackground={false}
          inputs={[
            {
              name: "name",
              type: "text",
              placeholder: "Your Name",
              required: true,
            },
            {
              name: "email",
              type: "email",
              placeholder: "your@email.com",
              required: true,
            },
            {
              name: "company",
              type: "text",
              placeholder: "Your Company/Organization",
              required: false,
            },
          ]}
          textarea={{
            name: "message",
            placeholder: "Tell me about your leadership opportunity or challenge...",
            rows: 5,
            required: true,
          }}
          mediaAnimation="slide-up"
          mediaPosition="right"
          buttonText="Schedule Discussion"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3A2kdHi1NSExmmN97qC0PBBxl6G/dynamic-collaboration-scene-showing-prof-1773421323236-38d18747.png?_wi=4"
          imageAlt="Professional collaboration and discussion"
          ariaLabel="Leadership consultation contact form"
        />
      </div>

      {/* Footer */}
      <div id="footer" data-section="footer">
        <FooterBase
          logoText="Vitaliy"
          copyrightText="© 2025 Vitaliy. Building inclusive tech leadership."
          columns={footerColumns}
          ariaLabel="Site footer"
        />
      </div>
    </ThemeProvider>
  );
}