import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-wild-green-50 to-earth-beige">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm shadow-sm border-b border-wild-green-200">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="TreePine" className="text-wild-green-600" size={32} />
              <h1 className="text-2xl font-bold text-wild-green-800">
                Тигр. Дикая природа
              </h1>
            </div>
            <div className="hidden md:flex space-x-8">
              <a
                href="#about"
                className="text-wild-green-700 hover:text-tiger-orange transition-colors"
              >
                О тиграх
              </a>
              <a
                href="#behavior"
                className="text-wild-green-700 hover:text-tiger-orange transition-colors"
              >
                Повадки
              </a>
              <a
                href="#habitat"
                className="text-wild-green-700 hover:text-tiger-orange transition-colors"
              >
                Места обитания
              </a>
              <a
                href="#gallery"
                className="text-wild-green-700 hover:text-tiger-orange transition-colors"
              >
                Галерея
              </a>
            </div>
            <Icon
              name="Menu"
              className="md:hidden text-wild-green-700"
              size={24}
            />
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="container mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <Badge className="bg-tiger-orange text-white">
                🐅 Дикая природа
              </Badge>
              <h2 className="text-5xl font-bold text-wild-green-800 leading-tight">
                Величественный
                <span className="text-tiger-orange"> тигр</span>
              </h2>
              <p className="text-xl text-wild-green-700 leading-relaxed">
                Погрузитесь в удивительный мир самого крупного хищника планеты.
                Узнайте о жизни, повадках и местах обитания этого великолепного
                зверя.
              </p>
              <div className="flex space-x-4">
                <Button className="bg-tiger-orange hover:bg-tiger-orange/90 text-white px-8 py-3">
                  Узнать больше
                </Button>
                <Button
                  variant="outline"
                  className="border-wild-green-600 text-wild-green-600 hover:bg-wild-green-50"
                >
                  Смотреть галерею
                </Button>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <img
                src="/img/2ee8e54d-ecf2-406c-b2e2-ed6d006cad1c.jpg"
                alt="Тигр в джунглях"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-wild-green-800 mb-4">
              О тиграх
            </h3>
            <p className="text-xl text-wild-green-600 max-w-2xl mx-auto">
              Тигры — самые крупные дикие кошки в мире, символ силы и грации
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow animate-slide-up">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Icon name="Zap" className="text-tiger-orange" size={24} />
                  <CardTitle className="text-wild-green-800">
                    Сила и скорость
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-wild-green-700">
                  Тигры могут развивать скорость до 60 км/ч и прыгать на
                  расстояние до 10 метров. Их сила позволяет переносить добычу
                  весом до 200 кг.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow animate-slide-up">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Icon name="Eye" className="text-tiger-orange" size={24} />
                  <CardTitle className="text-wild-green-800">
                    Ночное зрение
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-wild-green-700">
                  Зрение тигра в 6 раз лучше человеческого в темноте. Они могут
                  охотиться в полной темноте, используя свои острые чувства.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow animate-slide-up">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Icon name="Heart" className="text-tiger-orange" size={24} />
                  <CardTitle className="text-wild-green-800">
                    Семейные узы
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-wild-green-700">
                  Тигрицы заботятся о своих детёнышах до 2 лет, обучая их охоте
                  и выживанию в дикой природе.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Behavior Section */}
      <section id="behavior" className="py-20 bg-wild-green-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-4xl font-bold text-wild-green-800">
                Повадки тигра
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Icon
                    name="Moon"
                    className="text-tiger-orange mt-1"
                    size={20}
                  />
                  <div>
                    <h4 className="font-semibold text-wild-green-800">
                      Ночные охотники
                    </h4>
                    <p className="text-wild-green-700">
                      Тигры предпочитают охотиться в сумерках и ночью
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon
                    name="Droplets"
                    className="text-tiger-orange mt-1"
                    size={20}
                  />
                  <div>
                    <h4 className="font-semibold text-wild-green-800">
                      Любят воду
                    </h4>
                    <p className="text-wild-green-700">
                      В отличие от других кошек, тигры отличные пловцы
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon
                    name="MapPin"
                    className="text-tiger-orange mt-1"
                    size={20}
                  />
                  <div>
                    <h4 className="font-semibold text-wild-green-800">
                      Территориальные
                    </h4>
                    <p className="text-wild-green-700">
                      Каждый тигр имеет свою территорию площадью до 400 км²
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/img/57057da4-ccc5-4450-969a-ea51ad1278a2.jpg"
                alt="Портрет тигра"
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Habitat Section */}
      <section id="habitat" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-wild-green-800 mb-4">
              Места обитания
            </h3>
            <p className="text-xl text-wild-green-600 max-w-2xl mx-auto">
              Тигры населяют разнообразные экосистемы от тропических лесов до
              снежных равнин
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-br from-wild-green-100 to-wild-green-200 border-wild-green-300">
              <CardHeader>
                <CardTitle className="text-wild-green-800 flex items-center space-x-2">
                  <Icon name="TreePine" size={24} />
                  <span>Тропические леса</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-wild-green-700">
                  Индийские тигры населяют густые джунгли с высокой влажностью.
                  Здесь они находят укрытие и изобилие добычи.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-wild-green-100 to-wild-green-200 border-wild-green-300">
              <CardHeader>
                <CardTitle className="text-wild-green-800 flex items-center space-x-2">
                  <Icon name="Snowflake" size={24} />
                  <span>Таёжные леса</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-wild-green-700">
                  Сибирские тигры адаптировались к суровому климату тайги, где
                  температура может опускаться до -40°C.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-wild-green-100 to-wild-green-200 border-wild-green-300">
              <CardHeader>
                <CardTitle className="text-wild-green-800 flex items-center space-x-2">
                  <Icon name="Waves" size={24} />
                  <span>Мангровые заросли</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-wild-green-700">
                  В дельтах рек тигры научились охотиться в воде и
                  приспособились к приливам и отливам.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-wild-green-100 to-wild-green-200 border-wild-green-300">
              <CardHeader>
                <CardTitle className="text-wild-green-800 flex items-center space-x-2">
                  <Icon name="Mountain" size={24} />
                  <span>Горные склоны</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-wild-green-700">
                  Некоторые популяции тигров живут в горных районах на высоте до
                  3000 метров над уровнем моря.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-wild-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-wild-green-800 mb-4">
              Галерея
            </h3>
            <p className="text-xl text-wild-green-600">
              Уникальные кадры тигров в их естественной среде
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="relative group overflow-hidden rounded-xl">
              <img
                src="/img/2ee8e54d-ecf2-406c-b2e2-ed6d006cad1c.jpg"
                alt="Тигр в джунглях"
                className="w-full h-64 object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <p className="font-semibold">Тигр в джунглях</p>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-xl">
              <img
                src="/img/57057da4-ccc5-4450-969a-ea51ad1278a2.jpg"
                alt="Портрет тигра"
                className="w-full h-64 object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <p className="font-semibold">Портрет сибирского тигра</p>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-xl">
              <img
                src="/img/b986006c-0f12-4b16-8c0b-147b1e48e6b6.jpg"
                alt="Тигрята играют"
                className="w-full h-64 object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <p className="font-semibold">Тигрята с матерью</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-wild-green-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="TreePine" size={24} />
                <h4 className="text-xl font-bold">Тигр. Дикая природа</h4>
              </div>
              <p className="text-wild-green-200">
                Изучайте и защищайте удивительный мир тигров
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Разделы</h5>
              <ul className="space-y-2 text-wild-green-200">
                <li>
                  <a
                    href="#about"
                    className="hover:text-white transition-colors"
                  >
                    О тиграх
                  </a>
                </li>
                <li>
                  <a
                    href="#behavior"
                    className="hover:text-white transition-colors"
                  >
                    Повадки
                  </a>
                </li>
                <li>
                  <a
                    href="#habitat"
                    className="hover:text-white transition-colors"
                  >
                    Места обитания
                  </a>
                </li>
                <li>
                  <a
                    href="#gallery"
                    className="hover:text-white transition-colors"
                  >
                    Галерея
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Защита тигров</h5>
              <p className="text-wild-green-200 mb-4">
                Помогите сохранить этих великолепных хищников для будущих
                поколений
              </p>
              <Button className="bg-tiger-orange hover:bg-tiger-orange/90">
                Поддержать
              </Button>
            </div>
          </div>
          <div className="border-t border-wild-green-700 mt-8 pt-8 text-center text-wild-green-200">
            <p>© 2024 Тигр. Дикая природа. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
