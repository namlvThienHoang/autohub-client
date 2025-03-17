import type React from "react"
import Image from "next/image"
import Link from "next/link"
import { Linkedin, Twitter } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function AboutPage() {
    return (
        <div className="container mx-auto px-4 py-8 md:py-12">
            {/* Hero Section */}
            <div className="relative rounded-lg overflow-hidden mb-12">
                <div className="h-[300px] md:h-[400px]">
                    <Image src="/images/compositor.jpg" alt="About AutoHub" fill className="object-cover" />
                </div>
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                    <div className="text-center text-white max-w-3xl px-4">
                        <h1 className="text-3xl md:text-5xl font-bold mb-4">About AutoHub</h1>
                        <p className="text-lg md:text-xl">
                            Your trusted destination for finding the perfect car. We're passionate about connecting drivers with their
                            dream vehicles.
                        </p>
                    </div>
                </div>
            </div>

            {/* Our Story Section */}
            <div className="mb-16">
                <h2 className="text-3xl font-bold mb-6 text-center">Our Story</h2>
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                        <p className="text-lg mb-4">
                            Founded in 2015, AutoHub began with a simple mission: to make car buying simple, transparent, and
                            enjoyable. What started as a small team of automotive enthusiasts has grown into a comprehensive platform
                            serving thousands of customers nationwide.
                        </p>
                        <p className="text-lg mb-4">
                            We believe that finding the right car shouldn't be complicated or stressful. That's why we've built a
                            platform that puts you in control, with detailed information, honest reviews, and a seamless shopping
                            experience.
                        </p>
                        <p className="text-lg">
                            Today, AutoHub is recognized as a leader in the automotive e-commerce space, but our core values remain
                            the same: integrity, innovation, and exceptional customer service.
                        </p>
                    </div>
                    <div className="relative h-[300px] rounded-lg overflow-hidden">
                        <Image src="/placeholder.svg?height=600&width=800" alt="AutoHub Office" fill className="object-cover" />
                    </div>
                </div>
            </div>

            {/* Mission & Vision */}
            <div className="mb-16">
                <Tabs defaultValue="mission" className="w-full">
                    <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="mission">Our Mission</TabsTrigger>
                        <TabsTrigger value="vision">Our Vision</TabsTrigger>
                    </TabsList>
                    <TabsContent value="mission" className="p-6 bg-muted rounded-b-lg">
                        <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
                        <p className="text-lg">
                            To revolutionize the car buying experience by providing a transparent, user-friendly platform that
                            empowers customers to make informed decisions. We strive to offer the widest selection of quality
                            vehicles, exceptional customer service, and innovative tools that simplify every step of the car buying
                            journey.
                        </p>
                    </TabsContent>
                    <TabsContent value="vision" className="p-6 bg-muted rounded-b-lg">
                        <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
                        <p className="text-lg">
                            To be the most trusted and preferred destination for automotive e-commerce, known for our integrity,
                            innovation, and customer-centric approach. We envision a future where buying a car is as simple,
                            transparent, and enjoyable as shopping for any other product online.
                        </p>
                    </TabsContent>
                </Tabs>
            </div>

            {/* Timeline */}
            <div className="mb-16">
                <h2 className="text-3xl font-bold mb-8 text-center">Our Journey</h2>
                <div className="relative border-l border-gray-300 dark:border-gray-700 ml-4 md:ml-6 pl-6 md:pl-8 space-y-12">
                    <TimelineItem year="2015" title="AutoHub Founded">
                        Started as a small team with a big vision to transform the car buying experience.
                    </TimelineItem>
                    <TimelineItem year="2017" title="Expanded Nationwide">
                        Grew our network to include dealerships across the country, offering a wider selection of vehicles.
                    </TimelineItem>
                    <TimelineItem year="2019" title="Launched Mobile App">
                        Introduced our mobile application, making it easier for customers to browse and purchase on the go.
                    </TimelineItem>
                    <TimelineItem year="2021" title="Introduced Virtual Test Drives">
                        Pioneered virtual test drive technology, allowing customers to experience cars remotely.
                    </TimelineItem>
                    <TimelineItem year="2023" title="Reached 100,000 Customers">
                        Celebrated the milestone of helping 100,000 customers find their perfect car.
                    </TimelineItem>
                </div>
            </div>

            {/* Team Section */}
            <div className="mb-16">
                <h2 className="text-3xl font-bold mb-8 text-center">Meet Our Team</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <TeamMember
                        name="Sarah Johnson"
                        role="CEO & Founder"
                        bio="Automotive industry veteran with 15+ years of experience. Passionate about creating exceptional customer experiences."
                        image="/placeholder.svg?height=400&width=400"
                    />
                    <TeamMember
                        name="Michael Chen"
                        role="CTO"
                        bio="Tech innovator with a background in AI and machine learning. Leads our engineering team in developing cutting-edge solutions."
                        image="/placeholder.svg?height=400&width=400"
                    />
                    <TeamMember
                        name="Emily Rodriguez"
                        role="Head of Customer Experience"
                        bio="Customer service expert dedicated to ensuring every AutoHub customer receives personalized, attentive support."
                        image="/placeholder.svg?height=400&width=400"
                    />
                    <TeamMember
                        name="David Thompson"
                        role="Automotive Director"
                        bio="Former race car driver and automotive journalist. Brings expert knowledge and passion to our vehicle curation process."
                        image="/placeholder.svg?height=400&width=400"
                    />
                </div>
            </div>

            {/* Values Section */}
            <div className="mb-16">
                <h2 className="text-3xl font-bold mb-8 text-center">Our Values</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Card>
                        <CardContent className="pt-6">
                            <h3 className="text-xl font-semibold mb-2">Integrity</h3>
                            <p>
                                We believe in honesty and transparency in everything we do. From accurate vehicle descriptions to clear
                                pricing, we're committed to building trust with our customers.
                            </p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="pt-6">
                            <h3 className="text-xl font-semibold mb-2">Innovation</h3>
                            <p>
                                We continuously seek new ways to improve the car buying experience. By embracing technology and creative
                                thinking, we're redefining what's possible in automotive e-commerce.
                            </p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="pt-6">
                            <h3 className="text-xl font-semibold mb-2">Customer Focus</h3>
                            <p>
                                Our customers are at the heart of everything we do. We're dedicated to understanding their needs and
                                exceeding their expectations at every touchpoint.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>

            {/* CTA Section */}
            <div className="bg-primary text-primary-foreground rounded-lg p-8 text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Join Our Journey?</h2>
                <p className="text-lg mb-6 max-w-2xl mx-auto">
                    Whether you're looking for your dream car or interested in career opportunities, we'd love to hear from you.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                    <Link href="/categories">
                        <Button variant="secondary" size="lg">
                            Browse Cars
                        </Button>
                    </Link>
                    <Link href="/contact">
                        <Button variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white/10">
                            Contact Us
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

function TimelineItem({ year, title, children }: { year: string; title: string; children: React.ReactNode }) {
    return (
        <div className="relative">
            <div className="absolute -left-10 mt-1.5 h-6 w-6 rounded-full border border-gray-300 dark:border-gray-700 bg-background flex items-center justify-center">
                <div className="h-3 w-3 rounded-full bg-primary"></div>
            </div>
            <div>
                <span className="text-sm text-muted-foreground">{year}</span>
                <h3 className="text-xl font-semibold mt-1">{title}</h3>
                <p className="mt-2">{children}</p>
            </div>
        </div>
    )
}

function TeamMember({ name, role, bio, image }: { name: string; role: string; bio: string; image: string }) {
    return (
        <div className="text-center">
            <div className="relative h-64 w-64 mx-auto rounded-full overflow-hidden mb-4">
                <Image src={image || "/placeholder.svg"} alt={name} fill className="object-cover" />
            </div>
            <h3 className="text-xl font-semibold">{name}</h3>
            <p className="text-primary mb-2">{role}</p>
            <p className="text-muted-foreground mb-4">{bio}</p>
            <div className="flex justify-center space-x-3">
                <Button variant="ghost" size="icon" asChild>
                    <Link href="#" aria-label={`${name}'s LinkedIn`}>
                        <Linkedin className="h-5 w-5" />
                    </Link>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                    <Link href="#" aria-label={`${name}'s Twitter`}>
                        <Twitter className="h-5 w-5" />
                    </Link>
                </Button>
            </div>
        </div>
    )
}

