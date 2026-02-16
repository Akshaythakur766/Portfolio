import ContactForm from '@/sections/ContactForm/page'
import { PageHero } from "@/components/PageHero/PageHero";

const page = () => {
  return (
    <div className="min-h-screen bg-gray-950">
      {/* <PageHero
        eyebrow="Contact"
        title="Let's Start a Conversation"
        description="Whether you have a project in mind or just want to say hi, I'm always open to discussing new ideas."
      /> */}
      <div>
        <ContactForm />
      </div>
    </div>
  )
}

export default page