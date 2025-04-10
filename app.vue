<script setup lang="ts">

import { Github, Blocks, GitGraph, Languages, Wallet, CloudDownload, PackageOpen, Check, TwitterIcon } from "lucide-vue-next"
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
        body: "Build your content model with reusable blocks. Mix, match, and nest them to create exactly what you need without limitations.",
        ref: "BLK-MOD-001"
      },
      {
        icon: Languages,
        header: "Full Localization Built-in",
        body: "Field-level translation control with inheritance across content structures. Global content management without the enterprise price tag.",
        ref: "LOC-MOD-002"
      },
      {
        icon: GitGraph,
        header: "Git-Like Version History",
        body: "Branch, merge, and roll back content with a familiar Git-like workflow. Full history of every change, forever.",
        ref: "VER-MOD-003"
      },
      {
        icon: CloudDownload,
        header: "CDN + Image Processing",
        body: "Content and images delivered at lightning speed with automatic optimization and processing.",
        ref: "CDN-MOD-004"
      },
      {
        icon: Wallet,
        header: "No Paywalls, No Feature-Tiers",
        body: "Unlike other CMSs, we don't lock features behind expensive tiers. Pay a fair share for storage and traffic. All enterprise features available from day one.",
        ref: "PRO-MOD-005"
      },
      {
        icon: PackageOpen,
        header: "Zero Vendor Lock-in",
        body: "Fully open source with a clean API. Your content, your way. Export everything, anytime.",
        ref: "OSS-MOD-006"
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
      <div class="container mx-auto px-4 py-20 md:py-32 text-center border-x grid-bg grid gap-5 md:gap-10 relative">
        <div class="absolute right-4 top-4 text-[10px] font-mono text-muted-foreground text-left">
          <div>SECTION A-0</div>
          <div>HERO</div>
        </div>
        <div class="mx-auto flex justify-center">
          <OverdrawnBorder class="p-4" label="LOGO:LG">
            <img src="~/assets/b10cks-logo.svg" alt="b10cks Logo" title="b10cks" width="80" height="80"
              class="h-20 w-20" />
          </OverdrawnBorder>
        </div>

        <OverdrawnBorder class="p-4" label="HEADLINE">
          <h1 class="text-4xl text-primary font-bold tracking-tight md:text-6xl text-primary">{{ content.hero.header }}
          </h1>
        </OverdrawnBorder>
        <p class="mx-auto max-w-2xl text-lg md:text-xl">{{ content.hero.body }}</p>
        <div class="flex flex-col items-center justify-center gap-12 sm:gap-4 sm:flex-row">
          <OverdrawnBorder label="BUTTON:PRIMARY:LG">
            <Button size="lg" class="min-w-[180px] rounded-sm">
              <a href="#waitlist">{{ content.hero.cta }}</a>
            </Button>
          </OverdrawnBorder>
          <div class="flex items-center text-sm">
            <span class="mr-2 h-1 w-1 bg-muted-foreground hidden sm:inline-block"></span>
            {{ content.hero.note }}
          </div>
        </div>
      </div>
    </section>

    <section id="features" class="relative z-10 bg-black border-y">
      <div class="absolute container mx-auto px-4 md:px-20 inset-0">
        <div class="h-full w-full grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div class="border-x"></div>
          <div class="border-x"></div>
          <div class="border-x"></div>
        </div>
      </div>
      <div class="container mx-auto px-4 md:px-20 py-20 border-x relative">
        <div class="absolute right-4 top-4 text-[10px] font-mono text-muted-foreground">
          <div>SECTION A-1</div>
          <div>FEATURES DETAIL</div>
        </div>
        <div class="mb-12 grid gap-4">
          <h2 class="text-3xl font-bold tracking-tight md:text-4xl text-primary">{{ content.features.title }}</h2>
          <p class="max-w-prose">{{ content.features.intro }}</p>
        </div>
        <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div v-for="(feature, i) in content.features.items" :key="i"
            class="border border-border bg-card p-6 stripes-bg relative flex flex-col">
            <div class="absolute right-6 top-6 text-[10px] font-mono text-muted-foreground">F-BLOCK[{{ i }}]</div>
            <div>
              <OverdrawnBorder class="mb-6 inline-block bg-background p-3">
                <component :is="feature.icon" class="h-6 w-6 text-primary" />
              </OverdrawnBorder>
            </div>
            <h3 class="mb-3 text-xl font-bold text-primary">{{ feature.header }}</h3>
            <p class="text-base grow">{{ feature.body }}</p>
            <div class="text-[10px] font-mono text-muted-foreground text-left mt-4">REF: {{ feature.ref
            }}</div>
          </div>
        </div>
      </div>
    </section>

    <section id="about" class="relative z-10 border-y">
      <div class="container mx-auto px-4 md:px-20 py-20 border-x grid-bg relative">
        <div class="absolute right-4 top-4 text-[10px] font-mono text-muted-foreground">
          <div>SECTION A-2</div>
          <div>FEATURES DETAIL</div>
        </div>
        <h2 class="mb-12 text-center text-3xl font-bold tracking-tight md:text-4xl text-primary">{{ content.about.title
        }}</h2>

        <OverdrawnBorder class="mx-auto max-w-3xl bg-card p-8 grid gap-6">
          <h3 class="text-2xl font-bold text-primary">{{ content.about.header }}</h3>
          <ul class="grid gap-6">
            <li v-for="(line, i) in content.about.items" class="flex gap-3">
              <Check class="w-4 h-4 shrink-0 mt-1" />
              <span>
                {{ line }}
              </span>
            </li>
          </ul>
          <div class="text-[10px] font-mono text-muted-foreground text-left">SCALE: 1:1<br>MATERIAL: EXPERIENCE</div>
        </OverdrawnBorder>
      </div>
    </section>

    <section id="about" class="relative z-10 border-y">
      <div class="container mx-auto px-4 md:px-20 py-10 border-x">
      </div>
    </section>

    <section id="waitlist" class="relative z-10 bg-primary">
      <form class="container mx-auto px-4 py-20 border-x border-x-muted relative" target="_blank"
        action="https://b10cks.us5.list-manage.com/subscribe?u=fcb693022199979d5b9fcde92&amp;id=3fb7e70b93"
        method="POST">
        <div class="absolute right-4 top-4 text-[10px] font-mono text-muted-foreground text-left">
          <div>SECTION A-3</div>
          <div>WAITLIST FORM</div>
        </div>
        <div class="mx-auto max-w-3xl border border-border bg-card p-8 lg:py-20">
          <h2 class="mb-4 text-center text-3xl font-bold tracking-tight md:text-4xl text-primary">
            {{ content.waitlist.header }}
          </h2>
          <p class="mb-10 text-center text-lg">
            {{ content.waitlist.body }}
          </p>
          <div class="grid gap-6">
            <div class="grid gap-6 md:grid-cols-2">
              <div>
                <label for="name" class="mb-2 block text-sm font-medium text-primary">
                  Name <span class="text-mono text-[10px] text-muted-foreground">[REQUIRED]</span>
                </label>
                <Input id="name" name="MERGE1" placeholder="Your name" class="rounded-none" />
              </div>
              <div>
                <label for="email" class="mb-2 block text-sm font-medium text-primary">
                  Email <span class="text-mono text-[10px] text-muted-foreground">[REQUIRED]</span>
                </label>
                <Input id="email" type="email" name="MERGE0" placeholder="your@email.com" class="rounded-none" />
              </div>
            </div>
            <div>
              <label for="project" class="mb-2 block text-sm font-medium text-primary">
                What are you building? <span class="text-mono text-[10px] text-muted-foreground">[SELECT ONE]</span>
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
              <label for="current-cms" class="mb-2 block text-sm font-medium text-primary">
                Current CMS <span class="text-mono text-[10px] text-muted-foreground">[OPTIONAL]</span>
              </label>
              <Input id="current-cms" name="MERGE2" placeholder="What are you using now?" class="rounded-none" />
            </div>
            <Button type="submit" class="w-full rounded-sm">
              Join Waitlist
            </Button>
            <div class="text-[10px] font-mono text-muted-foreground text-center">FORM ID: WAITLIST-2025-V1</div>
          </div>
        </div>
      </form>
    </section>
    <footer class="relative z-10">
      <div class="container mx-auto px-4 lg:px-20 py-12 border-x relative grid gap-8">
        <div class="flex flex-col items-center justify-between gap-8 md:gap-4 md:flex-row">
          <div class="flex items-center gap-2 relative">
            <OverdrawnBorder label="LOGO:SM" class="p-4">
              <img src="~/assets/b10cks-logo.svg" alt="b10cks Logo" title="b10cks" width="24" height="24"
                class="h-6 w-6" />
            </OverdrawnBorder>
          </div>
          <OverdrawnBorder class="p-4" label="COPYRIGHT NOTICE">
            <span class="text-sm text-muted-foreground font-medium">© 2025 <a
                href="https://www.coderscantina.com">Coder's Cantina</a>. Build with 🖤</span>
          </OverdrawnBorder>
          <OverdrawnBorder class="flex gap-6 relative p-4" label="SOCIAL LINKS">
            <a href="https://github.com/b10cks" class="">
              <Github :size="20" />
              <span class="sr-only">GitHub</span>
            </a>
            <a href="https://x.com/b10cks_cms" class="">
              <TwitterIcon :size="20" />
              <span class="sr-only">X</span>
            </a>
          </OverdrawnBorder>
        </div>
        <hr class="mt-3">
        <div class="flex flex-col text-center md:text-left justify-between items-center gap-6 md:flex-row">
          <div class="text-[10px] font-mono text-muted-foreground">
            <div>LANDING PAGE: B10CKS-2025-001</div>
            <div>SCALE: 1:100 | UNITS: PIXELS | DATE: 2025-04-10</div>
          </div>
          <OverdrawnBorder class="p-4 flex gap-1" label="THEME">
            <div class="h-4 w-4 border" />
            <div class="h-4 w-4 bg-muted" />
            <div class="h-4 w-4 bg-foreground" />
            <div class="h-4 w-4 bg-primary" />
          </OverdrawnBorder>
        </div>
      </div>
    </footer>
  </main>
</template>
