<script setup lang="ts">

import { Github, Blocks, GitGraph, Languages, Wallet, CloudDownload, PackageOpen, Check } from "lucide-vue-next"
import { Button } from "~/components/ui/button"
import { Input } from "~/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "~/components/ui/select"


const content = {
  hero: {
    header: "Build Content with b10cks",
    body: "The headless CMS with modular blocks, zero paywalls, and simple usage-based pricing. All features, all the time. Built by an industry veteran.",
    cta: "Join the Waitlist",
    note: "100% Open Source"
  },
  features: {
    title: "Features",
    intro: "b10cks is a modern headless CMS that combines technical sophistication with practical simplicity. Built from the ground up for users, who need both flexibility and performance, with no artificial limitations or enterprise-level pricing. Here's what stands out:",
    items: [
      {
        icon: Blocks,
        header: "Modular Block Architecture",
        body: "Build your content model with reusable blocks. Mix, match, and nest them to create exactly what you need without limitations."
      },
      {
        icon: Languages,
        header: "Full Localization Built-in",
        body: "Field-level translation control with inheritance across content structures. Global content management without the enterprise price tag."
      },
      {
        icon: GitGraph,
        header: "Git-Like Version History",
        body: "Branch, merge, and roll back content with a familiar Git-like workflow. Full history of every change, forever."
      },
      {
        icon: CloudDownload,
        header: "CDN + Image Processing",
        body: "Content and images delivered at lightning speed with automatic optimization and processing."
      },
      {
        icon: Wallet,
        header: "No Paywalls, No Feature-Tiers",
        body: "Unlike other CMSs, we don't lock features behind expensive tiers. Pay a fair share for storage and traffic. All enterprise features available from day one."
      },
      {
        icon: PackageOpen,
        header: "Zero Vendor Lock-in",
        body: "Fully open source with a clean API. Your content, your way. Export everything, anytime."
      }
    ]
  },
  about: {
    title: "Our Philosophy",
    header: "Modern Content Management Should Be",
    items: [
      "Accessible: Every feature should be available to everyone, regardless of budget or scale, eliminating arbitrary paywalls.",
      "Modular: Following atomic design principles with blocks that can be nested and combined to create sophisticated content structures.",
      "User-Focused: Built with user's in mind, with Git-like versioning and a block architecture that feels natural and powerful.",
      "Transparent: Pricing should be straightforward and based only on what you actually use - storage and traffic - not which features you need.",
      "Uncompromising: Enterprise-grade capabilities like localization and CDN delivery should be standard, not premium add-ons.",
      "Open: 100% open source with zero vendor lock-in, giving you complete control over your content ecosystem."
    ]
  },
  waitlist: {
    header: "Break Free From Overpriced CMS",
    body: "Join the waitlist for a preview access to the CMS that doesn't charge extra for features you actually need."
  }
}

useSeoMeta({
  title: 'b10cks - Block-Based Headless CMS',
  description: 'Your block-based headless CMS with no paywalls, Git-like versioning, and full localization. Pay only for storage and traffic, get all features from day one.',
  ogTitle: 'b10cks - Build Content Without Limitations',
  ogDescription: 'Your block-based headless CMS with no paywalls, Git-like versioning, and full localization. Pay only for storage and traffic, get all features from day one.',
})

</script>
<template>
  <main class="min-h-screen bg-background text-foreground">
    <section id="about" class="relative z-10 border-y">
      <div class="container mx-auto p-4 md:px-20 md:py-10 border-x">
      </div>
    </section>

    <section class="relative z-10">
      <div class="container mx-auto px-4 py-20 md:py-32 text-center border-x grid-bg grid gap-5 md:gap-10">
        <div class="mx-auto flex justify-center">
          <img src="~/assets/b10cks-logo.svg" alt="b10cks Logo" width="80" height="80" class="h-20 w-20" />
        </div>
        <h1 class="text-4xl font-bold tracking-tight md:text-6xl">{{ content.hero.header }}</h1>
        <p class="mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl">{{ content.hero.body }}</p>
        <div class="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button size="lg" class="min-w-[180px] rounded-sm">
            <a href="#waitlist">{{ content.hero.cta }}</a>
          </Button>
          <div class="flex items-center text-sm text-muted-foreground">
            <span class="mr-2 inline-block h-1 w-1 bg-muted-foreground"></span>
            {{ content.hero.note }}
          </div>
        </div>
      </div>
    </section>

    <section id="features" class="relative z-10 bg-black border-y">
      <div class="container mx-auto px-4 md:px-20 py-20 border-x">
        <div class="mb-12 grid gap-4">
          <h2 class="text-3xl font-bold tracking-tight md:text-4xl">{{ content.features.title }}</h2>
          <p class="max-w-prose">{{ content.features.intro }}</p>
        </div>
        <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div v-for="(feature, i) in content.features.items" :key="i"
            class="border border-border bg-card p-6 stripes-bg">
            <div class="mb-4 inline-block bg-muted p-3">
              <component :is="feature.icon" class="h-6 w-6" />
            </div>
            <h3 class="mb-2 text-xl font-bold">{{ feature.header }}</h3>
            <p class="text-muted-foreground">{{ feature.body }}</p>
          </div>
        </div>
      </div>
    </section>

    <section id="about" class="relative z-10 border-y">
      <div class="container mx-auto px-4 md:px-20 py-20 border-x grid-bg">
        <h2 class="mb-12 text-center text-3xl font-bold tracking-tight md:text-4xl">{{ content.about.title }}</h2>
        <div class="mx-auto max-w-3xl border border-border bg-card p-8 grid gap-6">
          <h3 class="text-2xl font-bold">{{ content.about.header }}</h3>
          <ul class="grid gap-6">
            <li v-for="(line, i) in content.about.items" class="flex gap-3">
              <Check class="w-4 h-4 shrink-0 mt-1" />
              <span>
                {{ line }}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section id="about" class="relative z-10 border-y">
      <div class="container mx-auto px-4 md:px-20 py-10 border-x">
      </div>
    </section>

    <section id="waitlist" class="relative z-10 bg-primary">
      <form class="container mx-auto px-4 py-20 border-x border-x-muted" target="_blank"
        action="https://b10cks.us5.list-manage.com/subscribe?u=fcb693022199979d5b9fcde92&amp;id=3fb7e70b93"
        method="POST">
        <div class="mx-auto max-w-3xl border border-border bg-card p-8 lg:py-20">
          <h2 class="mb-4 text-center text-3xl font-bold tracking-tight md:text-4xl">
            {{ content.waitlist.header }}
          </h2>
          <p class="mb-10 text-center text-lg text-muted-foreground">
            {{ content.waitlist.body }}
          </p>
          <div class="grid gap-6">
            <div class="grid gap-6 md:grid-cols-2">
              <div>
                <label for="name" class="mb-2 block text-sm font-medium">
                  Name
                </label>
                <Input id="name" name="MERGE1" placeholder="Your name" class="rounded-none" />
              </div>
              <div>
                <label for="email" class="mb-2 block text-sm font-medium">
                  Email
                </label>
                <Input id="email" type="email" name="MERGE0" placeholder="your@email.com" class="rounded-none" />
              </div>
            </div>
            <div>
              <label for="project" class="mb-2 block text-sm font-medium">
                What are you building?
              </label>
              <Select id="project" name="MERGE3">
                <SelectTrigger class="rounded-none w-full">
                  <SelectValue placeholder="Website, app, e-commerce..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Website">Website</SelectItem>
                  <SelectItem value="App">App</SelectItem>
                  <SelectItem value="E-Commerce">E-commerce</SelectItem>
                  <SelectItem value="Other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label for="current-cms" class="mb-2 block text-sm font-medium">
                Current CMS (if any)
              </label>
              <Input id="current-cms" name="MERGE2" placeholder="What are you using now?" class="rounded-none" />
            </div>
            <Button type="submit" class="w-full rounded-sm">
              Join Waitlist
            </Button>
          </div>
        </div>
      </form>
    </section>
    <footer class="relative z-10">
      <div class="container mx-auto px-4 lg:px-20 py-12 border-x">
        <div class="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div class="flex items-center gap-2">
            <img src="~/assets/b10cks-logo.svg" alt="b10cks Logo" width="24" height="24" class="h-6 w-6" />
          </div>
          <span class="text-sm text-muted-foreground font-medium ">Copyright © 2025 Coder's Cantina.</span>
          <div class="flex gap-6">
            <a href="https://github.com/b10cks" class="">
              <Github :size="20" />
              <span class="sr-only">GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  </main>
</template>
