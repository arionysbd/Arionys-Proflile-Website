import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowRight, Palette, Smartphone, Zap, Users, Globe, Shield } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Header */}
      <header className="border-b bg-white/90 backdrop-blur-md sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img src="/arionys-logo.png" alt="Arionys Logo" className="w-10 h-10 rounded-md" />
            <span className="font-bold text-xl bg-gradient-to-r from-black to-gray-700 bg-clip-text text-transparent">Arionys Profile</span>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/explore">
              <Button variant="ghost" className="hover:bg-gray-100">Explore</Button>
            </Link>
            <Link href="/auth/login">
              <Button variant="ghost" className="hover:bg-gray-100">Sign In</Button>
            </Link>
            <Link href="/auth/sign-up">
              <Button className="bg-black hover:bg-gray-800 text-white">Get Started</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto text-center max-w-4xl">
          <Badge variant="secondary" className="mb-4 px-4 py-2 text-sm font-medium bg-black/5 hover:bg-black/10">
            ✨ Build Your Digital Identity
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-8 text-balance bg-gradient-to-r from-black via-gray-800 to-gray-700 bg-clip-text text-transparent">
            Create Your Perfect Portfolio in Minutes
          </h1>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto text-pretty leading-relaxed">
            Build stunning, mobile-friendly portfolios with our drag-and-drop block system. Showcase your work, connect
            with your audience, and stand out online.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/auth/sign-up">
              <Button size="lg" className="text-lg px-10 py-7 bg-black hover:bg-gray-800 text-white shadow-lg hover:shadow-xl transition-all">
                Start Building Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/explore">
              <Button size="lg" variant="outline" className="text-lg px-10 py-7 bg-transparent border-2 hover:bg-gray-50 transition-all">
                View Examples
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-black via-gray-800 to-gray-700 bg-clip-text text-transparent">Everything You Need to Shine Online</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Professional tools designed for creators, freelancers, and professionals
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all hover:translate-y-[-5px] bg-white rounded-xl overflow-hidden">
              <CardHeader className="pb-6">
                <div className="w-14 h-14 bg-black/5 rounded-xl flex items-center justify-center mb-4">
                  <Palette className="h-7 w-7 text-black" />
                </div>
                <CardTitle className="text-xl font-bold">Block-Based Editor</CardTitle>
                <CardDescription className="text-base mt-2">Drag and drop content blocks to build your perfect layout with ease</CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all hover:translate-y-[-5px] bg-white rounded-xl overflow-hidden">
              <CardHeader className="pb-6">
                <div className="w-14 h-14 bg-black/5 rounded-xl flex items-center justify-center mb-4">
                  <Smartphone className="h-7 w-7 text-black" />
                </div>
                <CardTitle className="text-xl font-bold">Mobile-First Design</CardTitle>
                <CardDescription className="text-base mt-2">Beautiful, responsive designs that look perfect on any device</CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all hover:translate-y-[-5px] bg-white rounded-xl overflow-hidden">
              <CardHeader className="pb-6">
                <div className="w-14 h-14 bg-black/5 rounded-xl flex items-center justify-center mb-4">
                  <Zap className="h-7 w-7 text-black" />
                </div>
                <CardTitle className="text-xl font-bold">Lightning Fast</CardTitle>
                <CardDescription className="text-base mt-2">Optimized for speed with instant loading and smooth interactions</CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all hover:translate-y-[-5px] bg-white rounded-xl overflow-hidden">
              <CardHeader className="pb-6">
                <div className="w-14 h-14 bg-black/5 rounded-xl flex items-center justify-center mb-4">
                  <Users className="h-7 w-7 text-black" />
                </div>
                <CardTitle className="text-xl font-bold">Social Integration</CardTitle>
                <CardDescription className="text-base mt-2">Connect all your social media and showcase your online presence</CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all hover:translate-y-[-5px] bg-white rounded-xl overflow-hidden">
              <CardHeader className="pb-6">
                <div className="w-14 h-14 bg-black/5 rounded-xl flex items-center justify-center mb-4">
                  <Globe className="h-7 w-7 text-black" />
                </div>
                <CardTitle className="text-xl font-bold">Custom Domains</CardTitle>
                <CardDescription className="text-base mt-2">Use your own domain or get a beautiful Arionys [ profile.arionys.com ] URL</CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all hover:translate-y-[-5px] bg-white rounded-xl overflow-hidden">
              <CardHeader className="pb-6">
                <div className="w-14 h-14 bg-black/5 rounded-xl flex items-center justify-center mb-4">
                  <Shield className="h-7 w-7 text-black" />
                </div>
                <CardTitle className="text-xl font-bold">Privacy Controls</CardTitle>
                <CardDescription className="text-base mt-2">Full control over who can see your profile and content</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-black via-gray-800 to-gray-700 bg-clip-text text-transparent">Ready to Build Your Digital Presence?</h2>
          <p className="text-xl text-muted-foreground mb-10">
            Join thousands of creators who trust Arionys Profile to showcase their work
          </p>
          <Link href="/auth/sign-up">
            <Button size="lg" className="text-lg px-10 py-7 bg-black hover:bg-gray-800 text-white shadow-lg hover:shadow-xl transition-all">
              Create Your Profile Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
      
      {/* Feedback Form Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-black via-gray-800 to-gray-700 bg-clip-text text-transparent">Site Under Construction</h2>
            <p className="text-xl text-muted-foreground">
              For any query or complaint please contact us
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-xl">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-3 border border-gray-200 rounded-md focus:ring-2 focus:ring-black focus:outline-none transition-all" 
                    placeholder="Your name"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-3 border border-gray-200 rounded-md focus:ring-2 focus:ring-black focus:outline-none transition-all" 
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="w-full px-4 py-3 border border-gray-200 rounded-md focus:ring-2 focus:ring-black focus:outline-none transition-all" 
                    placeholder="Your phone number"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                  <select 
                    id="subject" 
                    className="w-full px-4 py-3 border border-gray-200 rounded-md focus:ring-2 focus:ring-black focus:outline-none transition-all"
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="query">General Query</option>
                    <option value="feedback">Feedback</option>
                    <option value="complaint">Complaint</option>
                    <option value="suggestion">Suggestion</option>
                  </select>
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">Your Message</label>
                <textarea 
                  id="message" 
                  rows={4} 
                  className="w-full px-4 py-3 border border-gray-200 rounded-md focus:ring-2 focus:ring-black focus:outline-none transition-all" 
                  placeholder="Please describe your query or feedback in detail..."
                ></textarea>
              </div>
              
              <Button type="submit" className="w-full py-6 text-lg bg-black hover:bg-gray-800 text-white shadow-lg hover:shadow-xl transition-all">
                Submit Feedback
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </form>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      {/* <section className="py-24 px-4 bg-white">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-black via-gray-800 to-gray-700 bg-clip-text text-transparent">Ready to Build Your Digital Presence?</h2>
          <p className="text-xl text-muted-foreground mb-10">
            Join thousands of creators who trust Arionys Profile to showcase their work
          </p>
          <Link href="/auth/sign-up">
            <Button size="lg" className="text-lg px-10 py-7 bg-black hover:bg-gray-800 text-white shadow-lg hover:shadow-xl transition-all">
              Create Your Profile Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div> */}
      {/* </section> */}
    </div>
  )
}
