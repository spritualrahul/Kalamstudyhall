import Image from "next/image";
import Link from "next/link";
import { ArrowRight, PlayCircle } from "lucide-react";
import dynamic from "next/dynamic";

const CardCarousel = dynamic(() => import("@/components/CardCarousel"), {
  loading: () => (
    <div className="flex gap-6 overflow-hidden">
      {[1, 2, 3].map((i) => (
        <div key={i} className="h-64 w-80 shrink-0 animate-pulse rounded-3xl bg-slate-100" />
      ))}
    </div>
  ),
});

import {
  cn,
  DoodleLayer,
  ExperienceCard,
  GradientWord,
  IconBubble,
  InfoTile,
  KalamIcon,
  ProgramCard,
  SectionBadge,
  ValueCard,
} from "@/components/KalamUI";
import {
  coreValues,
  experiences,
  featuredPrograms,
  heroStats,
  teachingApproach,
  weekendBenefits,
  weekendHighlights,
} from "@/data/kalam";

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-slate-100 bg-white pt-[86px]">


        <div className="grid min-h-[540px] w-full items-start gap-5 py-7 pl-5 pr-5 md:pl-8 md:pr-8 lg:grid-cols-[minmax(460px,600px)_minmax(0,1fr)] lg:pl-8 lg:pr-0 xl:pl-10">
          <div className="relative z-10 mt-10 max-w-2xl">
            <SectionBadge label="After-School Enrichment Programs" tone="purple" />
            <h1 className="relative mt-7 max-w-[660px] text-[clamp(3.25rem,5.1vw,5rem)] font-black leading-[1.02] text-[var(--kalam-navy)]">
              <span className="block whitespace-nowrap">Creative Learning</span>
              <span className="block whitespace-nowrap">for Curious</span>
              <span className="block whitespace-nowrap">
                <GradientWord from="#F45B56" via="#C83FEA" to="#6E3FE5">
                  Young Minds
                </GradientWord>
              </span>

            </h1>
            <p className="mt-6 max-w-lg text-lg leading-8 text-[var(--kalam-muted)]">
              An after-school enrichment space where children from Pre-K to Grade 8 learn
              academics through creative methods, personalized attention, communication-building,
              and hands-on activities in a joyful learning environment.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/programs"
                className="k-button bg-gradient-to-r from-[#7B4EF4] to-[#5A34D6] text-white shadow-xl shadow-purple-200/70"
              >
                Explore Programs
                <ArrowRight size={20} />
              </Link>
              <Link
                href="/contact"
                className="k-button border-2 border-[#7B4EF4]/35 bg-white text-[#5A34D6]"
              >
                <KalamIcon name="calendar" size={20} />
                Book a Visit
              </Link>
            </div>
          </div>

          <div className="relative z-10 self-start lg:ml-auto lg:w-full lg:max-w-[760px] xl:max-w-[820px]">
            <div className="relative aspect-[794/566] min-h-[300px] overflow-hidden md:min-h-[500px]">
              <Image
                src="/kalam-assets/hero-kids.png"
                alt="Children learning together at Kalam Study Hall"
                fill
                priority
                quality={92}
                className="object-cover object-right"
                sizes="(max-width: 1024px) 100vw, 58vw"
              />
            </div>
          </div>
        </div>

        <div className="relative z-10 grid w-full gap-6 px-5 pb-8 pt-2 md:grid-cols-3 md:px-8 lg:px-8 xl:px-10">
          {heroStats.map((stat) => (
            <article key={stat.label} className="k-card flex min-h-[10.8rem] items-center gap-5 px-5 py-7 md:px-6">
              <IconBubble icon={stat.icon} tone={stat.tone} size="lg" className="h-24 w-24 ring-0" />
              <div>
                <div
                  className={cn(
                    "text-3xl font-black leading-none",
                    stat.tone === "purple"
                      ? "text-[#6E3FE5]"
                      : stat.tone === "orange"
                        ? "text-[#F97316]"
                        : "text-[#20A95E]",
                  )}
                >
                  {stat.value}
                </div>
                <h3 className="mt-2 text-base font-extrabold text-[var(--kalam-navy)]">
                  {stat.label}
                </h3>
                <p className="mt-1 text-sm leading-5 text-[var(--kalam-muted)]">{stat.detail}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="page-section bg-white" id="programs-preview" style={{ paddingTop: "2.5rem" }}>
        {/* Programs bg image — full cover */}
        <img
          src="/programs-bg.png"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-contain object-center pointer-events-none"
          style={{ zIndex: 0 }}
        />
        <div className="absolute inset-0 bg-white/10 pointer-events-none" style={{ zIndex: 1 }} />
        <div className="relative z-10 page-container">
          <div className="mx-auto max-w-4xl text-center">
            <SectionBadge icon="star" label="Holistic Enrichment Programs" tone="purple" />
            <h2 className="section-title mt-5">
              <span className="block whitespace-nowrap">Programs That Help Children</span>
              <span className="block"><GradientWord>Learn, Communicate & Grow</GradientWord></span>
            </h2>
            <p className="section-copy mt-5">
              Thoughtfully designed after-school enrichment programs that help children build
              strong learning foundations, communication skills, creativity, confidence, and
              independent thinking through engaging small-group experiences.
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {featuredPrograms.map((program) => (
              <ProgramCard key={program.title} program={program} />
            ))}
          </div>
        </div>
      </section>

      <section className="page-section bg-[#FBF9FF]" id="approach" style={{ paddingTop: "2.5rem" }}>

        <div className="relative z-10 page-container">
          <div className="mx-auto max-w-5xl text-center">
            <SectionBadge icon="lightbulb" label="The Kalam Learning Method" tone="purple" />
            <h2 className="section-title mt-5">
              The Kalam <GradientWord>Learning Approach</GradientWord>
            </h2>
            <p className="section-copy mx-auto mt-5 max-w-4xl">
              At Kalam Study Hall, we believe children learn best when they are encouraged to
              understand, explore, communicate, and create.
            </p>
            <p className="section-copy mx-auto mt-4 max-w-4xl">
              Our approach combines conceptual learning, personalized attention, and creative
              exploration to help every child grow with confidence, curiosity, and joy.
            </p>
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-3">
            {teachingApproach.map((item) => (
              <article key={item.title} className="k-card group overflow-hidden text-center">
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={item.image}
                    alt=""
                    fill
                    quality={92}
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    style={{ objectPosition: item.imagePosition ?? "50% 50%" }}
                  />
                </div>
                <div className="px-8 pb-9">
                  <IconBubble icon={item.icon} tone={item.tone} size="lg" className="-mt-9 shadow-lg" />
                  <h3 className="mt-6 text-2xl font-extrabold text-[var(--kalam-navy)]">
                    {item.title}
                  </h3>
                  <span
                    className={cn(
                      "mx-auto mt-4 block h-1 w-12 rounded-full",
                      item.tone === "purple"
                        ? "bg-[#6E3FE5]"
                        : item.tone === "green"
                          ? "bg-[#20A95E]"
                          : "bg-[#F97316]",
                    )}
                  />
                  <p className="mt-6 text-base leading-7 text-[var(--kalam-muted)]">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section bg-white" id="weekends">
        <div className="page-container">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.95fr_0.42fr] lg:items-start">
            <div>
              <SectionBadge icon="palette" label="Weekend Enrichment Programs" tone="orange" />
              <h2 className="mt-5 text-[clamp(2.9rem,5vw,4.5rem)] font-black leading-[1.02] text-[var(--kalam-navy)]">
                <span className="block whitespace-nowrap">Beyond Academics</span>
                <span className="block">at <GradientWord from="#F43F7F" via="#F43F7F" to="#6E3FE5">Kalam</GradientWord></span>
              </h2>
              <p className="mt-6 text-lg leading-8 text-[var(--kalam-muted)]">
                At Kalam Study Hall, weekends are all about exploring, creating, playing and
                making memories. We offer fun-filled workshops, creative activities, games,
                movie evenings and special events that help children build confidence,
                friendships and real-world skills.
              </p>
              <div className="mt-6 rounded-2xl bg-[#FFF0F6] p-5 font-bold text-[var(--kalam-navy)]">
                <span className="text-[#F43F7F]">Register now</span> and enjoy engaging weekend
                sessions filled with creativity, learning and lots of fun!
              </div>
              <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {["Learn & Explore", "Make Friends", "Build Confidence", "Have Fun Always"].map(
                  (label, index) => (
                    <div key={label} className="text-center text-xs font-extrabold text-[var(--kalam-navy)]">
                      <IconBubble
                        icon={index === 0 ? "lightbulb" : index === 1 ? "users" : index === 2 ? "smile" : "heart"}
                        tone={index === 0 ? "yellow" : index === 1 ? "purple" : index === 2 ? "green" : "pink"}
                        size="sm"
                        className="mx-auto mb-2"
                      />
                      {label}
                    </div>
                  ),
                )}
              </div>
              <div className="mt-7 flex flex-wrap gap-4">
                <Link
                  href="/workshops"
                  className="k-button bg-gradient-to-r from-[#7B4EF4] to-[#F43F7F] text-white shadow-xl shadow-pink-200/70"
                >
                  Explore All Workshops
                  <ArrowRight size={19} />
                </Link>
                <Link
                  href="/about"
                  className="k-button border border-slate-200 bg-white text-[var(--kalam-navy)] shadow-lg shadow-slate-100"
                >
                  <PlayCircle size={19} className="text-[#6E3FE5]" />
                  How It Works
                </Link>
              </div>
            </div>

            <div className="relative min-h-[430px]">
              <div className="absolute left-0 top-6 h-[56%] w-[68%] overflow-hidden rounded-[1.6rem] border-[6px] border-white shadow-2xl shadow-orange-100">
                <Image
                  src="/kalam-assets/hd/workshop-painting.jpg"
                  alt="Children painting together at Kalam weekend workshop"
                  fill
                  quality={92}
                  className="object-cover"
                  sizes="(max-width: 1024px) 65vw, 26vw"
                />
              </div>
              <div className="absolute right-0 top-24 h-[38%] w-[48%] overflow-hidden rounded-[1.35rem] border-[6px] border-white shadow-xl shadow-purple-100">
                <Image
                  src="/kalam-assets/hd/workshop-clay.jpg"
                  alt="Child shaping clay during a creative workshop"
                  fill
                  quality={92}
                  className="object-cover"
                  sizes="(max-width: 1024px) 48vw, 19vw"
                />
              </div>
              <div className="absolute bottom-0 left-16 h-[35%] w-[44%] overflow-hidden rounded-[1.35rem] border-[6px] border-white shadow-xl shadow-pink-100">
                <Image
                  src="/kalam-assets/hd/workshop-origami.jpg"
                  alt="Colorful paper craft activity"
                  fill
                  quality={92}
                  className="object-cover"
                  sizes="(max-width: 1024px) 44vw, 18vw"
                />
              </div>
              <div className="absolute bottom-8 right-10 h-[30%] w-[36%] overflow-hidden rounded-[1.35rem] border-[6px] border-white shadow-xl shadow-green-100">
                <Image
                  src="/kalam-assets/hd/workshop-games.jpg"
                  alt="Children enjoying a weekend game activity"
                  fill
                  quality={92}
                  className="object-cover"
                  sizes="(max-width: 1024px) 36vw, 15vw"
                />
              </div>
            </div>

            <div className="grid gap-4">
              {weekendBenefits.map((benefit) => (
                <InfoTile key={benefit.title} {...benefit} compact />
              ))}
            </div>
          </div>

          <div className="mt-16 text-center">
            <h3 className="inline-flex items-center justify-center gap-3 text-3xl font-black text-[var(--kalam-navy)]">
              <KalamIcon name="calendar" className="text-[#6E3FE5]" />
              Upcoming Workshops
            </h3>
            <p className="mt-2 text-[var(--kalam-muted)]">
              Exciting weekend workshops for creative young minds.
            </p>
          </div>

          <CardCarousel
            className="mt-8"
            ariaLabel="upcoming workshop cards"
            slideClassName="experience-slide"
          >
            {experiences.slice(0, 6).map((experience) => (
              <ExperienceCard key={experience.title} experience={experience} />
            ))}
          </CardCarousel>

          <div className="k-card-soft mt-7 grid gap-6 p-6 md:grid-cols-[1.1fr_repeat(4,1fr)]">
            <div className="flex items-center gap-4">
              <IconBubble icon="heart" tone="pink" size="lg" />
              <h3 className="text-2xl font-black leading-tight text-[var(--kalam-navy)]">
                Why Kids Love Kalam Weekends
              </h3>
            </div>
            {weekendHighlights.map((item) => (
              <div key={item.title} className="border-l border-[#E6DAFF] pl-5">
                <IconBubble icon={item.icon} tone={item.tone} size="sm" />
                <h4 className="mt-3 text-sm font-extrabold leading-tight text-[var(--kalam-navy)]">
                  {item.title}
                </h4>
                <p className="mt-2 text-xs leading-5 text-[var(--kalam-muted)]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section bg-[#FFFEFB] -mt-8" id="values">
        <DoodleLayer />
        <div className="page-container">
          <div className="mx-auto max-w-4xl text-center">
            <SectionBadge icon="star" label="What We Stand For" tone="orange" />
            <h2 className="section-title mt-5">Our Core Values</h2>
            <p className="section-copy mt-4">
              The values that guide everything we do at Kalam Study Hall.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {coreValues.map((value) => (
              <ValueCard key={value.title} {...value} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
