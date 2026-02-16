import aiStartup from "@/assets/images/ai-startup-landing-page.png";
import darkSaas from "@/assets/images/dark-saas-landing-page.png";
import lightSaas from "@/assets/images/light-saas-landing-page.png";
import { StaticImageData } from "next/image";

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
  image: StaticImageData;
  content: string; // HTML or Markdown content
}

export const blogPosts: BlogPost[] = [
  {
    slug: "architecting-for-genai",
    title: "Architecting for GenAI: Patterns & Pitfalls",
    excerpt:
      "A deep dive into integrating Large Language Models into production systems. Strategies for latency reduction, context window management, and fallback mechanisms.",
    date: "Oct 24, 2024",
    category: "System Design",
    readTime: "8 min read",
    image: aiStartup, 
    content: `
      <h2>The Shift from Deterministic to Probabilistic Systems</h2>
      <p>Integrating LLMs is not just an API call; it requires a fundamental shift in how we handle state and failure. Unlike traditional microservices, LLMs are non-deterministic.</p>
      
      <h3>Pattern 1: The RAG Pipeline</h3>
      <p>Retrieval-Augmented Generation is the standard for grounding AI. However, naive RAG often fails at scale. We need to discuss hybrid search (Keyword + Semantic) and reranking strategies.</p>

      <h3>Latency Engineering</h3>
      <p>Streaming is non-negotiable. Users tolerate slow generation if the Time-To-First-Token (TTFT) is under 200ms. We'll explore how to architect streaming responses using Server-Sent Events (SSE) in Next.js.</p>
    `,
  },
  {
    slug: "scaling-vector-search",
    title: "Scaling Semantic Search: A Deep Dive into Vector Stores",
    excerpt:
      "Beyond the basics of embeddings: HNSW indexing, quantization, and choosing the right vector database for high-throughput applications.",
    date: "Nov 12, 2024",
    category: "Database Engineering",
    readTime: "12 min read",
    image: darkSaas,
    content: `
      <h2>The Curse of Dimensionality</h2>
      <p>Searching through millions of 1536-dimensional vectors is computationally expensive. We need approximate nearest neighbor (ANN) algorithms.</p>
      
      <h3>HNSW (Hierarchical Navigable Small World)</h3>
      <p>HNSW graphs allow for logarithmic search complexity. Understanding the 'M' and 'efConstruction' parameters is crucial for balancing recall vs. latency.</p>

      <h3>Production Considerations</h3>
      <p>When to use a dedicated service like Pinecone vs. a pgvector extension in your existing Postgres instance. The trade-offs often come down to operational complexity vs. data consistency.</p>
    `,
  },
  {
    slug: "future-of-rendering-patterns",
    title: "The Evolution of Rendering: RSCs and the Edge",
    excerpt:
      "Analyzing the shift from client-side hydration to Server Components. How partial prerendering and edge caching are redefining performance baselines.",
    date: "Dec 05, 2024",
    category: "Frontend Architecture",
    readTime: "10 min read",
    image: lightSaas,
    content: `
      <h2>The Hydration Waterfall</h2>
      <p>Client-side rendering (CSR) served us well, but the hydration tax on mobile devices is real. React Server Components (RSC) allow us to trim the bundle size significantly.</p>
      
      <h3>Edge Compute Patterns</h3>
      <p>Pushing logic to the edge (Cloudflare Workers / Vercel Edge) allows for personalized static generation. We can now have the speed of static HTML with the dynamic nature of a server-rendered page.</p>
    `,
  },
];
