import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

interface Comment {
  id: number;
  author: string;
  content: string;
  date: string;
  likes: number;
}

const mockComments: Comment[] = [
  {
    id: 1,
    author: 'Александр Петров',
    content: 'Отличная статья! Очень полезная информация, спасибо за детальный разбор.',
    date: '2 часа назад',
    likes: 12
  },
  {
    id: 2,
    author: 'Ольга Иванова',
    content: 'Согласна с автором. Эти тренды действительно актуальны в этом году.',
    date: '5 часов назад',
    likes: 8
  }
];

const Article = () => {
  const [comments, setComments] = useState<Comment[]>(mockComments);
  const [newComment, setNewComment] = useState('');
  const [newName, setNewName] = useState('');

  const handleAddComment = () => {
    if (newComment.trim() && newName.trim()) {
      const comment: Comment = {
        id: comments.length + 1,
        author: newName,
        content: newComment,
        date: 'Только что',
        likes: 0
      };
      setComments([...comments, comment]);
      setNewComment('');
      setNewName('');
    }
  };

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
        </div>
      </header>

      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="mb-8 animate-fade-in">
          <div className="flex gap-2 mb-4">
            <Badge className="bg-primary text-white">Дизайн</Badge>
            <Badge variant="secondary">#UI/UX</Badge>
            <Badge variant="secondary">#Тренды</Badge>
            <Badge variant="secondary">#Веб-дизайн</Badge>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
            Современные тренды веб-дизайна в 2025
          </h1>

          <div className="flex items-center justify-between flex-wrap gap-4 mb-8 text-muted-foreground">
            <div className="flex items-center gap-3">
              <Avatar className="w-12 h-12 bg-gradient-to-br from-primary to-secondary">
                <AvatarFallback className="text-white font-semibold">АС</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-semibold text-foreground">Анна Смирнова</p>
                <p className="text-sm">10 ноября 2025 • 5 мин чтения</p>
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Icon name="Twitter" size={16} className="mr-2" />
                Twitter
              </Button>
              <Button variant="outline" size="sm">
                <Icon name="Facebook" size={16} className="mr-2" />
                Facebook
              </Button>
              <Button variant="outline" size="sm">
                <Icon name="Linkedin" size={16} className="mr-2" />
                LinkedIn
              </Button>
              <Button variant="outline" size="sm">
                <Icon name="Share2" size={16} className="mr-2" />
                Поделиться
              </Button>
            </div>
          </div>

          <div className="relative h-96 rounded-2xl overflow-hidden mb-12 bg-gradient-to-br from-primary/20 to-secondary/20">
            <img 
              src="/placeholder.svg" 
              alt="Современные тренды веб-дизайна"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="prose prose-lg max-w-none mb-12 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <p className="text-xl text-muted-foreground leading-relaxed mb-6">
            Веб-дизайн постоянно эволюционирует, отражая изменения в технологиях, культуре и пользовательских ожиданиях. 
            В 2025 году мы наблюдаем удивительное сочетание минимализма и ярких, смелых решений.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">Градиенты и яркие цвета</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Одним из главных трендов остаётся использование ярких градиентов. Современные дизайнеры смело сочетают 
            контрастные цвета, создавая визуально привлекательные и запоминающиеся интерфейсы. Фиолетовые, розовые 
            и оранжевые оттенки доминируют в палитре 2025 года.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">Типографика как искусство</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Крупные, выразительные шрифты становятся центральным элементом дизайна. Дизайнеры используют типографику 
            не просто для передачи информации, а как мощный визуальный инструмент, способный передать характер и 
            настроение бренда.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">Анимации и микровзаимодействия</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Плавные анимации и продуманные микровзаимодействия делают пользовательский опыт более живым и интересным. 
            Hover-эффекты, transitions и subtle animations помогают направить внимание пользователя и сделать 
            навигацию интуитивной.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">Заключение</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Современный веб-дизайн — это баланс между эстетикой и функциональностью. Следуя этим трендам, важно 
            помнить о пользовательском опыте и доступности. Лучшие дизайны — те, что не только красивы, но и 
            решают реальные задачи пользователей.
          </p>
        </div>

        <div className="border-t pt-12 mt-12">
          <h3 className="text-3xl font-bold mb-8">Комментарии ({comments.length})</h3>

          <Card className="mb-8 p-6 border-2">
            <CardContent className="p-0">
              <Input
                type="text"
                placeholder="Ваше имя"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                className="mb-4"
              />
              <Textarea
                placeholder="Поделитесь своим мнением..."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                className="min-h-32 mb-4 resize-none"
              />
              <Button 
                onClick={handleAddComment}
                className="bg-gradient-to-r from-primary to-secondary"
                disabled={!newComment.trim() || !newName.trim()}
              >
                <Icon name="Send" size={18} className="mr-2" />
                Отправить комментарий
              </Button>
            </CardContent>
          </Card>

          <div className="space-y-6">
            {comments.map((comment, index) => (
              <Card 
                key={comment.id} 
                className="p-6 hover:shadow-lg transition-shadow animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-0">
                  <div className="flex gap-4">
                    <Avatar className="w-10 h-10 bg-gradient-to-br from-primary to-secondary shrink-0">
                      <AvatarFallback className="text-white font-semibold">
                        {comment.author.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <p className="font-semibold">{comment.author}</p>
                          <p className="text-sm text-muted-foreground">{comment.date}</p>
                        </div>
                        <Button variant="ghost" size="sm" className="gap-1">
                          <Icon name="ThumbsUp" size={16} />
                          {comment.likes}
                        </Button>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{comment.content}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </article>

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

export default Article;
