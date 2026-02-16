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
  content: string; // HTML content
}

export const blogPosts: BlogPost[] = [
  {
    slug: "react-server-components-guide",
    title: "Mastering React Server Components: The Ultimate Guide",
    excerpt: "Everything you need to know about RSCs: from the fundamental shift in rendering architecture to advanced data fetching patterns and Server Actions.",
    date: "Feb 16, 2026",
    category: "Architecture",
    readTime: "25 min read",
    image: darkSaas, 
    content: `
      <h2 id="introduction">Introduction</h2>
      <p>React Server Components (RSC) represent the biggest paradigm shift in the React ecosystem since hooks. They aren't just a new feature; they are a re-imagining of how we build hybrid applications that span the server and the client.</p>
      <p>In this comprehensive guide, we will dismantle the "why" and "how" of RSCs, moving from basic concepts to production-grade patterns used by senior architects.</p>

      <h2 id="the-problem">The Problem with Client-Side Rendering</h2>
      <p>To understand RSCs, we must first look at the limitations of traditional SPAR (Single Page Application) architectures. In a standard React app, the user downloads an empty HTML shell, then a massive JavaScript bundle, which then executes to fetch data, which then renders the UI.</p>
      <pre><code>// The "Waterfall" Problem
useEffect(() => {
  fetch('/api/user').then(u => setUser(u));
}, []); // 1. Download JS -> 2. Execute JS -> 3. Fetch Data -> 4. Render</code></pre>
      <p>This "waterfall" leads to poor First Contentful Paint (FCP) and Time to Interactive (TTI), especially on low-end devices.</p>

      <h2 id="what-are-rscs">What are Server Components?</h2>
      <p>Server Components allow React components to render <strong>exclusively on the server</strong>. Their code is never sent to the client. This means:</p>
      <ul>
        <li><strong>Zero Bundle Size:</strong> Large dependencies (like markdown parsers or date libraries) stay on the server.</li>
        <li><strong>Direct Database Access:</strong> You can query your DB directly inside your component.</li>
        <li><strong>Automatic Code Splitting:</strong> Client components imported by Server Components are automatically split.</li>
      </ul>

      <h2 id="server-vs-client">Server vs. Client Components</h2>
      <p>The mental model shift is crucial. We now have a "dual-module" system.</p>
      
      <h3>Server Components (Default)</h3>
      <p>Use them for: Data fetching, accessing backend resources, keeping sensitive info (API keys) secure, and reducing the client bundle.</p>
      <pre><code>// app/page.tsx (Server Component)
import db from './db';

export default async function Page() {
  const posts = await db.query('SELECT * FROM posts');
  return (
    &lt;ul&gt;
      {posts.map(post => &lt;li key={post.id}&gt;{post.title}&lt;/li&gt;)}
    &lt;/ul&gt;
  );
}</code></pre>

      <h3>Client Components ("use client")</h3>
      <p>Use them for: Interactivity (onClick, onChange), State (useState, useReducer), Effects (useEffect), and Browser APIs.</p>
      <pre><code>// components/LikeButton.tsx ("use client")
'use client';

import { useState } from 'react';

export default function LikeButton() {
  const [likes, setLikes] = useState(0);
  return &lt;button onClick={() => setLikes(l => l + 1)}&gt;Like ({likes})&lt;/button&gt;;
}</code></pre>

      <h2 id="streaming-suspense">Streaming & Suspense</h2>
      <p>One of the superpowers of RSCs is streaming. Instead of waiting for the <em>entire</em> page to render on the server, we can send it in chunks.</p>
      <p>By wrapping a slow component in <code>&lt;Suspense&gt;</code>, React will immediately send the fallback UI to the browser, then swap it with the real content once the server finishes generating it.</p>
      <pre><code>import { Suspense } from 'react';
import { PostFeed, WeatherWidget } from './components';

export default function Dashboard() {
  return (
    &lt;section&gt;
      &lt;h1&gt;My Dashboard&lt;/h1&gt;
      
      &lt;Suspense fallback={&lt;Skeleton /&gt;}&gt;
         &lt;PostFeed /&gt;
      &lt;/Suspense&gt;

      &lt;Suspense fallback={&lt;Spinner /&gt;}&gt;
         &lt;WeatherWidget /&gt;
      &lt;/Suspense&gt;
    &lt;/section&gt;
  );
}</code></pre>

      <h2 id="data-fetching">Data Fetching Patterns</h2>
      <p>With RSCs, we stop building API endpoints for our own UI. We simply fetch data where we need it. Request memoization ensures that if multiple components request the same data, it's only fetched once.</p>

      <h2 id="server-actions">Server Actions: The End of API Routes?</h2>
      <p>Server Actions allow you to execute server-side mutations directly from a form or a button click in a Client Component. It's like calling a function that magically runs on the server.</p>
      <pre><code>// actions.ts
'use server';

export async function createPost(formData: FormData) {
  const title = formData.get('title');
  await db.course.create({ data: { title } });
  revalidatePath('/posts');
}</code></pre>

      <h2 id="conclusion">Conclusion</h2>
      <p>RSCs are not just a performance optimization; they are a developer experience upgrade. They simplify the mental model of building complex apps by removing the need for a separate API layer for your UI.</p>
      <p>As you build your next project, embrace the server. Push logic back to where your data lives, and keep your client lean, interactive, and fast.</p>
    `,
  },
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
