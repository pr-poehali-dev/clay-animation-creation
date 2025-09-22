import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import Icon from '@/components/ui/icon'

interface BlogPost {
  id: number
  title: string
  content: string
  author: string
  date: string
  image: string
  category: string
  likes: number
}

const initialPosts: BlogPost[] = [
  {
    id: 1,
    title: "Супер Оранжик: Защитник города",
    content: "Познакомьтесь с нашим главным героем - Супер Оранжиком! Этот невероятный пластилиновый супергерой обладает силой солнца и всегда готов защитить город от злодеев. Его оранжевый костюм символизирует энергию и оптимизм.",
    author: "Студия Clay Heroes",
    date: "22 сентября 2025",
    image: "/img/72a08356-16ab-4df0-bed9-6fdc78208fe9.jpg",
    category: "Персонажи",
    likes: 42
  },
  {
    id: 2,
    title: "Фиолетовая Молния: Новая героиня",
    content: "Встречайте Фиолетовую Молнию - могущественную супергероиню с способностями управления энергией! Её фиолетово-золотой костюм переливается в лучах света, а развевающийся плащ добавляет величия её образу.",
    author: "Студия Clay Heroes", 
    date: "21 сентября 2025",
    image: "/img/16976a29-8aa9-4e5e-b17f-54248e87c277.jpg",
    category: "Персонажи",
    likes: 38
  },
  {
    id: 3,
    title: "Киберо-3000: Технологический страж",
    content: "Киберо-3000 - это уникальный робот-супергерой из пластилина! Его металлический синий корпус скрывает передовые технологии для защиты мира. Геометрические формы подчеркивают его техническую природу.",
    author: "Студия Clay Heroes",
    date: "20 сентября 2025", 
    image: "/img/37ad735b-075c-4256-9d45-21471311fda0.jpg",
    category: "Технологии",
    likes: 29
  }
]

function Index() {
  const [posts, setPosts] = useState<BlogPost[]>(initialPosts)
  const [showAddForm, setShowAddForm] = useState(false)
  const [newPost, setNewPost] = useState({
    title: '',
    content: '',
    author: '',
    category: ''
  })

  const handleAddPost = () => {
    if (newPost.title && newPost.content && newPost.author) {
      const post: BlogPost = {
        id: posts.length + 1,
        title: newPost.title,
        content: newPost.content,
        author: newPost.author,
        date: new Date().toLocaleDateString('ru-RU', { 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric' 
        }),
        image: "/img/72a08356-16ab-4df0-bed9-6fdc78208fe9.jpg",
        category: newPost.category || "Общее",
        likes: 0
      }
      setPosts([post, ...posts])
      setNewPost({ title: '', content: '', author: '', category: '' })
      setShowAddForm(false)
    }
  }

  const handleLike = (id: number) => {
    setPosts(posts.map(post => 
      post.id === id ? { ...post, likes: post.likes + 1 } : post
    ))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-hero-lightGray via-white to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-lg border-b-4 border-hero-orange">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-hero-orange to-hero-blue rounded-full flex items-center justify-center">
                <Icon name="Zap" size={24} className="text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-hero-navy">Clay Heroes</h1>
                <p className="text-hero-blue font-medium">Блог о пластилиновых супергероях</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <a href="#" className="text-hero-navy hover:text-hero-orange transition-colors font-medium">Герои</a>
              <a href="#" className="text-hero-navy hover:text-hero-orange transition-colors font-medium">Эпизоды</a>
              <a href="#" className="text-hero-navy hover:text-hero-orange transition-colors font-medium">О нас</a>
              <a href="#" className="text-hero-navy hover:text-hero-orange transition-colors font-medium">Контакты</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center mb-12">
          <div className="bg-gradient-to-r from-hero-orange to-hero-blue text-white rounded-3xl p-12 mb-8">
            <h2 className="text-5xl font-bold mb-4">Добро пожаловать в мир Clay Heroes!</h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Откройте для себя удивительные истории о пластилиновых супергероях, 
              их приключениях и невероятных способностях
            </p>
          </div>
        </section>

        {/* Add Post Button */}
        <div className="flex justify-between items-center mb-8">
          <h3 className="text-2xl font-bold text-hero-navy">Последние статьи</h3>
          <Button 
            onClick={() => setShowAddForm(!showAddForm)}
            className="bg-hero-orange hover:bg-hero-orange/90 text-white font-semibold px-6 py-3 rounded-xl shadow-lg transform hover:scale-105 transition-all"
          >
            <Icon name="Plus" size={20} className="mr-2" />
            Добавить статью
          </Button>
        </div>

        {/* Add Post Form */}
        {showAddForm && (
          <Card className="mb-8 border-2 border-hero-orange/20 shadow-xl rounded-2xl animate-fade-in">
            <CardHeader className="bg-gradient-to-r from-hero-orange/10 to-hero-blue/10 rounded-t-2xl">
              <CardTitle className="text-hero-navy flex items-center">
                <Icon name="PenTool" size={24} className="mr-2 text-hero-orange" />
                Создать новую статью
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-4">
              <Input
                placeholder="Заголовок статьи"
                value={newPost.title}
                onChange={(e) => setNewPost({...newPost, title: e.target.value})}
                className="border-2 border-hero-blue/20 focus:border-hero-orange rounded-xl"
              />
              <Input
                placeholder="Автор"
                value={newPost.author}
                onChange={(e) => setNewPost({...newPost, author: e.target.value})}
                className="border-2 border-hero-blue/20 focus:border-hero-orange rounded-xl"
              />
              <Input
                placeholder="Категория"
                value={newPost.category}
                onChange={(e) => setNewPost({...newPost, category: e.target.value})}
                className="border-2 border-hero-blue/20 focus:border-hero-orange rounded-xl"
              />
              <Textarea
                placeholder="Содержание статьи"
                value={newPost.content}
                onChange={(e) => setNewPost({...newPost, content: e.target.value})}
                className="border-2 border-hero-blue/20 focus:border-hero-orange rounded-xl min-h-32"
              />
              <div className="flex space-x-4">
                <Button 
                  onClick={handleAddPost}
                  className="bg-hero-blue hover:bg-hero-blue/90 text-white rounded-xl"
                >
                  <Icon name="Save" size={16} className="mr-2" />
                  Опубликовать
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => setShowAddForm(false)}
                  className="border-2 border-hero-orange text-hero-orange hover:bg-hero-orange hover:text-white rounded-xl"
                >
                  Отмена
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Card key={post.id} className="overflow-hidden border-2 border-gray-100 hover:border-hero-orange/30 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 rounded-2xl">
              <div className="relative">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <Badge className="absolute top-4 left-4 bg-hero-blue text-white font-semibold">
                  {post.category}
                </Badge>
              </div>
              
              <CardHeader className="pb-3">
                <CardTitle className="text-hero-navy text-xl leading-tight hover:text-hero-orange transition-colors cursor-pointer">
                  {post.title}
                </CardTitle>
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <span className="flex items-center">
                    <Icon name="User" size={14} className="mr-1" />
                    {post.author}
                  </span>
                  <span className="flex items-center">
                    <Icon name="Calendar" size={14} className="mr-1" />
                    {post.date}
                  </span>
                </div>
              </CardHeader>
              
              <CardContent className="pt-0">
                <p className="text-gray-700 leading-relaxed mb-4 line-clamp-3">
                  {post.content}
                </p>
                
                <div className="flex items-center justify-between">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-2 border-hero-blue text-hero-blue hover:bg-hero-blue hover:text-white rounded-xl font-medium"
                  >
                    Читать далее
                  </Button>
                  
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleLike(post.id)}
                    className="text-hero-orange hover:bg-hero-orange/10 rounded-xl"
                  >
                    <Icon name="Heart" size={16} className="mr-1" />
                    {post.likes}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-hero-navy text-white mt-16">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-xl font-bold mb-4 text-hero-orange">Clay Heroes</h4>
              <p className="text-gray-300 leading-relaxed">
                Создаем удивительные истории о пластилиновых супергероях для детей и взрослых.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Разделы</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-hero-orange transition-colors">Герои</a></li>
                <li><a href="#" className="hover:text-hero-orange transition-colors">Эпизоды</a></li>
                <li><a href="#" className="hover:text-hero-orange transition-colors">Блог</a></li>
                <li><a href="#" className="hover:text-hero-orange transition-colors">О нас</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-gray-300">
                <p className="flex items-center">
                  <Icon name="Mail" size={16} className="mr-2" />
                  info@clayheroes.ru
                </p>
                <p className="flex items-center">
                  <Icon name="Phone" size={16} className="mr-2" />
                  +7 (999) 123-45-67
                </p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
            <p>&copy; 2025 Clay Heroes. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Index