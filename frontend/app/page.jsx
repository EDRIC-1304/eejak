import HomeSection from "@/components/HomeSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ProjectEnquirySection from "@/components/ProjectEnquirySection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <section id="home"><HomeSection /></section>
      <section id="about"><AboutSection /></section>
      <section id="services"><ServicesSection /></section>
      <section id="project-enquiry"><ProjectEnquirySection /></section>
      <section id="contact"><ContactSection /></section>
    </main>
  );
}
