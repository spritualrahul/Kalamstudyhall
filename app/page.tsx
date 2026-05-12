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
  weekendHighlights,
} from "@/data/kalam";

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-slate-100 bg-white pt-[86px]">
        {/* Background Image */}
        <img
          src="/hero%20bg.png"
          alt=""
          aria-hidden="true"
          className="absolute left-0 right-0 w-full pointer-events-none"
          style={{ zIndex: 0, top: "86px", height: "auto" }}
        />
        {/* Optional overlay to ensure text is perfectly readable */}
        <div className="absolute inset-0 bg-white/20 pointer-events-none" style={{ zIndex: 1 }} />
        <div className="grid w-full items-center gap-6 px-4 py-7 sm:px-6 md:gap-8 md:px-8 lg:grid-cols-[1.3fr_0.7fr] lg:gap-6 lg:pl-8 lg:pr-0 xl:grid-cols-[1.15fr_1fr] xl:gap-10 xl:pl-10">
          <div className="relative z-10 mx-auto mt-2 w-full max-w-2xl text-center sm:mt-4 md:mt-6 lg:mx-0 lg:text-left">
            <SectionBadge label="After-School Enrichment Programs" tone="purple" />
            <h1 className="relative mt-5 text-[clamp(2rem,5.5vw,5rem)] font-black leading-[1.05] text-[var(--kalam-navy)] sm:mt-7 lg:max-w-[660px]">
              <span className="block lg:whitespace-nowrap">Creative Learning</span>
              <span className="block lg:whitespace-nowrap">for Curious</span>
              <span className="block lg:whitespace-nowrap">
                <GradientWord from="#F45B56" via="#C83FEA" to="#6E3FE5">
                  Young Minds
                </GradientWord>
              </span>
            </h1>
            <p className="mx-auto mt-4 max-w-lg text-base leading-7 text-[var(--kalam-muted)] sm:mt-6 sm:text-lg sm:leading-8 lg:mx-0">
              An after-school enrichment space where children from Pre-K to Grade 8 learn
              academics through creative methods, personalized attention, communication-building,
              and hands-on activities in a joyful learning environment.
            </p>
            <div className="mt-6 flex flex-col items-center gap-3 sm:mt-8 sm:flex-row sm:justify-center sm:gap-4 lg:justify-start">
              <Link
                href="/programs"
                className="k-button w-full bg-gradient-to-r from-[#7B4EF4] to-[#5A34D6] text-white shadow-xl shadow-purple-200/70 sm:w-auto"
              >
                Explore Programs
                <ArrowRight size={20} />
              </Link>
              <Link
                href="/contact"
                className="k-button w-full border-2 border-[#7B4EF4]/35 bg-white text-[#5A34D6] sm:w-auto"
              >
                <KalamIcon name="calendar" size={20} />
                Book a Visit
              </Link>
            </div>
          </div>

          <div className="relative z-10 self-center h-[300px] w-full max-w-[500px] mx-auto sm:h-[400px] lg:h-[500px] lg:max-w-[600px] lg:ml-auto">
            {/* Main Image */}
            <div className="absolute left-0 top-0 h-[80%] w-[75%] rotate-[-2deg] overflow-hidden rounded-[2rem] border-[6px] border-white bg-slate-100 shadow-2xl shadow-purple-900/10 transition-transform duration-500 hover:rotate-0 hover:scale-105">
              <Image
                src="/kalam-assets/hero-kids.png"
                alt="Children learning together"
                fill
                priority
                quality={90}
                className="object-cover object-center lg:object-right"
                sizes="(max-width: 1024px) 70vw, 40vw"
              />
            </div>
            {/* Overlapping Image */}
            <div className="absolute bottom-0 right-0 z-10 h-[65%] w-[65%] rotate-[3deg] overflow-hidden rounded-[2rem] border-[6px] border-white bg-slate-100 shadow-2xl shadow-pink-900/10 transition-transform duration-500 hover:rotate-0 hover:scale-105">
              <Image
                src="/kalam-assets/hd/workshop-painting.jpg"
                alt="Children doing art and craft"
                fill
                priority
                quality={90}
                className="object-cover"
                sizes="(max-width: 1024px) 60vw, 35vw"
              />
            </div>
          </div>
        </div>

        <div className="relative z-10 grid w-full gap-4 px-4 pb-6 pt-2 sm:gap-6 sm:px-5 md:grid-cols-3 md:px-8 lg:px-8 xl:px-10">
          {heroStats.map((stat) => (
            <article key={stat.label} className="k-card flex min-h-[8rem] items-center gap-4 px-4 py-5 sm:min-h-[10.8rem] sm:gap-5 sm:px-5 sm:py-7 md:px-6">
              <IconBubble icon={stat.icon} tone={stat.tone} size="lg" className="h-16 w-16 ring-0 sm:h-24 sm:w-24" />
              <div>
                <div
                  className={cn(
                    "text-2xl font-black leading-none sm:text-3xl",
                    stat.tone === "purple"
                      ? "text-[#6E3FE5]"
                      : stat.tone === "orange"
                        ? "text-[#F97316]"
                        : "text-[#20A95E]",
                  )}
                >
                  {stat.value}
                </div>
                <h3 className="mt-1.5 text-sm font-extrabold text-[var(--kalam-navy)] sm:mt-2 sm:text-base">
                  {stat.label}
                </h3>
                <p className="mt-1 text-xs leading-5 text-[var(--kalam-muted)] sm:text-sm">{stat.detail}</p>
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
          className="absolute inset-0 top-12 h-full w-full object-contain object-center pointer-events-none"
          style={{ zIndex: 0 }}
        />
        <div className="absolute inset-0 bg-white/10 pointer-events-none" style={{ zIndex: 1 }} />
        <div className="relative z-10 page-container">
          <div className="mx-auto max-w-4xl text-center">
            <SectionBadge icon="star" label="Holistic Enrichment Programs" tone="purple" />
            <h2 className="section-title mt-5">
              <span className="block sm:whitespace-nowrap">Programs That Help Children</span>
              <span className="block"><GradientWord>Learn, Communicate & Grow</GradientWord></span>
            </h2>
            <p className="section-copy mt-5">
              Thoughtfully designed after-school enrichment programs that help children build
              strong learning foundations, communication skills, creativity, confidence, and
              independent thinking through engaging small-group experiences.
            </p>
          </div>

          <div className="mt-5 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
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

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3 lg:gap-8">
            {teachingApproach.map((item) => (
              <article key={item.title} className="k-card group text-center">
                <div className="relative h-40 overflow-hidden rounded-t-[1rem] sm:h-52">
                  <Image
                    src={item.image}
                    alt=""
                    fill
                    quality={92}
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    style={{ objectPosition: item.imagePosition ?? "50% 50%" }}
                  />
                </div>
                <div className="relative z-10 px-5 pb-7 sm:px-8 sm:pb-9">
                  <IconBubble icon={item.icon} tone={item.tone} size="lg" className="-mt-9 shadow-lg" />
                  <h3 className="mt-4 text-xl font-extrabold text-[var(--kalam-navy)] sm:mt-6 sm:text-2xl">
                    {item.title}
                  </h3>
                  <span
                    className={cn(
                      "mx-auto mt-3 block h-1 w-12 rounded-full sm:mt-4",
                      item.tone === "purple"
                        ? "bg-[#6E3FE5]"
                        : item.tone === "green"
                          ? "bg-[#20A95E]"
                          : "bg-[#F97316]",
                    )}
                  />
                  <p className="mt-4 text-sm leading-7 text-[var(--kalam-muted)] sm:mt-6 sm:text-base">
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
          <div className="grid gap-8 lg:gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-start">
            <div>
              <SectionBadge icon="palette" label="Weekend Enrichment Programs" tone="orange" />
              <h2 className="mt-5 text-[clamp(1.8rem,5vw,4.5rem)] font-black leading-[1.05] text-[var(--kalam-navy)]">
                <span className="block md:whitespace-nowrap">Beyond Academics</span>
                <span className="block">at <GradientWord from="#F43F7F" via="#F43F7F" to="#6E3FE5">Kalam</GradientWord></span>
              </h2>
              <p className="mt-4 text-base leading-7 text-[var(--kalam-muted)] sm:mt-6 sm:text-lg sm:leading-8">
                At Kalam Study Hall, weekends are all about exploring, creating, playing and
                making memories. We offer fun-filled workshops, creative activities, games,
                movie evenings and special events that help children build confidence,
                friendships and real-world skills.
              </p>
              <div className="mt-5 rounded-2xl bg-[#FFF0F6] p-4 text-sm font-bold text-[var(--kalam-navy)] sm:mt-6 sm:p-5 sm:text-base">
                <span className="text-[#F43F7F]">Register now</span> and enjoy engaging weekend
                sessions filled with creativity, learning and lots of fun!
              </div>
              <div className="mt-5 grid grid-cols-2 gap-3 sm:mt-6 sm:grid-cols-4 sm:gap-4">
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
              <div className="mt-6 flex flex-col gap-3 sm:mt-7 sm:flex-row sm:gap-4">
                <Link
                  href="/workshops"
                  className="k-button w-full bg-gradient-to-r from-[#7B4EF4] to-[#F43F7F] text-white shadow-xl shadow-pink-200/70 sm:w-auto"
                >
                  Explore All Workshops
                  <ArrowRight size={19} />
                </Link>
                <Link
                  href="/about"
                  className="k-button w-full border border-slate-200 bg-white text-[var(--kalam-navy)] shadow-lg shadow-slate-100 sm:w-auto"
                >
                  <PlayCircle size={19} className="text-[#6E3FE5]" />
                  How It Works
                </Link>
              </div>
            </div>

            {/* Weekend photo collage - responsive grid on mobile, absolute on desktop */}
            <div className="weekend-collage">
              <div className="shadow-orange-100">
                <Image
                  src="/kalam-assets/hd/workshop-painting.jpg"
                  alt="Children painting together at Kalam weekend workshop"
                  fill
                  quality={92}
                  className="object-cover"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 26vw"
                />
              </div>
              <div className="shadow-purple-100">
                <Image
                  src="/kalam-assets/hd/workshop-clay.jpg"
                  alt="Child shaping clay during a creative workshop"
                  fill
                  quality={92}
                  className="object-cover"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 19vw"
                />
              </div>
              <div className="shadow-pink-100">
                <Image
                  src="/kalam-assets/hd/workshop-origami.jpg"
                  alt="Colorful paper craft activity"
                  fill
                  quality={92}
                  className="object-cover"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 18vw"
                />
              </div>
              <div className="shadow-green-100">
                <Image
                  src="/kalam-assets/hd/workshop-games.jpg"
                  alt="Children enjoying a weekend game activity"
                  fill
                  quality={92}
                  className="object-cover"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 15vw"
                />
              </div>
            </div>
          </div>

          <div className="mt-10 text-center sm:mt-16">
            <h3 className="inline-flex items-center justify-center gap-2 text-xl font-black text-[var(--kalam-navy)] sm:gap-3 sm:text-3xl">
              <KalamIcon name="calendar" className="text-[#6E3FE5]" />
              Upcoming Workshops
            </h3>
            <p className="mt-2 text-sm text-[var(--kalam-muted)] sm:text-base">
              Exciting weekend workshops for creative young minds.
            </p>
          </div>

          <CardCarousel
            className="mt-6 sm:mt-8"
            ariaLabel="upcoming workshop cards"
            slideClassName="experience-slide"
          >
            {experiences.slice(0, 6).map((experience) => (
              <ExperienceCard key={experience.title} experience={experience} />
            ))}
          </CardCarousel>

          <div className="k-card-soft mt-6 grid gap-5 p-5 sm:mt-7 sm:gap-6 sm:p-6 md:grid-cols-[1.1fr_repeat(2,1fr)] lg:grid-cols-[1.1fr_repeat(4,1fr)]">
            <div className="flex items-center gap-4">
              <IconBubble icon="heart" tone="pink" size="lg" />
              <h3 className="text-xl font-black leading-tight text-[var(--kalam-navy)] sm:text-2xl">
                Why Kids Love Kalam Weekends
              </h3>
            </div>
            {weekendHighlights.map((item) => (
              <div key={item.title} className="border-l border-[#E6DAFF] pl-4 sm:pl-5">
                <IconBubble icon={item.icon} tone={item.tone} size="sm" />
                <h4 className="mt-2 text-sm font-extrabold leading-tight text-[var(--kalam-navy)] sm:mt-3">
                  {item.title}
                </h4>
                <p className="mt-1.5 text-xs leading-5 text-[var(--kalam-muted)] sm:mt-2">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section bg-[#FFFEFB] -mt-4 sm:-mt-8" id="values">
        <DoodleLayer />
        <div className="page-container">
          <div className="mx-auto max-w-4xl text-center">
            <SectionBadge icon="star" label="What We Stand For" tone="orange" />
            <h2 className="section-title mt-5">Our Core Values</h2>
            <p className="section-copy mt-4">
              The values that guide everything we do at Kalam Study Hall.
            </p>
          </div>
          <div className="mt-8 grid gap-5 sm:mt-10 sm:grid-cols-2 sm:gap-6 xl:grid-cols-4">
            {coreValues.map((value) => (
              <ValueCard key={value.title} {...value} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
