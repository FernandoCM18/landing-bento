'use client'
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/pagination";

import { Navigation, Thumbs, Pagination } from "swiper/modules";
import { Avatar, Starts, TagLine, Typography } from "@/components"
import { testimonials } from "@/data/testimonials"
import style from './Testimonial.module.css'
import { useState } from "react";
import Icon from "@/components/Icon/Icon";

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
          <div className={`${style.BackgroundTestimonial} bg-surface-background`}>
            <Swiper
              // initialSlide={2}
              className="swiper-container-author"
              navigation={{
                prevEl: ".swiper-arrow-prev",
                nextEl: ".swiper-arrow-next",
              }}
              pagination={{
                el: ".swiper-pagination-testimonials",
                // clickable: true,
              }}
              loop={true}
              speed={600}
              slidesPerView={1}
              spaceBetween={12}
              centeredSlides={true}
              thumbs={{ swiper: thumbsSwiper }}
              modules={[Navigation, Thumbs, Pagination]}
              breakpoints={{
                768: {
                  slidesPerView: 3,
                },
              }}
            >
              {testimonials.map((testimonial) => (
                <SwiperSlide
                  className={`${style.BorderTestimonial} bg-neutral-neutral-22 rounded-[20px] p-3 mt-3`}
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
            <div className="mt-16">
              <Swiper
                spaceBetween={10}
                speed={500}
                onSwiper={setThumbsSwiper}
                modules={[Navigation, Thumbs, Pagination]}
                loop={true}
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
      </div>
      <div>
        <button className="w-10 h-10 swiper-arrow-prev">
          <Icon name="chevronLeft" />
        </button>

        <div className="swiper-pagination-testimonials" />

        <button className="w-10 h-10 swiper-arrow-next">
          <Icon name="chevronRight" />
        </button>

      </div>

    </section>
  )
}

