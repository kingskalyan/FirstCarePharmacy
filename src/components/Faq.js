import React from "react";
import Accordion from "./Accordion";
import Footer from "./Footer";
import WhatsAppIcon from "./WhatsAppIcon";

const Faq = () => {
    return (
        <div>
            <div>
                <h1>Some FAQ's</h1>
            </div>

            <div className="p-4 bg-gray-200 rounded-lg">
                <Accordion
                    title="Do you prefer Android or iOS"
                    answer="I like to use iOS products"
                />
                <Accordion
                    title="Do you prefer writing CSS or Tailwind?"
                    answer="I like to use Tailwind"
                />
                <Accordion title="Firebase or Supabase?" answer="I am using Supabase!" />
                <Accordion
                    title="Do you prefer Android or iOS"
                    answer="I like to use iOS products"
                />
                <Accordion
                    title="Do you prefer writing CSS or Tailwind?"
                    answer="I like to use Tailwind"
                />
                <Accordion title="Firebase or Supabase?" answer="I am using Supabase!" />
                <Accordion
                    title="Do you prefer Android or iOS"
                    answer="I like to use iOS products"
                />
                <Accordion
                    title="Do you prefer writing CSS or Tailwind?"
                    answer="I like to use Tailwind"
                />
                <Accordion title="Firebase or Supabase?" answer="I am using Supabase!" />
                <Accordion
                    title="Do you prefer Android or iOS"
                    answer="I like to use iOS products"
                />
                <Accordion
                    title="Do you prefer writing CSS or Tailwind?"
                    answer="I like to use Tailwind"
                />
                <Accordion title="Firebase or Supabase?" answer="I am using Supabase!" />
                <Accordion
                    title="Do you prefer Android or iOS"
                    answer="I like to use iOS products"
                />
                <Accordion
                    title="Do you prefer writing CSS or Tailwind?"
                    answer="I like to use Tailwind"
                />
                <Accordion title="Firebase or Supabase?" answer="I am using Supabase!" />
                <Accordion
                    title="Do you prefer Android or iOS"
                    answer="I like to use iOS products"
                />
                <Accordion
                    title="Do you prefer writing CSS or Tailwind?"
                    answer="I like to use Tailwind"
                />
                <Accordion title="Firebase or Supabase?" answer="I am using Supabase!" />
            </div>

            <div style={{ paddingTop: "50px" }}>
                <Footer />
            </div>
            <WhatsAppIcon/>
        </div>
    );
};

export default Faq;