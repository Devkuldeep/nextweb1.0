import Image from "next/image";


export default function Hero() {
  return (<>

    <div className=" w-full  min-h-screen m-auto p-8">

      <section class="hero  w-full">
        

        <div class="grid lg:grid-cols-2 items-center justify-items-center gap-5">
        <div className="bg-red-800 order-2">
            <Image src="/kuldeep.jpeg"  alt="Kuldeep Dev" width="300" height="350" />
</div>
          <div class="order-1 lg:order-1  flex flex-col justify-center lg:items-start text-center sm:text-left ">
            <p class="mt-2 text-3xl md:text-lg sm:text-sm text-black">Hi There</p>
            <p class="text-4xl font-bold md:text-7xl  text-black ">I&apos;m
              <span class="text-orange-600">Kuldeep Dev</span>.
            </p>
            <p class="text-3xl  md:text-3xl font-semibold text-black ">I am a {'FullStack Developer '} <span>

            </span></p>
            <p class="mt-2 lg:text-xl md:text-sm sm:text-xs text-black ">Designer and Developer devoted to
              crafting beautiful web experiences
              focused on simplicity and purpose.</p>
            <div class='flex'>
              <button class="text-lg md:text-2xl bg-orange-600 text-black py-2 m-2 px-5 mt-10 hover:bg-orange-500 rounded-full outline-1  font-semibold transition-all" ><a href='#about'>About Me</a></button>
              <button class="text-lg md:text-2xl bg-orange-600 text-black py-2 m-2 px-5 mt-10 hover:bg-orange-500 rounded-full " > 🎉</button>
            </div>


          </div>
         
        </div>
      </section>

    </div>

  </>
  );
}
