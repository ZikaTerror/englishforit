import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'

const stats = [
  { id: 1, name: 'Transactions every 24 hours', value: '44 million' },
  { id: 2, name: 'Assets under holding', value: '$119 trillion' },
  { id: 3, name: 'New users annually', value: '46,000' },
]

export default function Home() {
  return (
    <div className="bg-white">

        <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <svg
                aria-hidden="true"
                className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
                >
                <defs>
                    <pattern
                    x="50%"
                    y={-1}
                    id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                    width={200}
                    height={200}
                    patternUnits="userSpaceOnUse"
                    >
                    <path d="M100 200V.5M.5 .5H200" fill="none" />
                    </pattern>
                </defs>
                <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
                    <path
                    d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                    strokeWidth={0}
                    />
                </svg>
                <rect fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" width="100%" height="100%" strokeWidth={0} />
                </svg>
            </div>
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
                <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                <div className="lg:pr-4">
                    <div className="lg:max-w-lg">
                    <p className="text-base/7 font-semibold text-indigo-600">Deploy faster</p>
                    <h1 className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                        A better workflow
                    </h1>
                    <p className="mt-6 text-xl/8 text-gray-700">
                        Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At arcu, sit dui mi, nibh dui, diam
                        eget aliquam. Quisque id at vitae feugiat egestas.
                    </p>
                    </div>
                </div>
                </div>
                <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
                <img
                    alt=""
                    src="https://tailwindcss.com/plus-assets/img/component-images/dark-project-app-screenshot.png"
                    className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
                />
                </div>
                <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                <div className="lg:pr-4">
                    <div className="max-w-xl text-base/7 text-gray-700 lg:max-w-lg">
                    <p>
                        Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet
                        vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque
                        erat velit. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris
                        semper sed amet vitae sed turpis id.
                    </p>
                    <ul role="list" className="mt-8 space-y-8 text-gray-600">
                        <li className="flex gap-x-3">
                        <CloudArrowUpIcon aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-600" />
                        <span>
                            <strong className="font-semibold text-gray-900">Push to deploy.</strong> Lorem ipsum, dolor sit amet
                            consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate
                            blanditiis ratione.
                        </span>
                        </li>
                        <li className="flex gap-x-3">
                        <LockClosedIcon aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-600" />
                        <span>
                            <strong className="font-semibold text-gray-900">SSL certificates.</strong> Anim aute id magna aliqua
                            ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.
                        </span>
                        </li>
                        <li className="flex gap-x-3">
                        <ServerIcon aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-600" />
                        <span>
                            <strong className="font-semibold text-gray-900">Database backups.</strong> Ac tincidunt sapien
                            vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.
                        </span>
                        </li>
                    </ul>
                    <p className="mt-8">
                        Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id blandit molestie auctor
                        fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate et ultrices hac
                        adipiscing egestas. Iaculis convallis ac tempor et ut. Ac lorem vel integer orci.
                    </p>
                    <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">No server? No problem.</h2>
                    <p className="mt-6">
                        Id orci tellus laoreet id ac. Dolor, aenean leo, ac etiam consequat in. Convallis arcu ipsum urna nibh.
                        Pharetra, euismod vitae interdum mauris enim, consequat vulputate nibh. Maecenas pellentesque id sed
                        tellus mauris, ultrices mauris. Tincidunt enim cursus ridiculus mi. Pellentesque nam sed nullam sed diam
                        turpis ipsum eu a sed convallis diam.
                    </p>
                    </div>
                </div>
                </div>
            </div>
        </div>


        <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
            <div className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
                <svg
                    viewBox="0 0 1024 1024"
                    aria-hidden="true"
                    className="absolute left-1/2 top-1/2 -z-10 size-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
                >
                    <circle r={512} cx={512} cy={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
                    <defs>
                    <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                        <stop stopColor="#7775D6" />
                        <stop offset={1} stopColor="#E935C1" />
                    </radialGradient>
                    </defs>
                </svg>
                <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
                    <h2 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                    Boost your productivity. Start using our app today.
                    </h2>
                    <p className="mt-6 text-pretty text-lg/8 text-gray-300">
                    Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla.
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                    <a
                        href="#"
                        className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    >
                        Get started
                    </a>
                    <a href="#" className="text-sm/6 font-semibold text-white">
                        Learn more <span aria-hidden="true">→</span>
                    </a>
                    </div>
                </div>
                <div className="relative mt-16 h-80 lg:mt-8">
                    <img
                    alt="App screenshot"
                    src="https://tailwindcss.com/plus-assets/img/component-images/dark-project-app-screenshot.png"
                    width={1824}
                    height={1080}
                    className="absolute left-0 top-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
                    />
                </div>
            </div>
      </div>

        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
                {stats.map((stat) => (
                    <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
                    <dt className="text-base/7 text-gray-600">{stat.name}</dt>
                    <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                        {stat.value}
                    </dd>
                    </div>
                ))}
                </dl>
            </div>
        </div>

        <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
            <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
            <div className="mx-auto max-w-2xl lg:max-w-4xl">
                <img
                alt=""
                src="https://tailwindcss.com/plus-assets/img/logos/workcation-logo-indigo-600.svg"
                className="mx-auto h-12"
                />
                <figure className="mt-10">
                <blockquote className="text-center text-xl/8 font-semibold text-gray-900 sm:text-2xl/9">
                    <p>
                    “Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias
                    molestiae. Numquam corrupti in laborum sed rerum et corporis.”
                    </p>
                </blockquote>
                <figcaption className="mt-10">
                    <img
                    alt=""
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    className="mx-auto size-10 rounded-full"
                    />
                    <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                    <div className="font-semibold text-gray-900">Judith Black</div>
                    <svg width={3} height={3} viewBox="0 0 2 2" aria-hidden="true" className="fill-gray-900">
                        <circle r={1} cx={1} cy={1} />
                    </svg>
                    <div className="text-gray-600">CEO of Workcation</div>
                    </div>
                </figcaption>
                </figure>
            </div>
        </section>

    </div> 
  )
}