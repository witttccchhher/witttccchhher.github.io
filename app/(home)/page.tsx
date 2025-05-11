import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Marquee } from "@/components/magicui/marquee";
import { GooeyText } from "@/components/ui/gooey-text-morphing";
import { GithubInfo } from "fumadocs-ui/components/github-info";
import { MoveRight } from "lucide-react";

import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function HomePage() {
  return (
    <main className="flex flex-col justify-center items-center mt-10 min-h-[88vh]">
      <Analytics />
      <SpeedInsights />
      <div className="flex items-center">
        <Image src="/logo.png" alt="Logo" width={400} height={0} />
        <h1 className="text-8xl font-bold">
          <GooeyText
            texts={["Nix", "NixOS", "Home Manager"]}
            morphTime={1}
            cooldownTime={0.25}
            className="font-bold mb-10 pt-15"
          />
          tips and tricks
        </h1>
      </div>
      <p className="text-xl text-neutral-400">
        Здесь вы найдете статьи по Nix, NixOS и Home Manager. Приятного чтения!
      </p>
      <div className="inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/2 blur-sm" />
      <div className="inset-x-60 top-0 bg-gradient-to-r from-transparent via-blue-700 to-transparent h-px w-1/2" />
      <GithubInfo owner="witttccchhher" repo="witttccchhher.github.io" />
      <Link href="/tips">
        <Button className="mt-6">
          <MoveRight />
          Введение и краткий обзор
        </Button>
      </Link>
      <Marquee pauseOnHover className="mt-auto">
        <span>
          <Card>
            <CardHeader>
              <CardTitle>Nix</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Функциональный менеджер пакетов, предлагающий
                <br />
                принципиально новый подход к управлению зависимостями
              </p>
            </CardContent>
          </Card>
        </span>
        <span>
          <Card>
            <CardHeader>
              <CardTitle>NixOS</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Дистрибутив Linux с открытым исходным кодом,
                <br />
                построенный на базе менеджера пакетов Nix
              </p>
            </CardContent>
          </Card>
        </span>
        <span>
          <Card>
            <CardHeader>
              <CardTitle>Home Manager</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Инструмент для настройки пользовательской
                <br />
                среды с использованием возможностей Nix
              </p>
            </CardContent>
          </Card>
        </span>
      </Marquee>
    </main>
  );
}
