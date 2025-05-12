import { motion } from 'framer-motion';
import { Star, ArrowLeft, ArrowRight, CalendarCheck } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const testimonials = [
  {
    content: (<>
      <strong className="text-black">Zaoszczędziliśmy ponad 40 000 zł</strong> na samych odsetkach, bo Łukasz znalazł ofertę, której bank nawet nie pokazał. <strong className="text-black">zajął się wszystkim</strong> od A do Z, a my przeszliśmy przez cały proces <strong className="text-black">bez stresu</strong>. Wiedzieliśmy, na czym stoimy na każdym etapie. Polecam każdemu, kto nie chce przepłacać i szuka realnych oszczędności.
    </>),
    avatar: "/images/MichalL.webp",
    name: "Tomasz K.",
    role: "Oszczędność 40 000 zł i pełne prowadzenie bez stresu",
    summary: [
      "40 000 zł oszczędności",
      "Pełne prowadzenie",
      "Brak stresu i niepewności"
    ]
  },
  {
    content: (<>
      Myślałem, że kredyt jest poza zasięgiem — dwa banki odmówiły. Łukasz znalazł rozwiązanie, którego inni nawet nie zaproponowali i <strong className="text-black">obniżył moją ratę o 700 zł</strong> miesięcznie. <strong className="text-black">Wszystko wyjaśnił, poprowadził krok po kroku</strong>. Bez niego dalej płaciłbym za cudze błędy.
    </>),
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150",
    name: "Marek W.",
    role: "Kredyt po dwóch odmowach + rata niższa o 700 zł",
    summary: [
      "Kredyt uzyskany po 2 odmowach",
      "Mniej o 700 zł miesięcznie",
      "Pełne prowadzenie"
    ]
  },
  {
    content: (<>
      Refinansowanie z Łukaszem to była najlepsza decyzja — <strong className="text-black">moja rata spadła o 1200 zł miesięcznie. Zrobił wszystko za mnie</strong>, od papierów po negocjacje z bankiem. Tam, gdzie inni widzieli problem, on <strong className="text-black">wiedział</strong>, jak znaleźć rozwiązanie. Polecam każdemu, kto chce odzyskać kontrolę nad swoim kredytem.
    </>),
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150",
    name: "Anna S.",
    role: "Refinansowanie: 1200 zł mniej miesięcznie i zero stresu",
    summary: [
      "1200 zł oszczędności miesięcznie",
      "Kompleksowa obsługa dokumentów i negocjacji",
      "Odzyskanie kontroli nad kredytem"
    ]
  },
  {
    content: (<>
      Bank twierdził, że uruchomienie kredytu szybciej niż w 8 tygodni jest nierealne — Łukasz zrobił to w 3. Uratował mi termin u dewelopera i tysiące złotych kar. <strong className="text-black">Wiedział kogo nacisnąć i co zrobić</strong>, żeby się udało. To jest <strong className="text-black">wsparcie, którego nie dostaniesz nigdzie indziej</strong>.
    </>),
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150",
    name: "Piotr M.",
    role: "3 tygodnie zamiast 8 – uratowany termin i tysiące złotych",
    summary: [
      "Kredyt w 3 tygodnie zamiast 8",
      "Uratowany termin u dewelopera",
      "Uniknięcie tysięcy złotych kar"
    ]
  },
  {
    content: (<>
      Byłem pewien, że umowa z bankiem jest standardowa, ale Łukasz znalazł w niej zapis, który kosztowałby mnie 15 000 zł w 5 lat. Dzięki niemu <strong className="text-black">wiedziałem, co negocjować i uniknąłem pułapki</strong>. Wszystko spokojnie wytłumaczył, bez zbędnego gadania. Teraz wiem, że <strong className="text-black">nikt nie ogarnia tego lepiej</strong>.
    </>),
    avatar: "https://images.unsplash.com/photo-1555952517-2e8e729e0b44?auto=format&fit=crop&q=80&w=150",
    name: "Michał L.",
    role: "15 000 zł potencjalnej straty uniknięte dzięki analizy umowy",
    summary: [
      "Uniknięcie 15 000 zł straty",
      "Wczesna identyfikacja ukrytych kosztów",
      "Skuteczne negocjacje warunków umowy"
    ]
  }
];

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start'
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on('select', onSelect);
    
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section id="testimonials" className="py-24 px-8 lg:px-[120px] bg-[#F8F9FB]">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ 
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.8,
              ease: [0.23, 1, 0.32, 1]
            }
          }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{ fontFamily: 'Inter', fontStyle: 'italic' }}
            className="text-lg sm:text-xl text-[#2C65C8] mb-4"
          >
            Historie, które zmieniają perspektywę
          </motion.p>

          <h2 
            style={{ fontFamily: 'DM Serif Display', letterSpacing: '0.02em' }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-8 text-black"
          >
            Co mówią klienci o współpracy?
          </h2>

          <p 
            style={{ fontFamily: 'Inter' }}
            className="text-lg sm:text-xl text-foreground/70 max-w-2xl mx-auto"
          >
            Poznaj historie osób, które już przeszły tę drogę i osiągnęły swój cel
          </p>
        </motion.div>

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="flex-[0_0_100%] min-w-0 pl-4 relative"
                >
                  <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-[#2C65C8]/20">
                    <div className="flex items-center gap-4 mb-6">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div>
                        <h3 style={{ fontFamily: 'DM Serif Display' }} className="font-semibold text-xl">{testimonial.name}</h3>
                        <p style={{ fontFamily: 'Inter' }} className="text-[#2C65C8]">{testimonial.role}</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-[#2C65C8]" />
                      ))}
                    </div>

                    <p style={{ fontFamily: 'Inter' }} className="text-foreground/70 mb-6 text-lg leading-relaxed">
                      {testimonial.content}
                    </p>

                    <div className="space-y-2">
                      {testimonial.summary.map((item, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm">
                          <CalendarCheck className="w-4 h-4 text-[#2C65C8]" />
                          <span style={{ fontFamily: 'Inter' }} className="text-foreground/70">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-3 shadow-lg border-2 border-[#2C65C8]/20 hover:bg-[#2C65C8]/5 transition-colors"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>

          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-3 shadow-lg border-2 border-[#2C65C8]/20 hover:bg-[#2C65C8]/5 transition-colors"
          >
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === selectedIndex ? 'bg-[#2C65C8]' : 'bg-[#2C65C8]/20'
              }`}
              onClick={() => emblaApi?.scrollTo(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}