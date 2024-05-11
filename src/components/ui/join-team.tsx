"use client"
import { useState, useRef, ChangeEvent } from 'react';
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export function JoinTeam() {
  const [resume, setResume] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setResume(file);
  };

  return (
    <main className="w-full">
      <section className="bg-gray-100 py-12 md:py-20 dark:bg-gray-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl space-y-6 text-center">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Join Our Research Team</h1>
            <p className="text-lg text-gray-500 dark:text-gray-400">
              We&#39;re looking for talented researchers to join our growing team. Apply today and help us push the
              boundaries of innovation.
            </p>
          </div>
        </div>
      </section>
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl space-y-6">
            <form className="rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800 dark:text-gray-50">
              <div className="grid gap-6">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Enter your name" />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" placeholder="Enter your email" type="email" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="research-interests">Research Interests</Label>
                  <Textarea id="research-interests" placeholder="Describe your research interests" />
                </div>
                <div>
                  <Label htmlFor="skills">Skills</Label>
                  <Input id="skills" placeholder="List your relevant skills" />
                </div>
                <div>
                  <Label htmlFor="resume">Resume</Label>
                  <div className="flex items-center gap-2">
                    <input 
                      id="resume" 
                      type="file" 
                      accept=".pdf" 
                      onChange={handleFileChange} 
                      style={{ display: 'none' }} 
                      ref={fileInputRef} 
                    />
                    <Button size="sm" type="button" onClick={() => fileInputRef.current?.click()}>
                      Upload
                    </Button>
                    {resume && <span>{resume.name}</span>}
                  </div>
                </div>
              </div>
              <div className="mt-6 flex justify-end">
                <Button type="submit">Apply Now</Button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}
