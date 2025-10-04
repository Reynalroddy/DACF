import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function NewsletterSection() {
  return (
    <section className="py-16 bg-teal-600">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0">
            <h2 className="text-3xl font-bold text-white mb-2">SUBSCRIBE NEWSLETTER</h2>
            <p className="text-teal-100">Subscribe and get in touch with us and get regular updates from us</p>
          </div>
          <div className="flex w-full md:w-auto">
            <Input
              type="email"
              placeholder="Email Address..."
              className="bg-white border-0 rounded-r-none w-full md:w-80"
            />
            <Button className="bg-black hover:bg-gray-800 text-white px-8 rounded-l-none">SUBSCRIBE</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
