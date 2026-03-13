"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from "@/components/navbar/NavbarStyleApple/NavbarStyleApple";
import BlogCardTwo from "@/components/sections/blog/BlogCardTwo";
import SocialProofOne from "@/components/sections/socialProof/SocialProofOne";
import ContactSplitForm from "@/components/sections/contact/ContactSplitForm";
import FooterBase from "@/components/sections/footer/FooterBase";
import Link from "next/link";
import { Sparkles, Award } from "lucide-react";

export default function SpeakingPage() {
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

      {/* Speaking Engagements Section */}
      <div id="speaking" data-section="speaking">
        <BlogCardTwo
          title="Speaking & Thought Leadership"
          description="Engaging audiences worldwide on innovation, leadership, and building inclusive tech communities. Recent keynotes, conference talks, and thought leadership content."
          tag="Recent Talks"
          tagIcon={Sparkles}
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          blogs={[
            {
              id: "talk-1",
              category: ["Tech Culture", "Leadership"],
              title: "The Business Case for LGBTQ+ Inclusion in Tech",
              excerpt: "How inclusive teams drive innovation faster. Data-driven insights from 500+ team members and $2.5B in product revenue. Presented at major tech conferences.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3A2kdHi1NSExmmN97qC0PBBxl6G/engaging-conference-speaker-presenting-o-1773421320097-92cdf325.png?_wi=2",
              imageAlt: "Conference speaker on diversity and inclusion",
              authorName: "Vitaliy",
              authorAvatar: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3A2kdHi1NSExmmN97qC0PBBxl6G/professional-circular-avatar-profile-pho-1773421318539-4d929e7f.png",
              date: "October 2024",
            },
            {
              id: "talk-2",
              category: ["Product Strategy", "Scaling"],
              title: "From Zero to Scale: Building Products That Matter",
              excerpt: "Strategic frameworks for achieving product-market fit and scaling to enterprise. Real case studies from billion-dollar exits. How to build products people love.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3A2kdHi1NSExmmN97qC0PBBxl6G/strategic-business-growth-visualization--1773421319492-c059ca1f.png?_wi=2",
              imageAlt: "Strategic business growth and scaling",
              authorName: "Vitaliy",
              authorAvatar: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3A2kdHi1NSExmmN97qC0PBBxl6G/professional-circular-avatar-profile-pho-1773421318539-4d929e7f.png",
              date: "September 2024",
            },
            {
              id: "talk-3",
              category: ["Leadership", "Mentorship"],
              title: "Authentic Leadership in High-Pressure Environments",
              excerpt: "Leading with integrity and vulnerability at scale. How bringing your whole self improves decision-making and organizational trust. Building psychological safety.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3A2kdHi1NSExmmN97qC0PBBxl6G/powerful-moment-of-authentic-leadership--1773421349421-02ed66a9.png?_wi=3",
              imageAlt: "Authentic leadership moment with team",
              authorName: "Vitaliy",
              authorAvatar: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3A2kdHi1NSExmmN97qC0PBBxl6G/professional-circular-avatar-profile-pho-1773421318539-4d929e7f.png",
              date: "August 2024",
            },
          ]}
          animationType="slide-up"
          ariaLabel="Speaking engagements and thought leadership"
        />
      </div>

      {/* Media & Recognition Section */}
      <div id="social-proof" data-section="social-proof">
        <SocialProofOne
          title="Featured In & Recognized By"
          description="Vitaliy's insights on leadership, innovation, and inclusive tech culture recognized globally by leading media outlets and industry organizations."
          tag="Media & Recognition"
          tagIcon={Award}
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          names={[
            "Forbes",
            "TechCrunch",
            "Harvard Business Review",
            "Wired",
            "Fast Company",
            "MIT Sloan",
            "Stanford GSB",
            "CNBC",
            "Wall Street Journal",
          ]}
          logos={[
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3A2kdHi1NSExmmN97qC0PBBxl6G/professional-portrait-of-a-charismatic-t-1773421319374-6b25d822.png",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3A2kdHi1NSExmmN97qC0PBBxl6G/abstract-visualization-of-enterprise-tec-1773421318926-afa0ff1b.png",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3A2kdHi1NSExmmN97qC0PBBxl6G/dynamic-product-innovation-scene-showing-1773421322959-d8094f26.png",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3A2kdHi1NSExmmN97qC0PBBxl6G/vibrant-diverse-team-of-tech-professiona-1773421319421-abd8f91f.png",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3A2kdHi1NSExmmN97qC0PBBxl6G/entrepreneurial-startup-ecosystem-visual-1773421323337-525d63f8.png",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3A2kdHi1NSExmmN97qC0PBBxl6G/professional-headshot-of-an-accomplished-1773421318589-53b42212.png",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3A2kdHi1NSExmmN97qC0PBBxl6G/professional-headshot-of-a-dynamic-male--1773421320529-d646d62e.png",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3A2kdHi1NSExmmN97qC0PBBxl6G/professional-headshot-of-an-accomplished-1773421320897-731a5b15.png",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3A2kdHi1NSExmmN97qC0PBBxl6G/professional-headshot-of-an-lgbtq-tech-l-1773421320162-14499bc5.png",
          ]}
          speed={40}
          showCard={true}
          ariaLabel="Media features and speaking recognitions"
        />
      </div>

      {/* Contact Section */}
      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Book Me for Your Event"
          description="Interested in having Vitaliy speak at your conference, corporate event, or workshop? Let's discuss how to create an impactful speaking experience."
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
              name: "event",
              type: "text",
              placeholder: "Event Name/Organization",
              required: false,
            },
          ]}
          textarea={{
            name: "message",
            placeholder: "Tell me about your event and speaking opportunity...",
            rows: 5,
            required: true,
          }}
          mediaAnimation="slide-up"
          mediaPosition="right"
          buttonText="Send Speaking Inquiry"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3A2kdHi1NSExmmN97qC0PBBxl6G/dynamic-collaboration-scene-showing-prof-1773421323236-38d18747.png?_wi=5"
          imageAlt="Speaking engagement and event collaboration"
          ariaLabel="Speaking inquiry contact form"
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