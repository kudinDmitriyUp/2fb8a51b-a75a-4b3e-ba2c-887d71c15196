"use client";

import Link from "next/link";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from "@/components/navbar/NavbarStyleApple/NavbarStyleApple";
import HeroBillboard from "@/components/sections/hero/HeroBillboard";
import InlineImageSplitTextAbout from "@/components/sections/about/InlineImageSplitTextAbout";
import FeatureCardMedia from "@/components/sections/feature/FeatureCardMedia";
import MetricCardFourteen from "@/components/sections/metrics/MetricCardFourteen";
import TestimonialCardThirteen from "@/components/sections/testimonial/TestimonialCardThirteen";
import BlogCardTwo from "@/components/sections/blog/BlogCardTwo";
import SocialProofOne from "@/components/sections/socialProof/SocialProofOne";
import ContactSplitForm from "@/components/sections/contact/ContactSplitForm";
import FooterBase from "@/components/sections/footer/FooterBase";
import { Sparkles, CheckCircle, Star, Award } from "lucide-react";

export default function HomePage() {
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
      <div id="nav" data-section="nav">
        <NavbarStyleApple brandName="Vitaliy" navItems={navItems} />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboard
          title="Shaping the Future of Tech Through Inclusive Leadership"
          description="Vitaliy is one of the industry's most influential tech leaders, pioneering innovation at the intersection of LGBTQ+ advocacy and cutting-edge technology. Driving transformative change across enterprise, startups, and global tech communities."
          background={{ variant: "gradient-bars" }}
          tag="Tech Leader & LGBTQ+ Advocate"
          tagIcon={Sparkles}
          tagAnimation="slide-up"
          buttons={[
            { text: "View Leadership Profile", href: "/leadership" },
            { text: "Get in Touch", href: "/contact" },
          ]}
          buttonAnimation="slide-up"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3A2kdHi1NSExmmN97qC0PBBxl6G/professional-portrait-of-a-charismatic-t-1773421319374-6b25d822.png"
          imageAlt="Vitaliy - Tech Leader"
          mediaAnimation="slide-up"
          ariaLabel="Hero section featuring Vitaliy, tech leader and LGBTQ+ advocate"
        />
      </div>

      <div id="about" data-section="about">
        <InlineImageSplitTextAbout
          heading={[
            {
              type: "text",
              content: "Building Bridges Between Tech Excellence and LGBTQ+ Inclusion",
            },
          ]}
          useInvertedBackground={false}
          buttons={[
            {
              text: "Learn More About My Journey",
              href: "/about",
            },
          ]}
          buttonAnimation="slide-up"
          ariaLabel="About Vitaliy section"
        />
      </div>

      <div id="expertise" data-section="expertise">
        <FeatureCardMedia
          title="Areas of Expertise"
          description="Deep expertise spanning enterprise technology, product innovation, and organizational culture transformation."
          tag="Leadership Areas"
          tagIcon={CheckCircle}
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          features={[
            {
              id: "enterprise-tech",
              title: "Enterprise Technology Leadership",
              description:
                "15+ years driving digital transformation at Fortune 500 companies, scaling infrastructure and leading high-performing teams.",
              tag: "Enterprise",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3A2kdHi1NSExmmN97qC0PBBxl6G/abstract-visualization-of-enterprise-tec-1773421318926-afa0ff1b.png",
              imageAlt: "Enterprise technology infrastructure",
            },
            {
              id: "product-innovation",
              title: "Product Innovation & Strategy",
              description:
                "Creating breakthrough products that solve real problems. Mentored 50+ founders and led product launches generating $500M+ revenue.",
              tag: "Product",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3A2kdHi1NSExmmN97qC0PBBxl6G/dynamic-product-innovation-scene-showing-1773421322959-d8094f26.png",
              imageAlt: "Product innovation collaboration",
            },
            {
              id: "inclusive-culture",
              title: "Inclusive Organizational Culture",
              description:
                "Pioneering DEI initiatives in tech. Built and scaled teams with 40%+ LGBTQ+ representation achieving 2x industry-standard retention.",
              tag: "Culture",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3A2kdHi1NSExmmN97qC0PBBxl6G/vibrant-diverse-team-of-tech-professiona-1773421319421-abd8f91f.png",
              imageAlt: "Diverse team collaboration",
            },
            {
              id: "startup-ecosystem",
              title: "Startup Ecosystem Development",
              description:
                "Invested in and advised 30+ startups. Founded accelerator focusing on LGBTQ+ entrepreneurs, providing $50M+ in funding access.",
              tag: "Startups",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3A2kdHi1NSExmmN97qC0PBBxl6G/entrepreneurial-startup-ecosystem-visual-1773421323337-525d63f8.png",
              imageAlt: "Startup ecosystem",
            },
          ]}
          animationType="slide-up"
          buttons={[
            {
              text: "Explore Full Leadership Profile",
              href: "/leadership",
            },
          ]}
          buttonAnimation="slide-up"
          ariaLabel="Leadership expertise and specializations"
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardFourteen
          title="Industry Impact by the Numbers"
          tag="Track Record"
          tagAnimation="slide-up"
          metrics={[
            {
              id: "teams-led",
              value: "500+",
              description: "Team members directly led and mentored",
            },
            {
              id: "revenue-generated",
              value: "$2.5B+",
              description: "Revenue attributed to products and strategies",
            },
            {
              id: "startups-invested",
              value: "30+",
              description: "Startups invested in and advised",
            },
            {
              id: "speaking-engagements",
              value: "150+",
              description: "Global speaking engagements and conferences",
            },
            {
              id: "lgbtq-representation",
              value: "40%+",
              description: "LGBTQ+ representation in teams built",
            },
          ]}
          metricsAnimation="slide-up"
          useInvertedBackground={false}
          ariaLabel="Key metrics and achievements"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardThirteen
          title="What Leaders Say About Vitaliy"
          description="Recognized globally for transformative leadership, innovation, and commitment to inclusive tech culture."
          tag="Testimonials"
          tagIcon={Star}
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          showRating={true}
          testimonials={[
            {
              id: "testimonial-1",
              name: "Sarah Chen",
              handle: "CEO, TechVenture Capital",
              testimonial:
                "Vitaliy's leadership transformed our company culture and tripled our product adoption. Their vision for inclusive tech is reshaping the industry.",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3A2kdHi1NSExmmN97qC0PBBxl6G/professional-headshot-of-an-accomplished-1773421318589-53b42212.png",
              imageAlt: "Sarah Chen",
            },
            {
              id: "testimonial-2",
              name: "Marcus Johnson",
              handle: "Founder, CloudScale AI",
              testimonial:
                "Working with Vitaliy as mentor accelerated our startup by 3 years. Their strategic insights and network are invaluable to founders.",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3A2kdHi1NSExmmN97qC0PBBxl6G/professional-headshot-of-a-dynamic-male--1773421320529-d646d62e.png",
              imageAlt: "Marcus Johnson",
            },
            {
              id: "testimonial-3",
              name: "Priya Patel",
              handle: "Chief Diversity Officer, Global Tech Corp",
              testimonial:
                "Vitaliy pioneered our DEI strategy. Under their guidance, we achieved 45% diverse leadership representation and stronger talent retention.",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3A2kdHi1NSExmmN97qC0PBBxl6G/professional-headshot-of-an-accomplished-1773421320897-731a5b15.png",
              imageAlt: "Priya Patel",
            },
            {
              id: "testimonial-4",
              name: "Alex Rodriguez",
              handle: "LGBTQ+ Tech Alliance Director",
              testimonial:
                "Vitaliy is the voice of the future—proving that being authentic and excellent are not just compatible, they're essential.",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3A2kdHi1NSExmmN97qC0PBBxl6G/professional-headshot-of-an-lgbtq-tech-l-1773421320162-14499bc5.png",
              imageAlt: "Alex Rodriguez",
            },
            {
              id: "testimonial-5",
              name: "Jordan Kim",
              handle: "VP Product, Quantum Systems",
              testimonial:
                "Exceptional strategic partner and mentor. Vitaliy's insights on product-market fit and scaling teams are industry-leading.",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3A2kdHi1NSExmmN97qC0PBBxl6G/professional-headshot-of-a-vp-product-in-1773421321639-c80154da.png",
              imageAlt: "Jordan Kim",
            },
            {
              id: "testimonial-6",
              name: "Casey Williams",
              handle: "Board Member, Tech Education Foundation",
              testimonial:
                "A true changemaker. Vitaliy's commitment to lifting up underrepresented groups in tech inspires everyone around them.",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3A2kdHi1NSExmmN97qC0PBBxl6G/professional-headshot-of-a-tech-educatio-1773421321158-98673f41.png",
              imageAlt: "Casey Williams",
            },
          ]}
          animationType="slide-up"
          ariaLabel="Client and colleague testimonials"
        />
      </div>

      <div id="speaking" data-section="speaking">
        <BlogCardTwo
          title="Speaking & Thought Leadership"
          description="Engaging audiences worldwide on innovation, leadership, and building inclusive tech communities."
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
              excerpt:
                "How inclusive teams drive innovation faster. Data-driven insights from 500+ team members and $2.5B in product revenue.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3A2kdHi1NSExmmN97qC0PBBxl6G/engaging-conference-speaker-presenting-o-1773421320097-92cdf325.png",
              authorName: "Vitaliy",
              authorAvatar: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3A2kdHi1NSExmmN97qC0PBBxl6G/professional-circular-avatar-profile-pho-1773421318539-4d929e7f.png",
              date: "October 2024",
            },
            {
              id: "talk-2",
              category: ["Product Strategy", "Scaling"],
              title: "From Zero to Scale: Building Products That Matter",
              excerpt:
                "Strategic frameworks for achieving product-market fit and scaling to enterprise. Real case studies from billion-dollar exits.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3A2kdHi1NSExmmN97qC0PBBxl6G/strategic-business-growth-visualization--1773421319492-c059ca1f.png",
              authorName: "Vitaliy",
              authorAvatar: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3A2kdHi1NSExmmN97qC0PBBxl6G/professional-circular-avatar-profile-pho-1773421318539-4d929e7f.png",
              date: "September 2024",
            },
            {
              id: "talk-3",
              category: ["Leadership", "Mentorship"],
              title: "Authentic Leadership in High-Pressure Environments",
              excerpt:
                "Leading with integrity and vulnerability at scale. How bringing your whole self improves decision-making and organizational trust.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3A2kdHi1NSExmmN97qC0PBBxl6G/powerful-moment-of-authentic-leadership--1773421349421-02ed66a9.png",
              authorName: "Vitaliy",
              authorAvatar: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3A2kdHi1NSExmmN97qC0PBBxl6G/professional-circular-avatar-profile-pho-1773421318539-4d929e7f.png",
              date: "August 2024",
            },
          ]}
          animationType="slide-up"
          ariaLabel="Speaking engagements and thought leadership"
        />
      </div>

      <div id="social-proof" data-section="social-proof">
        <SocialProofOne
          title="Featured In & Recognized By"
          description="Vitaliy's impact recognized globally by leading media outlets and industry organizations."
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
            "Stanford Graduate School of Business",
            "CNBC",
            "Wall Street Journal",
          ]}
          logos={[
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3A2kdHi1NSExmmN97qC0PBBxl6G/logo-forbes.png",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3A2kdHi1NSExmmN97qC0PBBxl6G/logo-techcrunch.png",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3A2kdHi1NSExmmN97qC0PBBxl6G/logo-hbr.png",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3A2kdHi1NSExmmN97qC0PBBxl6G/logo-wired.png",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3A2kdHi1NSExmmN97qC0PBBxl6G/logo-fastcompany.png",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3A2kdHi1NSExmmN97qC0PBBxl6G/logo-mit.png",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3A2kdHi1NSExmmN97qC0PBBxl6G/logo-stanford.png",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3A2kdHi1NSExmmN97qC0PBBxl6G/logo-cnbc.png",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3A2kdHi1NSExmmN97qC0PBBxl6G/logo-wsj.png",
          ]}
          speed={40}
          showCard={true}
          ariaLabel="Media features and recognitions"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Let's Connect"
          description="Interested in collaborating, speaking opportunities, or mentorship? I'd love to hear from you."
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
            placeholder: "Tell me about your opportunity or question...",
            rows: 5,
            required: true,
          }}
          mediaAnimation="slide-up"
          mediaPosition="right"
          buttonText="Send Message"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3A2kdHi1NSExmmN97qC0PBBxl6G/dynamic-collaboration-scene-showing-prof-1773421323236-38d18747.png"
          ariaLabel="Contact form"
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