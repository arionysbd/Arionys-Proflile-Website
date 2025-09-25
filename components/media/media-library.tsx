"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileUpload } from "./file-upload"
import { Trash2, ExternalLink, ImageIcon, Video, Music, Check } from "lucide-react"

interface MediaFile {
  url: string
  filename: string
  size: number
  uploadedAt: string
  category: string
}

interface MediaLibraryProps {
  onSelect?: (file: MediaFile) => void
  showUpload?: boolean
}

export function MediaLibrary({ onSelect, showUpload = true }: MediaLibraryProps) {
  const [files, setFiles] = useState<MediaFile[]>([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState<"all" | "image" | "video" | "audio">("all")

  const loadFiles = async () => {
    try {
      const response = await fetch("/api/media")
      if (response.ok) {
        const data = await response.json()
        setFiles(data.files)
      }
    } catch (error) {
      console.error("Error loading files:", error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadFiles()
  }, [])

  const handleUpload = (newFile: any) => {
    setFiles((prev) => [{ ...newFile, uploadedAt: new Date().toISOString() }, ...prev])
  }

  const handleDelete = async (url: string) => {
    if (!confirm("Are you sure you want to delete this file?")) return

    try {
      const response = await fetch("/api/media/delete", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
      })

      if (response.ok) {
        setFiles((prev) => prev.filter((file) => file.url !== url))
      }
    } catch (error) {
      console.error("Error deleting file:", error)
    }
  }
  

  const filteredFiles = files.filter((file) => filter === "all" || file.category === filter)

  const getFileIcon = (category: string) => {
    switch (category) {
      case "image":
        return <ImageIcon className="h-4 w-4" />
      case "video":
        return <Video className="h-4 w-4" />
      case "audio":
        return <Music className="h-4 w-4" />
      default:
        return <ImageIcon className="h-4 w-4" />
    }
  }

  if (loading) {
    return <div className="p-6 text-center">Loading media library...</div>
  }

  return (
    <div className="space-y-6">
      {showUpload && <FileUpload onUpload={handleUpload} />}

      <div className="flex gap-2">
        {(["all", "image", "video", "audio"] as const).map((type) => (
          <Button
            key={type}
            variant={filter === type ? "default" : "outline"}
            size="sm"
            onClick={() => setFilter(type)}
            className="capitalize"
          >
            {type}
          </Button>
        ))}
      </div>

      {/* <div className="text-xs text-muted-foreground pl-1 -mt-1">Tip: scroll horizontally to view more files</div> */}

      <div className="overflow-x-auto pb-2">
        <div className="flex gap-3 pr-2 pl-2">
          {filteredFiles.map((file) => (
            <Card key={file.url} className="overflow-hidden w-36 sm:w-44 flex-shrink-0">
              <div className="bg-muted flex items-center justify-center h-32 sm:h-40 w-full rounded-lg overflow-hidden">
                {file.category === "image" ? (
                  <img src={file.url || "/placeholder.svg"} alt={file.filename} className="w-full h-full object-contain" />
                ) : file.category === "video" ? (
                  <video src={file.url} className="w-full h-full object-contain" controls={false} />
                ) : (
                  <div className="flex flex-col items-center gap-2 text-muted-foreground">
                    {getFileIcon(file.category)}
                    <span className="text-sm">Audio File</span>
                  </div>
                )}
              </div>
              <div className="p-3">
                <div className="flex items-center gap-2 mb-2">
                  {getFileIcon(file.category)}
                  <span className="text-sm font-medium truncate">{file.filename}</span>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <Button size="icon" variant="outline" onClick={() => window.open(file.url, "_blank")} className="h-8 w-8">
                    <ExternalLink className="h-3 w-3" />
                  </Button>
                  {onSelect && (
                    <Button size="icon" onClick={() => onSelect(file)} className="h-8 w-8">
                      <Check className="h-3 w-3" />
                    </Button>
                  )}
                  <Button
                    size="icon"
                    variant="outline"
                    onClick={() => handleDelete(file.url)}
                    className="h-8 w-8 text-destructive hover:text-destructive"
                  >
                    <Trash2 className="h-3 w-3" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {filteredFiles.length === 0 && (
        <div className="text-center py-12 text-muted-foreground">
          <div className="mb-4">{getFileIcon(filter)}</div>
          <p>No {filter === "all" ? "" : filter} files found</p>
        </div>
      )}
    </div>
  )
}
