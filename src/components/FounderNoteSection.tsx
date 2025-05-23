import Image from "next/image";

export default function FounderNoteSection() {
  return (
    <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        <Image
          src="/butter-sync-logo.png"
          width={150}
          height={25.63}
          alt="ButterSync Logo"
          className="mx-auto"
        />
        <figure className="mt-10">
          <blockquote className="text-center text-lg leading-8 text-gray-900 sm:text-lg sm:leading-9">
            <p className="mb-4">
              Hey, you have been reading a lot. Let&apos;s pause to know each
              other better. You must be thinking: Who am I and why do I care
              about home service companies?
            </p>
            <p className="mb-4">
              I have been a part of the services industry for the past 2 years.
              I have built software solutions for small home service providers
              to enterprise companies from scratch.
            </p>
            <p className="mb-4">
              I have come to found out that building a software solution is part
              of the job. Getting it to work for the business with the existing
              solutions is the most difficult part.
            </p>
            <p className="mb-4">
              My main focus was just that. Building workflows for home service
              business users to help them to do their job in the most effective
              way.
            </p>
            <p className="mb-4">
              Then it hit me, if I can help enterprise companies build workflows
              for smooth operations. There are lot of home service companies
              drowning in the sea of software, waiting for a life guard.
            </p>
            <p className="mb-4">
              That&apos;s what seeded the idea of ButterSync, a workflow
              automation agency built only for the home service business
              companies. If you work in home service industry, let&apos;s talk.
            </p>
          </blockquote>
          <figcaption className="mt-10">
            <Image
              src="/arslan-khalid.png"
              width={90}
              height={90}
              alt="Arslan Khalid | Founder ButterSync"
              className="mx-auto"
            />
            <div className="mt-4 flex items-center justify-center space-x-3 text-base">
              <div className="font-semibold text-gray-900">Arslan Khalid</div>
              <svg
                width={3}
                height={3}
                viewBox="0 0 2 2"
                aria-hidden="true"
                className="fill-gray-900"
              >
                <circle r={1} cx={1} cy={1} />
              </svg>
              <div className="text-gray-600">Founder ButterSync</div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
