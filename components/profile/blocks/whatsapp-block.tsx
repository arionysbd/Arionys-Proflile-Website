"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import { getTheme, getThemeClasses } from "@/lib/themes"

interface WhatsAppBlockProps {
  block: any
  theme?: string
  profileId?: string
}

export function WhatsAppBlock({ block, theme = "default", profileId }: WhatsAppBlockProps) {
  const themeConfig = getTheme(theme)
  const classes = getThemeClasses(themeConfig)

  const { phoneNumber, message, buttonText, description, contactName, designation } = block.content || {}

  if (!phoneNumber) return null

  // Format phone number for WhatsApp API
  const formattedPhone = phoneNumber.replace(/[\s+\-()]/g, "")
  
  // Create WhatsApp URL with optional pre-filled message
  const whatsappUrl = `https://wa.me/${formattedPhone}${message ? `?text=${encodeURIComponent(message)}` : ""}`

  const WhatsAppLogo = () => (
    <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current" aria-hidden="true">
      <path d="M12 2C6.48 2 2 6.48 2 12c0 1.78.46 3.45 1.26 4.91L2 22l5.2-1.36C8.6 21.46 10.25 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm.01 17.1c-1.74 0-3.35-.5-4.72-1.36l-.34-.21-3.12.81.83-3.04-.22-.35A8.27 8.27 0 0 1 3.73 12C3.73 7.97 7 4.7 11.02 4.7c2.2 0 4.18.86 5.63 2.31a7.87 7.87 0 0 1 2.33 5.62c0 4.02-3.28 7.29-7.29 7.29zm3.98-5.05c-.22-.11-1.28-.63-1.48-.7-.2-.08-.35-.11-.5.11-.15.22-.57.7-.69.84-.13.14-.25.16-.47.05-.22-.11-.93-.34-1.77-1.1-.65-.57-1.09-1.27-1.22-1.5-.13-.22-.01-.34.1-.46.1-.1.22-.25.32-.38.11-.13.16-.22.24-.38.08-.16.04-.28-.01-.39-.05-.11-.47-1.21-.64-1.65-.17-.44-.34-.37-.47-.37-.12 0-.28-.02-.44-.02-.16 0-.4.06-.61.29-.21.22-.8.77-.8 1.86 0 1.09.8 2.15.92 2.3.11.14 1.59 2.43 3.86 3.41.54.24.96.37 1.29.46.54.17 1.04.16 1.43.1.44-.06 1.36-.55 1.55-1.08.19-.53.19-.98.13-1.08-.05-.1-.21-.16-.44-.28z"/>
    </svg>
  )

  return (
    <Card className={`${classes.card} hover:shadow-md transition-shadow`}>
      <CardContent className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4 flex-1">
            <div className="w-12 h-12 bg-gray-100 text-black rounded-full flex items-center justify-center">
              <WhatsAppLogo />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className={`${classes.heading} text-base`}>{block.title || "WhatsApp"}</h3>
              {(contactName || designation) && (
                <p className={`${classes.muted} text-sm truncate`}>
                  {contactName}
                  {contactName && designation ? " — " : ""}
                  {designation}
                </p>
              )}
              <p className="text-sm font-mono text-gray-700 dark:text-gray-200 truncate mt-0.5">{phoneNumber}</p>
            </div>
          </div>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" title="Open in WhatsApp">
            <Button size="sm" variant="ghost">
              <ExternalLink className="h-4 w-4" />
            </Button>
          </a>
        </div>
      </CardContent>
    </Card>
  )
}