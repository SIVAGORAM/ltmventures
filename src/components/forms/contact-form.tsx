"use client"

import * as React from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  subject: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

type FormData = z.infer<typeof formSchema>

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [isSuccess, setIsSuccess] = React.useState(false)
  const [error, setError] = React.useState("")

  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
    resolver: zodResolver(formSchema)
  })

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    setError("")
    
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
      
      const result = await response.json()
      
      if (!response.ok) {
        throw new Error(result.error || "Failed to send message")
      }
      
      setIsSuccess(true)
      reset()
    } catch (err: any) {
      setError(err.message || "An error occurred. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSuccess) {
    return (
      <div className="bg-lime-accent/10 border border-lime-accent/30 rounded-xl p-8 text-center flex flex-col items-center">
        <div className="w-16 h-16 rounded-full bg-lime-accent/20 flex items-center justify-center mb-4">
          <span className="text-primary-navy text-2xl">✓</span>
        </div>
        <h3 className="font-heading font-bold text-2xl text-primary-navy mb-2">Message Sent!</h3>
        <p className="text-muted-foreground">
          Thank you for reaching out. A member of our team will get back to you shortly.
        </p>
        <Button 
          onClick={() => setIsSuccess(false)}
          variant="outline" 
          className="mt-6 rounded-full"
        >
          Send Another Message
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {error && (
        <div className="p-4 rounded-lg bg-red-50 border border-red-200 text-red-600 text-sm">
          {error}
        </div>
      )}
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name *</Label>
          <Input 
            id="name" 
            placeholder="John Doe" 
            {...register("name")}
            className={errors.name ? "border-red-500 focus-visible:ring-red-500" : ""}
          />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="email">Email Address *</Label>
          <Input 
            id="email" 
            type="email" 
            placeholder="john@example.com" 
            {...register("email")}
            className={errors.email ? "border-red-500 focus-visible:ring-red-500" : ""}
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number (Optional)</Label>
          <Input 
            id="phone" 
            type="tel" 
            placeholder="+1 (555) 000-0000" 
            {...register("phone")}
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="subject">Subject (Optional)</Label>
          <Input 
            id="subject" 
            placeholder="How can we help?" 
            {...register("subject")}
          />
        </div>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="message">Message *</Label>
        <Textarea 
          id="message" 
          placeholder="Tell us about your needs..." 
          className={`min-h-[150px] resize-y ${errors.message ? "border-red-500 focus-visible:ring-red-500" : ""}`}
          {...register("message")}
        />
        {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
      </div>
      
      <Button 
        type="submit" 
        disabled={isSubmitting}
        className="w-full sm:w-auto bg-cta-green text-primary-navy hover:bg-cta-green/90 rounded-full font-medium px-8 h-12"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  )
}

