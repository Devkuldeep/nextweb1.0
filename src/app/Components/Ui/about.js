import Image from "next/image";


export default function About() {
  return (<>

    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     
    <h3 id="about" className="lg:text-5xl text-sm font-bold">About</h3>
    <section class="pt-10 overflow-hidden md:pt-0 sm:pt-16 2xl:pt-16">
    <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div class="grid items-center grid-cols-1 md:grid-cols-2">

            <div>
                <h2 class="text-3xl font-bold leading-tight text-black  sm:text-4xl lg:text-5xl">Hey 👋 I
                    am
                    <br class="block sm:hidden" />Jenny Carter
                </h2>
                <p class="max-w-lg mt-3 text-xl leading-relaxed text-gray-600  md:mt-8">
                    Amet minim mollit non deserunt
                    ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
                    Exercitation veniam consequat sunt nostrud amet.
                </p>

                <p class="mt-4 text-xl text-gray-600  md:mt-8">
                    <span class="relative inline-block">
                        <span class="absolute inline-block w-full bottom-0.5 h-2 bg-yellow-300"></span>
                    <span class="relative"> Have a question? </span>
                    </span>
                    <br class="block sm:hidden" />Ask me on <a href="#" title=""
                        class="transition-all duration-200 text-sky-500  hover:text-sky-600  hover:underline">git </a>
                </p>
            </div>

            <div class="relative">
                <img class="absolute inset-x-0 bottom-0 -mb-48 -translate-x-1/2 left-1/2" src="https://cdn.rareblocks.xyz/collection/celebration/images/team/1/blob-shape.svg" alt="" />

                <img class="relative w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110" src="https://cdn.rareblocks.xyz/collection/celebration/images/team/1/business-woman.png" alt="" />
            </div>

        </div>
    </div>
</section>









<section id="features" class="container mx-auto px-4 space-y-6 bg-slate-50 py-8 md:py-12 lg:py-20">

    <div class="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">

        <h2 class="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-6xl">Features</h2>

        <p class="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            The product can personalize user experiences by understanding individual preferences and tailoring
            recommendations or content based on user behavior and historical data.
        </p>

    </div>

    <div class="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">

        <div
            class="relative overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2">
            <div class="flex h-[180px] flex-col justify-between rounded-md p-6">
                <svg viewBox="0 0 24 24" class="h-12 w-12 fill-current">
                    <path
                        d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.573 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z">
                    </path>
                </svg>
                <div class="space-y-2">
                    <h3 class="font-bold">Next.js 13</h3>
                    <p class="text-sm text-muted-foreground">App dir, Routing, Layouts, Loading UI and API routes.</p>
                </div>
            </div>
        </div>

        <div
            class="relative overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2">
            <div class="flex h-[180px] flex-col justify-between rounded-md p-6">
                <svg viewBox="0 0 24 24" class="h-12 w-12 fill-current">
                    <path
                        d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38a2.167 2.167 0 0 0-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44a23.476 23.476 0 0 0-3.107-.534A23.892 23.892 0 0 0 12.769 4.7c1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442a22.73 22.73 0 0 0-3.113.538 15.02 15.02 0 0 1-.254-1.42c-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87a25.64 25.64 0 0 1-4.412.005 26.64 26.64 0 0 1-1.183-1.86c-.372-.64-.71-1.29-1.018-1.946a25.17 25.17 0 0 1 1.013-1.954c.38-.66.773-1.286 1.18-1.868A25.245 25.245 0 0 1 12 8.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933a25.952 25.952 0 0 0-1.345-2.32zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493a23.966 23.966 0 0 0-1.1-2.98c.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98a23.142 23.142 0 0 0-1.086 2.964c-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39a25.819 25.819 0 0 0 1.341-2.338zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143a22.005 22.005 0 0 1-2.006-.386c.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295a1.185 1.185 0 0 1-.553-.132c-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z">
                    </path>
                </svg>
                <div class="space-y-2">
                    <h3 class="font-bold">React 18</h3>
                    <p class="text-sm">Server and Client Components. Use hook.</p>
                </div>
            </div>
        </div>

        <div
            class="relative overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2">
            <div class="flex h-[180px] flex-col justify-between rounded-md p-6">
                <svg viewBox="0 0 24 24" class="h-12 w-12 fill-current">
                    <path
                        d="M0 12C0 5.373 5.373 0 12 0c4.873 0 9.067 2.904 10.947 7.077l-15.87 15.87a11.981 11.981 0 0 1-1.935-1.099L14.99 12H12l-8.485 8.485A11.962 11.962 0 0 1 0 12Zm12.004 12L24 12.004C23.998 18.628 18.628 23.998 12.004 24Z">
                    </path>
                </svg>
                <div class="space-y-2">
                    <h3 class="font-bold">Database</h3>
                    <p class="text-sm text-muted-foreground">ORM using Prisma and deployed on PlanetScale.</p>
                </div>
            </div>
        </div>

        <div
            class="relative overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2">
            <div class="flex h-[180px] flex-col justify-between rounded-md p-6">
                <svg viewBox="0 0 24 24" class="h-12 w-12 fill-current">
                    <path
                        d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z">
                    </path>
                </svg>
                <div class="space-y-2">
                    <h3 class="font-bold">Components</h3>
                    <p class="text-sm text-muted-foreground">UI components built using Radix UI and styled with Tailwind
                        CSS.</p>
                </div>
            </div>
        </div>

        <div
            class="relative overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2">
            <div class="flex h-[180px] flex-col justify-between rounded-md p-6">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"
                    class="h-12 w-12 fill-current">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
                <div class="space-y-2">
                    <h3 class="font-bold">Authentication</h3>
                    <p class="text-sm text-muted-foreground">Authentication using NextAuth.js and middlewares.</p>
                </div>
            </div>
        </div>

        <div
            class="relative overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2">
            <div class="flex h-[180px] flex-col justify-between rounded-md p-6">
                <svg viewBox="0 0 24 24" class="h-12 w-12 fill-current">
                    <path
                        d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.594-7.305h.003z">
                    </path>
                </svg>
                <div class="space-y-2">
                    <h3 class="font-bold">Subscriptions</h3>
                    <p class="text-sm text-muted-foreground">Free and paid subscriptions using Stripe.</p>
                </div>
            </div>
        </div>

    </div>

</section>

























<>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
  />
  <section id="new-features" className="py-8 bg-white sm:py-10 lg:py-16">
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl xl:text-5xl">
          Boost Your Productivity{" "}
        </h2>
        <p className="mt-4 text-base leading-7 text-gray-600 sm:mt-8">
          Enhance your workflow with advanced features
        </p>
      </div>
      <div className="grid grid-cols-1 mt-10 text-center sm:mt-16 sm:grid-cols-2 sm:gap-x-12 gap-y-12 md:grid-cols-3 md:gap-0 xl:mt-24">
        {/* Feature 1 */}
        <div className="md:p-8 lg:p-14 flex flex-col justify-center items-center">
          <div className="w-14 h-14 rounded-full bg-purple-200 flex justify-center items-center">
            <i className="fa-solid fa-chart-column text-3xl text-gray-900" />
          </div>
          <h3 className="mt-12 text-xl font-bold text-gray-900">
            Advanced Analytics
          </h3>
          <p className="mt-5 text-base text-gray-600">
            Track and analyze your data with powerful analytics tools. Gain
            valuable insights for better decision-making.
          </p>
        </div>
        {/* Feature 2 */}
        <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200 flex flex-col justify-center items-center">
          <div className="w-14 h-14 rounded-full bg-teal-200 flex justify-center items-center">
            <i className="fa-solid fa-truck-fast text-3xl text-gray-900" />
          </div>
          <h3 className="mt-12 text-xl font-bold text-gray-900">
            Fast Integration
          </h3>
          <p className="mt-5 text-base text-gray-600">
            Seamlessly integrate with your existing tools and systems for a
            smooth workflow experience.
          </p>
        </div>
        {/* Feature 3 */}
        <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200 flex flex-col justify-center items-center">
          <div className="w-14 h-14 rounded-full bg-yellow-200 flex justify-center items-center">
            <i className="fa-solid fa-shield text-3xl text-gray-900" />
          </div>
          <h3 className="mt-12 text-xl font-bold text-gray-900">
            Security First
          </h3>
          <p className="mt-5 text-base text-gray-600">
            Ensure the safety of your data with top-notch security features.
            Your privacy is our priority.
          </p>
        </div>
        {/* Feature 4 */}
        <div className="md:p-8 lg:p-14 md:border-t md:border-gray-200 flex flex-col justify-center items-center">
          <div className="w-14 h-14 rounded-full bg-red-200 flex justify-center items-center">
            <i className="fa-solid fa-cloud text-3xl text-gray-900" />
          </div>
          <h3 className="mt-12 text-xl font-bold text-gray-900">
            Cloud Integration
          </h3>
          <p className="mt-5 text-base text-gray-600">
            Access your data from anywhere with seamless cloud integration. Work
            without boundaries.
          </p>
        </div>
        {/* Feature 5 */}
        <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200 md:border-t flex flex-col justify-center items-center">
          <div className="w-14 h-14 rounded-full bg-green-200 flex justify-center items-center">
            <i className="fa-solid fa-pen-nib text-3xl text-gray-900" />
          </div>
          <h3 className="mt-12 text-xl font-bold text-gray-900">
            Task Management
          </h3>
          <p className="mt-5 text-base text-gray-600">
            Organize your workflow with efficient task management features. Stay
            on top of your projects effortlessly.
          </p>
        </div>
        {/* Feature 6 */}
        <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200 md:border-t flex flex-col justify-center items-center">
          <div className="w-14 h-14 rounded-full bg-orange-200 flex justify-center items-center">
            <i className="fa-solid fa-bolt text-3xl text-gray-900" />
          </div>
          <h3 className="mt-12 text-xl font-bold text-gray-900">
            Performance Metrics
          </h3>
          <p className="mt-5 text-base text-gray-600">
            Monitor and measure your performance with comprehensive metrics.
            Optimize your processes for maximum efficiency.
          </p>
        </div>
      </div>
    </div>
  </section>
</>


























<section className="">
  <div className="py-12 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="lg:text-center">
        <h2 className="font-heading mb-4 bg-orange-100 text-orange-800 px-4 py-2 rounded-lg md:w-64 md:mx-auto text-xs font-semibold tracking-widest text-black uppercase title-font">
          Why choose us?
        </h2>
        <p className="font-heading mt-2 text-3xl leading-8 font-semibold tracking-tight text-gray-900 sm:text-4xl">
          We know tech, we know finance. We are fintech experts.
        </p>
        <p className="mt-4 max-w-2xl text-lg text-gray-500 lg:mx-auto">
          We know how to handle taxation for all the countried we operate in. We
          care for our customers and help them manage cashflows.
        </p>
      </div>
      <div className="mt-10">
        <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
          <div className="relative">
            <dt>
              <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                <img src="https://www.svgrepo.com/show/503163/api-settings.svg" />
              </div>
              <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">
                Powerful API
              </p>
            </dt>
            <dd className="mt-2 ml-16 text-base text-gray-500">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
              impedit perferendis suscipit eaque, iste dolor cupiditate
              blanditiis ratione.
            </dd>
          </div>
          <div className="relative">
            <dt>
              <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                <img src="https://www.svgrepo.com/show/503138/webpack.svg" />
              </div>
              <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">
                Easy to integrate SDK
              </p>
            </dt>
            <dd className="mt-2 ml-16 text-base text-gray-500">
              {" "}
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
              impedit perferendis suscipit eaque, iste dolor cupiditate
              blanditiis ratione.
            </dd>
          </div>
          <div className="relative">
            <dt>
              <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                <img src="https://www.svgrepo.com/show/511771/dashboard-671.svg" />
              </div>
              <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">
                Low Transaction Cost
              </p>
            </dt>
            <dd className="mt-2 ml-16 text-base text-gray-500">
              {" "}
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
              impedit perferendis suscipit eaque, iste dolor cupiditate
              blanditiis ratione.
            </dd>
          </div>
          <div className="relative">
            <dt>
              <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                <img src="https://www.svgrepo.com/show/76267/free-commercial-label.svg" />
              </div>
              <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">
                Powerful Dashboard
              </p>
            </dt>
            <dd className="mt-2 ml-16 text-base text-gray-500">
              {" "}
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
              impedit perferendis suscipit eaque, iste dolor cupiditate
              blanditiis ratione.
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</section>




    </main>
    </>
  );
}
