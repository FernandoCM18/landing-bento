'use client'
import { useState } from "react";
import Image from "next/image";
import { Avatar, Starts, TagLine, Typography, Icon } from "@/components";
import { testimonials } from "@/data/testimonials";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Style from "./Testimonial.module.css";
import { Autoplay, Navigation, Pagination, Thumbs } from "swiper/modules";
import { cn } from "@/utils/cn";

export const Testimonial = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  return (
    <section>
      <Image
        src="/assets/images/bento-38-main.svg"
        alt="image-ai-powered-search"
        width={336}
        height={336}
        className="mx-auto"
      />
      <div className="space-y-4 mb-10">
        <TagLine text="testimonials" />
        <Typography variant="H2" text="List. Organize. Conquer." className="gradient-text" />
        <Typography variant="Subtitle" text="Used by seriously productive people." className="text-text-tertiary" />
      </div>
      <div className="relative h-fit">
        <Starts className='absolute h-full' />
        <div className="relative bg-[#181818]/20 w-[872px] h-[316px] rounded-[48px] mx-auto overflow-hidden flex items-center justify-center">
          <Image src="/assets/images/user-list-frame.svg" alt="user-list-frame" layout="fill" objectFit="cover" />
          <div className={`${Style.BackgroundTestimonial} bg-surface-background`}>
            <Swiper
              className="swiper-author"
              spaceBetween={12}
              slidesPerView={1}
              loop={true}
              speed={600}
              centeredSlides={true}
              modules={[Navigation, Thumbs, Pagination]}
              thumbs={{ swiper: thumbsSwiper }}
              navigation={{
                prevEl: ".swiper-arrow-prev",
                nextEl: ".swiper-arrow-next",
              }}
              pagination={{
                el: ".swiper-pagination-testimonials",
                clickable: true,
              }}
              breakpoints={{
                768: {
                  slidesPerView: 3,
                },
              }}
            // autoplay={{
            //   delay: 2500,
            //   disableOnInteraction: false,
            // }}
            >
              {testimonials.map((testimonial) => (
                <SwiperSlide
                  className={cn(
                    Style.BorderTestimonial,
                    Style.AuthorTestimonial,
                    "bg-neutral-neutral/[0.02] rounded-[20px] p-3 mt-3")}
                  key={testimonial.id}
                >
                  <div className="flex gap-4">
                    <div className="w-11">
                      <Avatar width={44} height={44} avatarUrl={testimonial.avatar} name={testimonial.author} />
                    </div>
                    <div className="text-start">
                      <Typography variant="Base2(M)" text={testimonial.author} />
                      <Typography variant="Caption(R)" text={testimonial.post} className="text-text-tertiary" />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <Swiper
              className="mt-16 select-none"
              spaceBetween={10}
              speed={500}
              onSwiper={setThumbsSwiper}
              modules={[Navigation, Thumbs, Pagination]}
              loop={true}
              allowTouchMove={false}
            // autoplay={{
            //   delay: 2500,
            //   disableOnInteraction: false,
            // }}
            >
              {testimonials.map((testimonial) => (
                <SwiperSlide
                  key={testimonial.id}
                >
                  <Typography variant="Title" text={testimonial.title} className="text-text-primary" />
                  {testimonial.content && (
                    <Typography variant="Title" text={testimonial.content} className="text-text-tertiary" />
                  )}
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
      <div className="flex gap-4 items-center justify-center w-[200px] h-14 mx-auto p-2">
        <button className="w-10 h-10 swiper-arrow-prev">
          <Icon name="chevronLeft" />
        </button>

        <div className={cn("swiper-pagination-testimonials")} />

        <button className="w-10 h-10 swiper-arrow-next">
          <Icon name="chevronRight" />
        </button>

      </div>

    </section>
  )
}

