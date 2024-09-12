<template>
  <WrapperScrollControl>
    <section id="home" class="flex justify-center h-full">
      <div
        class="flex justify-center w-full bg-image bg-cover bg-center grayscale brightness-50 bg-heroMobile md:bg-hero z-10 shadow-2xl"
      ></div>

      <LabelAnimatedTitle
        quote='"Code is my canvas, innovation is my brush."'
      />
    </section>
    <section
      id="about"
      class="grid grid-cols-1 grid-rows-3 md:grid-cols-2 w-full md:h-full overflow-x-hidden overflow-y-hidden md:grid-rows-2 px-5 sm:px-10 md:pt-10 md:px-10 lg:px-20 relative before:w-72 before:h-2/5 before:md:w-96 before:md:h-2/5 before:absolute before:-top-10 before:-right-10"
    >
      <div class="flex flex-col row-start-2 md:row-start-1 z-10 select-none">
        <LabelTitle text="About me" />
        <p class="py-10 font-semibold text-sm md:text-lg xl:text-xl">
          Hi, I'm <WrapperHighlighted>Leonardo Milanesi</WrapperHighlighted>, a
          <LabelAge />-year-old junior
          <WrapperHighlighted>frontend developer</WrapperHighlighted> with a
          passion for technology, coding, and building sleek, user-friendly web
          interfaces. I love diving into new challenges, always learning, and
          striving to create digital solutions that are both functional and
          aesthetically pleasing.
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
      class="relative overflow-x-hidden pb-10 px-5 sm:px-10 md:px-10 lg:px-20 flex flex-col md:h-full before:w-72 before:h-1/3 before:md:w-96 before:md:h-2/5 before:absolute before:top-10 before:-left-10"
    >
      <div class="flex flex-col col-span-4 items-end select-none">
        <LabelTitle text="Useful info" />
      </div>
      <div
        class="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 z-30 gap-5 md:gap-7 lg:gap-10 w-full h-full place-content-around mt-10 justify-center"
      >
        <CardMap />
        <CardBackground
          title="leonardo.milanesi.06@gmail.com"
          desc="My mail is in here! It's a treasure trove of news, surprises, and
          heartfelt messages."
          bg="bg-mail"
        />
        <CardBackground
          title="+39 370 313 5876"
          desc="This box contains my phone number, which is a way to reach me for important calls or messages."
          bg="bg-phone"
        />
        <CardBackground
          title="@leonardo.milanesi_"
          desc="This box contains my Instagram account, where I share photos, videos, and stories with my friends."
          bg="bg-social"
        />
      </div>
    </section>
  </WrapperScrollControl>
</template>
