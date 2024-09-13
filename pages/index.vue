<template>
  <WrapperScrollControl>
    <section id="home" class="flex justify-center h-full">
      <div class="home-wrapper relative w-full h-screen flex justify-center">
        <div
          class="flex justify-center w-full bg-image bg-cover bg-center grayscale brightness-50 bg-heroMobile md:bg-hero z-10 shadow-2xl"
        ></div>

        <LabelAnimatedTitle
          quote='"Crafting seamless experiences with code and design."'
        />
        <a
          class="tooltip absolute bottom-12 flex justify-center items-center rounded-md w-7 h-7 md:w-10 md:h-10 hover:bg-gray-900 hover:bg-opacity-50 hover:transition-colors ml-auto m-2 z-30 animate-bounce"
          href="#about"
        >
          <Icon
            name="ic:outline-keyboard-double-arrow-down"
            class="text-white p-2 md:p-3 w-7 h-7 md:w-12 md:h-12"
          />
          <WrapperTooltip>Navigate to About</WrapperTooltip>
        </a>
      </div>
    </section>
    <section
      id="about"
      class="grid grid-cols-1 grid-rows-[280px,1fr,350px] md:grid-cols-2 w-full md:h-full overflow-x-hidden overflow-y-hidden md:grid-rows-[1fr,400px] px-5 sm:px-10 md:pt-10 md:px-10 lg:px-20 relative before:w-72 before:h-2/5 before:md:w-96 before:md:h-2/5 before:absolute before:-top-10 before:-right-10"
    >
      <div class="flex flex-col row-start-2 md:row-start-1 z-10 select-none">
        <LabelTitle text="About me" />
        <p class="py-10 font-semibold text-sm md:text-lg xl:text-xl">
          Hi, I'm Leonardo Milanesi, a
          <WrapperHighlighted>17-year-old</WrapperHighlighted> frontend
          developer currently in my
          <WrapperHighlighted>final year of high school</WrapperHighlighted>. My
          journey in tech has led me to explore a variety of
          <WrapperHighlighted>programming languages</WrapperHighlighted> and
          <WrapperHighlighted>frameworks</WrapperHighlighted>. I have hands-on
          experience with <WrapperHighlighted>JavaScript</WrapperHighlighted>,
          <WrapperHighlighted>Python</WrapperHighlighted>, and
          <WrapperHighlighted>C#</WrapperHighlighted>, and a basic understanding
          of <WrapperHighlighted>Java</WrapperHighlighted> and
          <WrapperHighlighted>Express.js</WrapperHighlighted>. I'm proficient in
          popular <WrapperHighlighted>frameworks</WrapperHighlighted> like
          <WrapperHighlighted>React.js</WrapperHighlighted>,
          <WrapperHighlighted>React Native</WrapperHighlighted>,
          <WrapperHighlighted>Vue.js</WrapperHighlighted>,
          <WrapperHighlighted>Nuxt</WrapperHighlighted>, and
          <WrapperHighlighted>Node.js</WrapperHighlighted>. I’m passionate about
          crafting engaging and intuitive
          <WrapperHighlighted>user experiences</WrapperHighlighted>, and I’m
          excited to continue growing and learning in the world of
          <WrapperHighlighted>web development</WrapperHighlighted>.
        </p>
      </div>
      <img
        src="@/assets/personal-pic.jpg"
        alt="Leonardo Milanesi Picture"
        class="w-56 md:w-72 lg:w-86 justify-self-center md:justify-self-end self-center rounded-full z-10 selected-none"
      />
      <SliderSkills />
    </section>
    <section
      id="info"
      class="relative overflow-x-hidden pb-10 px-5 sm:px-10 md:px-10 lg:px-20 flex flex-col md:h-screen before:w-72 before:h-1/3 before:md:w-96 before:md:h-2/5 before:absolute before:top-10 before:-left-10"
    >
      <div class="flex flex-col col-span-4 items-end select-none">
        <LabelTitle text="Contact" />
      </div>
      <div
        class="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 z-30 gap-5 md:gap-7 lg:gap-10 w-full h-full place-content-around mt-10 justify-center"
      >
        <CardMap />
        <CardBackground
          title="leonardo.milanesi.06@gmail.com"
          desc="Feel free to drop me an email for collaborations, project inquiries, or just to connect!"
          bg="bg-mail"
        />
        <CardBackground
          title="+39 370 313 5876"
          desc="Give me a call or send a message for quicker responses or to chat about potential opportunities!"
          bg="bg-phone"
        />
        <CardBackground
          title="@leonardo.milanesi_"
          desc="Check out my Instagram project updates, and a glimpse into my creative journey!"
          bg="bg-social"
          url="https://www.instagram.com/leonardo.milanesi_/"
        />
      </div>
    </section>
  </WrapperScrollControl>
</template>
