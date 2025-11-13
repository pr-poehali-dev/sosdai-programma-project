import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

interface Article {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  tags: string[];
  author: string;
  date: string;
  readTime: string;
  image: string;
}

const mockArticles: Article[] = [
  {
    id: 1,
    title: 'Современные тренды веб-дизайна в 2025',
    excerpt: 'Погружаемся в мир актуальных трендов: от минимализма до смелых цветовых решений...',
    category: 'Дизайн',
    tags: ['UI/UX', 'Тренды', 'Веб-дизайн'],
    author: 'Анна Смирнова',
    date: '10 ноября 2025',
    readTime: '5 мин',
    image: '/placeholder.svg'
  },
  {
    id: 2,
    title: 'React 19: Что нового для разработчиков',
    excerpt: 'Обзор ключевых нововведений и улучшений производительности в новой версии React...',
    category: 'Разработка',
    tags: ['React', 'JavaScript', 'Frontend'],
    author: 'Дмитрий Иванов',
    date: '8 ноября 2025',
    readTime: '8 мин',
    image: '/placeholder.svg'
  },
  {
    id: 3,
    title: 'Искусственный интеллект в творчестве',
    excerpt: 'Как AI меняет креативные индустрии и открывает новые возможности для художников...',
    category: 'Технологии',
    tags: ['AI', 'Креатив', 'Будущее'],
    author: 'Мария Петрова',
    date: '5 ноября 2025',
    readTime: '6 мин',
    image: '/placeholder.svg'
  },
  {
    id: 4,
    title: 'Психология цвета в брендинге',
    excerpt: 'Изучаем влияние цветовых решений на восприятие бренда и поведение потребителей...',
    category: 'Маркетинг',
    tags: ['Брендинг', 'Психология', 'Цвет'],
    author: 'Алексей Козлов',
    date: '3 ноября 2025',
    readTime: '7 мин',
    image: '/placeholder.svg'
  },
  {
    id: 5,
    title: 'TypeScript: От новичка до профи',
    excerpt: 'Практическое руководство по освоению TypeScript для современной веб-разработки...',
    category: 'Разработка',
    tags: ['TypeScript', 'Обучение', 'Программирование'],
    author: 'Сергей Волков',
    date: '1 ноября 2025',
    readTime: '10 мин',
    image: '/placeholder.svg'
  },
  {
    id: 6,
    title: 'Минимализм в интерьере 2025',
    excerpt: 'Простота, функциональность и гармония: создаём современное пространство для жизни...',
    category: 'Дизайн',
    tags: ['Интерьер', 'Минимализм', 'Стиль'],
    author: 'Елена Соколова',
    date: '28 октября 2025',
    readTime: '5 мин',
    image: '/placeholder.svg'
  }
];

const categories = ['Все', 'Дизайн', 'Разработка', 'Технологии', 'Маркетинг'];

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Все');

  const filteredArticles = mockArticles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === 'Все' || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <Icon name="BookOpen" size={24} className="text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              TechBlog
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-foreground hover:text-primary transition-colors">
              Главная
            </Link>
            <Link to="/about" className="text-foreground hover:text-primary transition-colors">
              О блоге
            </Link>
            <Button variant="default" className="bg-gradient-to-r from-primary to-secondary">
              <Icon name="PenSquare" size={18} className="mr-2" />
              Написать
            </Button>
          </nav>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Icon name="Menu" size={24} />
          </Button>
        </div>
      </header>

      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-transparent" />
        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              Идеи, которые вдохновляют
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-light">
              Статьи о дизайне, технологиях и творчестве от ведущих экспертов индустрии
            </p>
            <div className="relative max-w-xl mx-auto">
              <Icon name="Search" size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Поиск статей по названию или тегу..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-14 text-lg border-2 focus:border-primary shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12">
        <div className="flex gap-3 mb-8 overflow-x-auto pb-2">
          {categories.map(category => (
            <Button
              key={category}
              variant={selectedCategory === category ? 'default' : 'outline'}
              onClick={() => setSelectedCategory(category)}
              className={`whitespace-nowrap ${
                selectedCategory === category 
                  ? 'bg-gradient-to-r from-primary to-secondary' 
                  : ''
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((article, index) => (
            <Link key={article.id} to={`/article/${article.id}`}>
              <Card 
                className="group hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden border-2 hover:border-primary/50 animate-fade-in cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-white/90 text-foreground hover:bg-white">
                    {article.category}
                  </Badge>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl group-hover:text-primary transition-colors line-clamp-2">
                  {article.title}
                </CardTitle>
                <CardDescription className="line-clamp-2">
                  {article.excerpt}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {article.tags.map(tag => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      #{tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                      <span className="text-white text-xs font-semibold">
                        {article.author.charAt(0)}
                      </span>
                    </div>
                    <span className="font-medium">{article.author}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1">
                      <Icon name="Clock" size={14} />
                      {article.readTime}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
            </Link>
          ))}
        </div>

        {filteredArticles.length === 0 && (
          <div className="text-center py-20 animate-fade-in">
            <Icon name="SearchX" size={64} className="mx-auto text-muted-foreground mb-4" />
            <h3 className="text-2xl font-bold mb-2">Статьи не найдены</h3>
            <p className="text-muted-foreground">
              Попробуйте изменить поисковый запрос или выбрать другую категорию
            </p>
          </div>
        )}
      </section>

      <footer className="border-t mt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <Icon name="BookOpen" size={24} className="text-white" />
                </div>
                <span className="text-xl font-bold">TechBlog</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Платформа для обмена идеями и знаниями
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Разделы</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Дизайн</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Разработка</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Технологии</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Маркетинг</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">О проекте</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Авторы</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Социальные сети</h4>
              <div className="flex gap-3">
                <Button variant="outline" size="icon" className="hover:bg-primary hover:text-white hover:border-primary transition-all">
                  <Icon name="Twitter" size={18} />
                </Button>
                <Button variant="outline" size="icon" className="hover:bg-primary hover:text-white hover:border-primary transition-all">
                  <Icon name="Facebook" size={18} />
                </Button>
                <Button variant="outline" size="icon" className="hover:bg-primary hover:text-white hover:border-primary transition-all">
                  <Icon name="Instagram" size={18} />
                </Button>
                <Button variant="outline" size="icon" className="hover:bg-primary hover:text-white hover:border-primary transition-all">
                  <Icon name="Linkedin" size={18} />
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>© 2025 TechBlog. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;