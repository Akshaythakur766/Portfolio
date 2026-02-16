export default function JsonLd() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Akshay Thakur",
        url: "https://akshaythakur.dev",
        jobTitle: "Frontend Architect",
        sameAs: [
            "https://github.com/Akshaythakur766",
            "https://in.linkedin.com/in/akshay-thakur1766",
            "https://twitter.com/akshay_thakur_03",
        ],
        worksFor: {
            "@type": "Organization",
            name: "Freelance / Open Source",
        },
        description:
            "Frontend Architect specializing in React, Next.js, and AI-driven web applications.",
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}
