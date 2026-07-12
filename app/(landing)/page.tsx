import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  const experiences = [
    {
      role: "Software Engineering Intern at Uber",
      date: "Jun 2026 to Sep 2026",
      details: ["Core Services Engineering, Trusted Identity (SWE/ML)"]
    },
    {
      role: "Software Engineering Capstone at Microsoft",
      date: "Jan 2026 to Jun 2026",
      details: ["Led the end-to-end design and development of a Microsoft Capstone collaboration portal, delivering an MVP from concept to production in just five months."]
    },
    {
      role: "Software Engineering Intern at Uber",
      date: "Jun 2025 to Sep 2025",
      details: ["Core Services Engineering, Identity Services"]
    },
    {
      role: "Software Engineering Intern at Uber",
      date: "Jun 2024 to Sep 2024",
      details: ["Core Services Engineering, Partner Identity"]
    },
    {
      role: "Undergraduate Researcher at UC Berkeley",
      date: "Aug 2023 to Present",
      details: ["Development @ ChatCHW (AI/ML Research)"]
    },
    {
      role: "Software Engineering Intern at Open Energy Dashboard",
      date: "Nov 2023 to Dec 2023",
      details: ["Open source contribution"]
    },
    { role: "President at Google Developer Student Club", date: "Aug 2023 to Jun 2024" },
    { role: "Software Engineering Intern at Refer Me", date: "May 2023 to Aug 2023" },
  ];

  const education = [
    {
      name: "University of California, Irvine",
      date: "Graduating Dec 2026",
      details: ["Bachelor of Science in Software Engineering"]
    },
    {
      name: "De Anza College",
      date: "Sep 2022 to Jun 2024",
      details: ["Associate of Science in Computer Science", "Associate of Science in Mathematics"]
    },
    { name: "SHPE Member", date: "Oct 2024 to Present" },
    {
      name: "CodePath.org",
      date: "Issued Aug 2024",
      details: ["Advanced Technical Interview Prep (TIP 103)"]
    },
    { name: "Computing Talent Initative", date: "Mar 2023 to Dec 2023" },
  ];

  return (
    <div className="relative min-h-screen p-8 md:p-16 font-sans selection:text-white selection:bg-teal-500 z-0">

      {/* Background Elements (Stripe + Notion vibes) */}
      <div className="fixed inset-0 pointer-events-none -z-10 bg-grid-pattern opacity-60 mix-blend-color-burn"></div>
      <div className="fixed inset-0 pointer-events-none -z-20 overflow-hidden">
        {/* Glowing Orbs */}
        <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-teal-400/30 rounded-full blur-[100px] mix-blend-multiply animate-pulse" style={{ animationDuration: '8s' }}></div>
        <div className="absolute top-[20%] right-[-10%] w-[50vw] h-[50vw] bg-orange-400/30 rounded-full blur-[120px] mix-blend-multiply animate-pulse" style={{ animationDuration: '12s', animationDelay: '1s' }}></div>
        <div className="absolute bottom-[-10%] left-[20%] w-[40vw] h-[40vw] bg-rose-400/30 rounded-full blur-[100px] mix-blend-multiply animate-pulse" style={{ animationDuration: '10s', animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-3xl mx-auto space-y-16 relative">
        {/* Header Section */}
        <section className="relative space-y-6 pt-12">

          {/* Abstract Geometric Shapes */}
          <div className="absolute -top-6 -left-12 w-20 h-20 border-4 border-orange-400/40 rounded-3xl rotate-12 pointer-events-none -z-10 hidden md:block animate-pulse" style={{ animationDuration: '4s' }}></div>
          <div className="absolute top-10 right-10 w-8 h-8 bg-teal-400/50 rounded-full pointer-events-none -z-10 animate-bounce hidden md:block" style={{ animationDuration: '3s' }}></div>
          <div className="absolute top-1/2 -right-12 w-16 h-16 border-4 border-rose-400/40 rounded-full pointer-events-none -z-10 hidden md:block animate-pulse" style={{ animationDuration: '5s' }}></div>

          <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-rose-500 to-teal-600 leading-tight">
            Hello! I am Timothy <br />
            <span className="text-3xl text-stone-500 font-bold bg-clip-text text-transparent bg-gradient-to-r from-stone-500 to-stone-400">
              (Feel free to call me Tim)
            </span>
          </h1>
          <p className="text-lg leading-relaxed text-stone-800 font-medium">
            I am a software engineering student at the <Link href="https://uci.edu/" className="font-bold text-teal-700 hover:text-orange-600 transition-colors relative inline-block group">
              University of California, Irvine.
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-teal-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </Link> I
            have strong web development skills, but my passion lies in backend engineering.
            I originally transferred from De Anza College with an Associate&apos;s Degree in Computer Science and Mathematics.
            You might find me at your local cafe or library studying or working on a project.
            Feel free to reach out to me if you have any questions or just want to chat!
          </p>
          <div className="flex gap-4 pt-4">
            <Link href="mailto:tleprojectcs@gmail.com" className="inline-block px-8 py-3.5 rounded-2xl bg-gradient-to-r from-teal-500 to-teal-400 text-white font-bold hover:shadow-xl hover:-translate-y-1 transition-all shadow-teal-500/30">
              Email Me
            </Link>
            <Link href="https://www.resume.lol/share/g703rle" target="_blank" className="inline-block px-8 py-3.5 rounded-2xl bg-white text-teal-700 font-bold border border-teal-200 hover:shadow-xl hover:border-teal-400 hover:-translate-y-1 transition-all">
              View Resume
            </Link>
          </div>
        </section>

        {/* Experience Section */}
        <section className="relative space-y-8">
          {/* Decorative Shapes for Experience Section */}
          <div className="absolute top-10 -right-16 w-24 h-24 border-[6px] border-orange-300/30 rounded-xl rotate-45 pointer-events-none -z-10 hidden lg:block animate-pulse" style={{ animationDuration: '6s' }}></div>
          <div className="absolute top-1/3 -left-20 w-32 h-32 bg-teal-400/10 rounded-full blur-xl pointer-events-none -z-10 hidden lg:block"></div>
          <div className="absolute bottom-10 -right-8 w-10 h-10 border-4 border-rose-300/40 rounded-full pointer-events-none -z-10 hidden md:block animate-bounce" style={{ animationDuration: '4s' }}></div>

          <h2 className="text-3xl font-extrabold text-stone-800 tracking-tight">Experience</h2>

          <div className="relative border-l-2 border-teal-200/70 ml-3 md:ml-4 space-y-8 pb-4">
            {experiences.map((exp, i) => (
              <div key={i} className="relative pl-8 md:pl-10">
                {/* Timeline dot */}
                <span className="absolute -left-[9px] top-4 h-4 w-4 rounded-full bg-teal-500 shadow-[0_0_0_4px_rgba(255,255,255,1)]"></span>
                {/* Content */}
                <div className="group p-5 rounded-2xl bg-white/70 backdrop-blur-xl border border-white/60 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-teal-200 transition-all flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                  <div className="flex flex-col gap-1">
                    <span className="font-bold text-stone-800 group-hover:text-teal-700 transition-colors text-lg">{exp.role}</span>
                    {exp.details && (
                      <div className="flex flex-col text-sm text-stone-600 font-medium space-y-0.5 pt-1">
                        {exp.details.map((detail, idx) => (
                          <span key={idx}>{detail}</span>
                        ))}
                      </div>
                    )}
                  </div>
                  <span className="text-sm font-bold text-teal-800 bg-teal-100/50 px-4 py-1.5 rounded-full border border-teal-200/50 whitespace-nowrap mt-1 md:mt-0">{exp.date}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education & Organizations Section */}
        <section className="relative space-y-8 pb-12">
          {/* Decorative Shapes for Education Section */}
          <div className="absolute top-20 -left-16 w-16 h-16 border-[4px] border-teal-300/40 rounded-3xl -rotate-12 pointer-events-none -z-10 hidden lg:block animate-pulse" style={{ animationDuration: '5s' }}></div>
          <div className="absolute bottom-20 -right-12 w-20 h-20 bg-orange-400/20 rounded-full blur-lg pointer-events-none -z-10 hidden md:block"></div>
          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-transparent via-stone-300 to-transparent pointer-events-none"></div>

          <h2 className="text-3xl font-extrabold text-stone-800 tracking-tight">Education & Organizations</h2>

          <div className="relative border-l-2 border-orange-200/70 ml-3 md:ml-4 space-y-8 pb-4">
            {education.map((edu, i) => (
              <div key={i} className="relative pl-8 md:pl-10">
                {/* Timeline dot */}
                <span className="absolute -left-[9px] top-4 h-4 w-4 rounded-full bg-orange-500 shadow-[0_0_0_4px_rgba(255,255,255,1)]"></span>
                {/* Content */}
                <div className="group p-5 rounded-2xl bg-white/70 backdrop-blur-xl border border-white/60 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-orange-200 transition-all flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                  <div className="flex flex-col gap-1">
                    <span className="font-bold text-stone-800 group-hover:text-orange-600 transition-colors text-lg">{edu.name}</span>
                    {edu.details && (
                      <div className="flex flex-col text-sm text-stone-600 font-medium space-y-0.5 pt-1">
                        {edu.details.map((detail, idx) => (
                          <span key={idx}>{detail}</span>
                        ))}
                      </div>
                    )}
                  </div>
                  <span className="text-sm font-bold text-orange-800 bg-orange-100/50 px-4 py-1.5 rounded-full border border-orange-200/50 whitespace-nowrap mt-1 md:mt-0">{edu.date}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
