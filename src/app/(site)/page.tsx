import Link from "next/link";
import { ChevronRightIcon } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselItem,
  CarouselContent,
} from "@/components/ui/carousel";

export default function HomePage() {
  return (
    <>
      <div className="h-[calc(100vh-4rem)] container mx-auto flex justify-center items-center py-16">
        <div className="w-full flex gap-10">
          <div className="w-1/2">
            <Carousel className="w-full">
              <CarouselContent>
                {Array.from({ length: 5 }).map((_, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1">
                      <Card className="rounded-2xl border-transparent">
                        <CardContent className="flex aspect-square items-center justify-center p-6">
                          <span className="text-4xl font-semibold">
                            {index + 1}
                          </span>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
          <div className="w-1/2 flex flex-col justify-between">
            <div className="flex-grow xl:text-2xl 2xl:text-3xl font-extralight text-justify">
              <p>
                👋¡Hola! Somos una <strong>comunidad</strong> de estudiantes,
                profesionales, y entusiastas del mundo tech en{" "}
                <span className="border-b-4 border-rose-600">
                  Santiago del Estero
                </span>
                .
              </p>

              <br />
              <p>
                Aquí no nos complicamos, nos apoyamos entre todos y le metemos
                ganas para crecer juntos en el sector IT.
              </p>

              <br />
              <p>
                Desde <strong>programación</strong> hasta{" "}
                <strong>marketing</strong> y <strong>diseño</strong>, nuestro
                objetivo es impulsar la economía del conocimiento en la
                provincia. Charlas, mentorías, y buenos mates: ¡nos encontramos
                para aprender y disfrutar el progreso!
              </p>
            </div>

            <div className="flex items-center gap-10">
              <div className="space-y-8">
                <div className="scroll-m-20 text-xl tracking-tight lg:text-6xl">
                  <p className="font-extrabold">Ofertas IT</p>
                  <p className="font-light">Santiago del Estero</p>
                </div>
              </div>

              <Button
                size="icon"
                variant="ghost"
                className="rounded-full"
                asChild
              >
                <Link href="/jobs">
                  <ChevronRightIcon className="size-52" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
