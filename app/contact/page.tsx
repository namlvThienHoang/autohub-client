"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        inquiryType: "general",
        message: "",
    })
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleRadioChange = (value: string) => {
        setFormData((prev) => ({ ...prev, inquiryType: value }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        // Simulate form submission
        await new Promise((resolve) => setTimeout(resolve, 1500))

        toast("Message Sent!", {
            description: "We've received your inquiry and will get back to you soon.",
        })

        setFormData({
            name: "",
            email: "",
            phone: "",
            subject: "",
            inquiryType: "general",
            message: "",
        })
        setIsSubmitting(false)
    }

    return (
        <div className="container mx-auto px-4 py-8 md:py-12">
            <div className="text-center mb-12">
                <h1 className="text-3xl md:text-5xl font-bold mb-4">Contact Us</h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Have questions or need assistance? We're here to help. Reach out to our team using the form below or through
                    our contact information.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center">
                            <Phone className="mr-2 h-5 w-5 text-primary" />
                            Phone
                        </CardTitle>
                        <CardDescription>Call us directly</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="text-lg font-medium">+1 (555) 123-4567</p>
                        <p className="text-sm text-muted-foreground mt-1">Monday-Friday: 9am-6pm EST</p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center">
                            <Mail className="mr-2 h-5 w-5 text-primary" />
                            Email
                        </CardTitle>
                        <CardDescription>Send us an email</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="text-lg font-medium">info@autohub.com</p>
                        <p className="text-sm text-muted-foreground mt-1">We'll respond within 24 hours</p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center">
                            <MapPin className="mr-2 h-5 w-5 text-primary" />
                            Address
                        </CardTitle>
                        <CardDescription>Visit our headquarters</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="text-lg font-medium">123 Auto Drive</p>
                        <p className="text-sm text-muted-foreground mt-1">San Francisco, CA 94103</p>
                    </CardContent>
                </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
                <div>
                    <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="name">Full Name</Label>
                                <Input
                                    id="name"
                                    name="name"
                                    placeholder="John Doe"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="email">Email Address</Label>
                                <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="john.doe@example.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="phone">Phone Number</Label>
                                <Input
                                    id="phone"
                                    name="phone"
                                    placeholder="(555) 123-4567"
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="subject">Subject</Label>
                                <Input
                                    id="subject"
                                    name="subject"
                                    placeholder="How can we help you?"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label>Inquiry Type</Label>
                            <RadioGroup
                                value={formData.inquiryType}
                                onValueChange={handleRadioChange}
                                className="flex flex-col space-y-1"
                            >
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="general" id="general" />
                                    <Label htmlFor="general">General Inquiry</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="sales" id="sales" />
                                    <Label htmlFor="sales">Sales & Pricing</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="support" id="support" />
                                    <Label htmlFor="support">Technical Support</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="feedback" id="feedback" />
                                    <Label htmlFor="feedback">Feedback & Suggestions</Label>
                                </div>
                            </RadioGroup>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="message">Message</Label>
                            <Textarea
                                id="message"
                                name="message"
                                placeholder="Please provide details about your inquiry..."
                                rows={5}
                                value={formData.message}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <Button type="submit" className="w-full" disabled={isSubmitting}>
                            {isSubmitting ? "Sending..." : "Send Message"}
                        </Button>
                    </form>
                </div>

                <div>
                    <h2 className="text-2xl font-bold mb-6">Connect With Us</h2>
                    <div className="bg-muted rounded-lg p-6 mb-8">
                        <h3 className="text-xl font-semibold mb-4">Follow Us on Social Media</h3>
                        <div className="flex space-x-4 mb-6">
                            <Button variant="outline" size="icon" asChild>
                                <Link href="#" aria-label="Facebook">
                                    <Facebook className="h-5 w-5" />
                                </Link>
                            </Button>
                            <Button variant="outline" size="icon" asChild>
                                <Link href="#" aria-label="Twitter">
                                    <Twitter className="h-5 w-5" />
                                </Link>
                            </Button>
                            <Button variant="outline" size="icon" asChild>
                                <Link href="#" aria-label="Instagram">
                                    <Instagram className="h-5 w-5" />
                                </Link>
                            </Button>
                            <Button variant="outline" size="icon" asChild>
                                <Link href="#" aria-label="LinkedIn">
                                    <Linkedin className="h-5 w-5" />
                                </Link>
                            </Button>
                        </div>
                        <p className="text-muted-foreground">
                            Stay updated with our latest car models, promotions, and automotive news by following us on social media.
                        </p>
                    </div>

                    <div className="bg-muted rounded-lg p-6">
                        <h3 className="text-xl font-semibold mb-4">Business Hours</h3>
                        <div className="space-y-2">
                            <div className="flex justify-between">
                                <span>Monday - Friday</span>
                                <span>9:00 AM - 6:00 PM</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Saturday</span>
                                <span>10:00 AM - 4:00 PM</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Sunday</span>
                                <span>Closed</span>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8">
                        <h3 className="text-xl font-semibold mb-4">Frequently Asked Questions</h3>
                        <div className="space-y-4">
                            <div>
                                <h4 className="font-medium">How long does it take to get a response?</h4>
                                <p className="text-muted-foreground">
                                    We typically respond to all inquiries within 24 hours during business days.
                                </p>
                            </div>
                            <div>
                                <h4 className="font-medium">Can I schedule a test drive online?</h4>
                                <p className="text-muted-foreground">
                                    Yes, you can request a test drive through our contact form or directly on the car details page.
                                </p>
                            </div>
                            <div>
                                <h4 className="font-medium">Do you offer financing options?</h4>
                                <p className="text-muted-foreground">
                                    We offer various financing options. Contact our sales team for more information.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

