
import React, { useState } from 'react';
import { Menu, X, ExternalLink, Mail, Users, Code, Palette, BookOpen, Coins, Smartphone, Facebook, Instagram, Youtube, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import ContactForm from '@/components/ContactForm';

const Index = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const [selectedCategory, setSelectedCategory] = useState('church-flyers');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    setSidebarOpen(false);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const menuItems = [
    { id: 'about', label: 'About Me', icon: Users },
    { id: 'services', label: 'Services', icon: Code },
    { id: 'portfolio', label: 'Portfolio', icon: Palette },
    { id: 'softchat', label: 'Softchat', icon: Smartphone },
    { id: 'social', label: 'Social Links', icon: ExternalLink },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  const services = [
    {
      title: "Web & App Development",
      icon: Code,
      description: "Responsive websites and apps using WordPress, Blogger, Builder.ai, and more",
      skills: ["WordPress", "Blogger", "Builder.ai", "Lovable.dev", "Webflow"]
    },
    {
      title: "Graphics & Digital Design",
      icon: Palette,
      description: "Creative designs for logos, flyers, business cards, banners, and product labels",
      skills: ["Logo Design", "Flyers", "Business Cards", "Banners"]
    },
    {
      title: "Social Media & Marketing",
      icon: Users,
      description: "Growth strategies, automation, and ad campaigns for maximum engagement",
      skills: ["Facebook/Instagram Ads", "Growth Strategy", "Campaign Management"]
    },
    {
      title: "Book Publishing",
      icon: BookOpen,
      description: "Christian, inspirational, low-content, and evergreen books with KDP optimization",
      skills: ["Christian Content", "KDP Optimization", "Content Strategy"]
    },
    {
      title: "Crypto Exchange & Digital Finance",
      icon: Coins,
      description: "BTC, ETH, USDT trading, gift card exchange, and P2P systems",
      skills: ["Crypto Trading", "P2P Systems", "Digital Wallets"]
    }
  ];

  const portfolioItems = [
    {
      title: "Elcon Academy",
      description: "School Website (WordPress)",
      url: "https://elcon-academy.vercel.app/",
      type: "Website"
    },
    {
      title: "Gift Reveala",
      description: "Direct Monetization Page (Lovable.dev)",
      url: "https://gift-reveala.lovable.app/",
      type: "Web App"
    },
    {
      title: "Watch2Earn Platform",
      description: "Interactive Platform (Jdoodle.ai)",
      url: "https://c41erh.jdoodle.io/",
      type: "Platform"
    },
    {
      title: "FameTec Blog",
      description: "Tech & Digital Updates (Blogger)",
      url: "https://fametec.blogspot.com/",
      type: "Blog"
    }
  ];

  const graphicDesignCategories = [
    { 
      id: 'church-flyers', 
      name: 'Church Flyers', 
      designs: [
        {
          id: 1,
          title: "Baptist Student Fellowship Leadership Training Conference",
          description: "LTC 2025 - Leadership Training Conference with theme 'The Discipled Leader'",
          image: "/lovable-uploads/80501272-6d2f-4078-ae8a-7c96650d3a4c.png"
        },
        {
          id: 2,
          title: "BSF ABSU Fellowship Welcome",
          description: "Welcome to Fellowship flyer with John 13:35 biblical verse",
          image: "/lovable-uploads/ae95dee1-5eac-49e9-9a79-fcd92d97f469.png"
        },
        {
          id: 3,
          title: "Valentine's Day Special - Relationship/Love",
          description: "EBC BSF Valentine's Day special event on relationship and love",
          image: "/lovable-uploads/3f822ab1-c79f-4a9a-847e-7ce71df7090a.png"
        },
        {
          id: 4,
          title: "7 Days Spiritual Renewal",
          description: "First Baptist Church spiritual renewal program with theme 'God of Awesome Wonders'",
          image: "/lovable-uploads/2d225dbd-30a0-4123-abeb-2b24fa21c44f.png"
        },
        {
          id: 5,
          title: "BSF EBC Student Outreach 2024",
          description: "Sunday Service outreach event with worship, praises, and preaching",
          image: "/lovable-uploads/f6122440-8300-4d01-8aee-6e18d849ed12.png"
        },
        {
          id: 6,
          title: "Village Outreach - Let There Be Light",
          description: "Baptist Student Fellowship village outreach with medical services and donations",
          image: "/lovable-uploads/a54ca528-3d81-4dfc-8405-95a9c15b1165.png"
        },
        {
          id: 7,
          title: "Transfiguration Retreat 2024 (With Speakers)",
          description: "Baptist Student Fellowship retreat with theme 'A Spirit Filled Life' featuring guest speakers",
          image: "/lovable-uploads/e7776126-9998-48e3-b6d9-b14ed08169d8.png"
        },
        {
          id: 8,
          title: "Transfiguration Retreat 2024 (Clean Version)",
          description: "Baptist Student Fellowship retreat with theme 'A Spirit Filled Life' - clean design version",
          image: "/lovable-uploads/a6ea7abf-c97b-4434-b176-bd71ad7d4f3b.png"
        }
      ]
    },
    { 
      id: 'child-dedication', 
      name: 'Child Dedication', 
      designs: [
        {
          id: 1,
          title: "Precious Goes to Church - Child Dedication",
          description: "Child dedication invitation for Precious Chimdalu Aziba-Aya Joel by Rev & Mrs Joel Titus",
          image: "/lovable-uploads/c0cfb49d-9a2d-4a68-a511-843c6bace98b.png"
        },
        {
          id: 2,
          title: "Baby Portrait - Child Dedication",
          description: "Beautiful child dedication flyer featuring adorable baby portrait with colorful bow",
          image: "/lovable-uploads/7d65d00e-524f-4bc0-b33a-44cba5d696fe.png"
        },
        {
          id: 3,
          title: "Elijah Igwo Elijah - Dedication Ceremony",
          description: "Baby boy dedication ceremony invitation for Elijah by Mr & Mrs Igwo Daniel Elijah",
          image: "/lovable-uploads/0bb78ea0-b299-4c03-ae24-562f1738cad3.png"
        },
        {
          id: 4,
          title: "Princess Victory Goes to Church",
          description: "Child dedication invitation for Princess Victory by Mr. Mrs. Wisdom Evanson Iboro",
          image: "/lovable-uploads/f8c62cd8-ee1d-4530-9d28-9664a561a316.png"
        }
      ]
    },
    { 
      id: 'business-flyer', 
      name: 'Business Flyer', 
      designs: [
        {
          id: 1,
          title: "Holy Music Entertainment Birthday Bash",
          description: "Event flyer for birthday celebration with music, dance, and comedy",
          image: "/lovable-uploads/36adb52c-24b8-4826-a8df-f8266964dfdd.png"
        },
        {
          id: 2,
          title: "Innovate 360 Summit",
          description: "Tech conference flyer featuring VR technology and networking",
          image: "/lovable-uploads/a905afce-7aad-49fd-8e00-3c35565ac6f6.png"
        },
        {
          id: 3,
          title: "W2E Watch to Earn Platform",
          description: "Modern app promotion flyer for video monetization platform",
          image: "/lovable-uploads/05a77e20-7479-4363-a445-b832bd0a7b30.png"
        },
        {
          id: 4,
          title: "Pineleaf Estate Services",
          description: "Real estate company flyer promoting land ownership opportunities",
          image: "/lovable-uploads/598c72ac-1e49-4001-b36b-507a76dfebc6.png"
        },
        {
          id: 5,
          title: "Pineleaf Estate Brochure",
          description: "Comprehensive real estate services brochure with property showcase",
          image: "/lovable-uploads/fddf7748-77be-407e-95ec-b3b2cfa3c8c9.png"
        },
        {
          id: 6,
          title: "Pineleaf Estate with Agent",
          description: "Personalized real estate flyer featuring realtor Ejikeme Christian",
          image: "/lovable-uploads/1677a78e-7574-4130-ab7f-5a0af8d20476.png"
        },
        {
          id: 7,
          title: "Softchat Social Platform",
          description: "Social media app promotion emphasizing reward-based activities",
          image: "/lovable-uploads/7525ba7a-1abc-4540-871c-e2dd87fe2be4.png"
        }
      ] 
    },
    { id: 'brochures', name: 'Brochures', designs: [] },
    { 
      id: 'logo-design', 
      name: 'Logo Design', 
      designs: [
        {
          id: 1,
          title: "Neocreb Logo",
          description: "Modern gradient logo design",
          image: "/lovable-uploads/8e208c84-d9c7-4806-af85-7bd74d52954c.png"
        },
        {
          id: 2,
          title: "Neocreb Hub",
          description: "Complete brand identity with tagline",
          image: "/lovable-uploads/0312fb49-683f-4f28-adf9-a931d73b822e.png"
        },
        {
          id: 3,
          title: "Graceland Baptist Church",
          description: "Religious organization logo with symbolic elements",
          image: "/lovable-uploads/5f6a9977-567a-4885-9b68-ef9152901cbc.png"
        },
        {
          id: 4,
          title: "Xally Exchange",
          description: "Crypto exchange platform logo",
          image: "/lovable-uploads/cbb6a55c-c0b0-4ff5-87e1-6fb877a0d961.png"
        },
        {
          id: 5,
          title: "Icepaker TV Production",
          description: "Entertainment production company logo",
          image: "/lovable-uploads/26c12268-fbed-4863-bdec-ae2ae29b1077.png"
        },
        {
          id: 6,
          title: "Fh Logo",
          description: "Stylized circular logo design",
          image: "/lovable-uploads/79639c80-5f9e-4d19-b31d-354bc15c0564.png"
        }
      ] 
    }
  ];

  const authorPages = [
    {
      title: "MiahzWorld Author Page",
      url: "https://www.amazon.com/author/miahzworld"
    },
    {
      title: "Jeremiah Chidiebube Chinedum Author Page",
      url: "https://www.amazon.com/author/jeremiah-chidiebube-chinedum"
    }
  ];

  const socialLinks = [
    { 
      name: "Facebook (Neocreb)", 
      url: "https://www.facebook.com/JeresoftBlog123?mibextid=AEUHqQ",
      icon: Facebook,
      color: "bg-blue-600/20 border-blue-500/20 text-blue-300 hover:bg-blue-600"
    },
    { 
      name: "Facebook (Softchat)", 
      url: "https://www.facebook.com/share/19ok7vSzKz/?mibextid=LQQJ4d",
      icon: Facebook,
      color: "bg-blue-600/20 border-blue-500/20 text-blue-300 hover:bg-blue-600"
    },
    { 
      name: "Facebook Group", 
      url: "https://www.facebook.com/share/maHJnMFUQPWvbt6c/?mibextid=WC7FNe",
      icon: Users,
      color: "bg-blue-600/20 border-blue-500/20 text-blue-300 hover:bg-blue-600"
    },
    { 
      name: "Instagram", 
      url: "https://www.instagram.com/miahzworld?igsh=bTYzemdxMmwxNHFz&utm_source=qr",
      icon: Instagram,
      color: "bg-pink-600/20 border-pink-500/20 text-pink-300 hover:bg-pink-600"
    },
    { 
      name: "WhatsApp Channel", 
      url: "https://whatsapp.com/channel/0029Va9JlpQGOj9hiHFqQK0C",
      icon: MessageCircle,
      color: "bg-green-600/20 border-green-500/20 text-green-300 hover:bg-green-600"
    },
    { 
      name: "YouTube Channel", 
      url: "https://www.youtube.com/@miahzTv",
      icon: Youtube,
      color: "bg-red-600/20 border-red-500/20 text-red-300 hover:bg-red-600"
    }
  ];

  const telegramFolders = [
    { name: "Main Folder", url: "https://t.me/addlist/CKSom_3SZhUzYmE8" },
    { name: "Softchat 1", url: "https://t.me/SoftchatHq" },
    { name: "Softchat 2", url: "https://t.me/officialsoftchat" },
    { name: "Miahzworld", url: "https://t.me/softchatHq2" },
    { name: "XallyHq", url: "https://t.me/Yacryptoworld" }
  ];

  const allSocialPlatforms = [
    ...socialLinks,
    ...telegramFolders.map(folder => ({
      name: folder.name,
      url: folder.url,
      icon: MessageCircle,
      color: "bg-blue-600/20 border-blue-500/20 text-blue-300 hover:bg-blue-600"
    }))
  ];

  const currentCategory = graphicDesignCategories.find(cat => cat.id === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Mobile Menu Button */}
      <Button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="fixed top-4 left-4 z-50 lg:hidden bg-purple-600 hover:bg-purple-700"
        size="sm"
      >
        {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
      </Button>

      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-40 w-64 bg-slate-800/95 backdrop-blur-md border-r border-purple-500/20 transform transition-transform duration-300 ease-in-out ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      } lg:translate-x-0`}>
        <div className="flex flex-col h-full">
          <div className="p-6 border-b border-purple-500/20">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Neocreb
            </h1>
            <p className="text-slate-300 text-sm mt-1">Portfolio & Services</p>
          </div>
          
          <nav className="flex-1 p-4 space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-all duration-200 ${
                    activeSection === item.id
                      ? 'bg-purple-600 text-white shadow-lg'
                      : 'text-slate-300 hover:bg-slate-700 hover:text-white'
                  }`}
                >
                  <Icon size={20} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <div className="lg:ml-64 min-h-screen">
        <div className="max-w-4xl mx-auto p-6 lg:p-8">
          
          {/* About Me Section */}
          <section id="about" className="mb-16 pt-16">
            <div className="text-center mb-12">
              <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                About Me
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-8"></div>
            </div>
            
            <Card className="bg-slate-800/50 border-purple-500/20 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="prose prose-slate prose-lg max-w-none text-slate-300">
                  <p className="text-xl leading-relaxed mb-6">
                    Hi, I'm <span className="text-purple-400 font-semibold">Chinedum Jeremiah Chidiebube</span>, 
                    the creator of <span className="text-pink-400 font-semibold">Neocreb</span> — a forward-thinking 
                    brand dedicated to empowering individuals through no-code tools, creative design, digital 
                    monetization, and social-tech innovation.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-4 mt-8">
                    {[
                      "Tech enthusiast, blogger & digital creator",
                      "No-code web & app developer",
                      "Graphic designer (logos, flyers, product labels)",
                      "Author & book publisher",
                      "Social media manager & ad strategist",
                      "Co-founder of Softchat",
                      "Crypto trader & P2P exchange expert"
                    ].map((role, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        <span>{role}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Services Section */}
          <section id="services" className="mb-16 pt-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-white">Services</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <Card key={index} className="bg-slate-800/50 border-purple-500/20 backdrop-blur-sm hover:border-purple-400/40 transition-all duration-300 hover:transform hover:scale-105">
                    <CardHeader>
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-purple-600/20 rounded-lg">
                          <Icon className="text-purple-400" size={24} />
                        </div>
                        <CardTitle className="text-white text-lg">{service.title}</CardTitle>
                      </div>
                      <CardDescription className="text-slate-300">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {service.skills.map((skill, skillIndex) => (
                          <Badge key={skillIndex} variant="secondary" className="bg-purple-600/20 text-purple-300 border-purple-500/20">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </section>

          {/* Portfolio Section */}
          <section id="portfolio" className="mb-16 pt-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-white">Portfolio</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
            </div>
            
            <div className="mb-12">
              <h3 className="text-2xl font-semibold text-purple-400 mb-6">Websites & Projects</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {portfolioItems.map((item, index) => (
                  <Card key={index} className="bg-slate-800/50 border-purple-500/20 backdrop-blur-sm hover:border-purple-400/40 transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-white">{item.title}</CardTitle>
                        <Badge className="bg-purple-600/20 text-purple-300 border-purple-500/20">
                          {item.type}
                        </Badge>
                      </div>
                      <CardDescription className="text-slate-300">
                        {item.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button
                        onClick={() => window.open(item.url, '_blank')}
                        className="w-full bg-purple-600 hover:bg-purple-700 text-white"
                      >
                        <ExternalLink size={16} className="mr-2" />
                        Visit Project
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Graphic Design Section */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold text-purple-400 mb-6">Graphic Design</h3>
              
              <div className="mb-6">
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="w-full max-w-xs bg-slate-800/50 border-purple-500/20 text-white">
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent className="bg-slate-800 border-purple-500/20">
                    {graphicDesignCategories.map((category) => (
                      <SelectItem key={category.id} value={category.id} className="text-white hover:bg-slate-700">
                        {category.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {currentCategory?.designs && currentCategory.designs.length > 0 ? (
                <div className="relative">
                  <Carousel className="w-full max-w-5xl mx-auto">
                    <CarouselContent className="-ml-2 md:-ml-4">
                      {currentCategory.designs.map((design) => (
                        <CarouselItem key={design.id} className="pl-2 md:pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                          <Card className="bg-slate-800/50 border-purple-500/20 backdrop-blur-sm hover:border-purple-400/40 transition-all duration-300">
                            <CardContent className="p-4">
                              <Dialog>
                                <DialogTrigger asChild>
                                  <div className="aspect-square mb-4 rounded-lg overflow-hidden cursor-pointer hover:opacity-80 transition-opacity">
                                    <img 
                                      src={design.image} 
                                      alt={design.title}
                                      className="w-full h-full object-cover"
                                    />
                                  </div>
                                </DialogTrigger>
                                <DialogContent className="max-w-4xl max-h-[90vh] bg-slate-900 border-purple-500/20">
                                  <div className="flex flex-col items-center">
                                    <img 
                                      src={design.image} 
                                      alt={design.title}
                                      className="max-w-full max-h-[80vh] object-contain rounded-lg"
                                    />
                                    <div className="mt-4 text-center">
                                      <h4 className="text-white font-semibold text-lg">{design.title}</h4>
                                      <p className="text-slate-300 mt-2">{design.description}</p>
                                    </div>
                                  </div>
                                </DialogContent>
                              </Dialog>
                              <h4 className="text-white font-semibold mb-2">{design.title}</h4>
                              <p className="text-slate-300 text-sm">{design.description}</p>
                            </CardContent>
                          </Card>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="bg-slate-800/80 border-purple-500/20 text-white hover:bg-slate-700 left-2" />
                    <CarouselNext className="bg-slate-800/80 border-purple-500/20 text-white hover:bg-slate-700 right-2" />
                  </Carousel>
                </div>
              ) : (
                <div className="min-h-[200px] flex items-center justify-center bg-slate-800/50 border-purple-500/20 border rounded-lg backdrop-blur-sm">
                  <div className="text-center">
                    <Palette className="text-purple-400 mx-auto mb-4" size={48} />
                    <p className="text-slate-300 text-lg">
                      {currentCategory?.name} designs coming soon!
                    </p>
                    <p className="text-slate-400 text-sm mt-2">
                      Design samples will be added here
                    </p>
                  </div>
                </div>
              )}
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-purple-400 mb-6">Amazon Author Pages</h3>
              <div className="grid grid-cols-2 gap-4">
                {authorPages.map((page, index) => (
                  <div key={index} className="flex flex-col items-center group">
                    <Button
                      onClick={() => window.open(page.url, '_blank')}
                      className="bg-orange-600/20 border-orange-500/20 text-orange-300 hover:bg-orange-600 border transition-all duration-300 w-16 h-16 p-0 rounded-2xl shadow-lg hover:shadow-xl hover:scale-110 group-hover:shadow-2xl"
                      variant="outline"
                    >
                      <BookOpen size={24} />
                    </Button>
                    <span className="text-xs text-slate-300 mt-2 text-center leading-tight max-w-[120px] group-hover:text-white transition-colors">
                      {page.title.replace("Author Page", "")}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Softchat Section */}
          <section id="softchat" className="mb-16 pt-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-white">Softchat</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
            </div>
            
            <Card className="bg-slate-800/50 border-purple-500/20 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <Smartphone className="text-purple-400 mx-auto mb-4" size={48} />
                  <p className="text-xl text-slate-300 leading-relaxed">
                    I'm the co-founder of <span className="text-purple-400 font-semibold">Softchat</span> — 
                    an all-in-one app combining social media, marketplace, crypto, and creator monetization.
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                  {[
                    "Watch2Earn video platform",
                    "Smart wallet + tipping + subscriptions",
                    "Escrow-based freelance systems",
                    "Marketplace systems",
                    "Campaign boosts + ad manager",
                    "Crypto & P2P trading"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2 text-slate-300">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="text-center">
                  <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 text-lg">
                    🚀 Launching Soon!
                  </Badge>
                  <p className="text-slate-300 mt-2">Creators, sellers, and early users can onboard now.</p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Social Links Section */}
          <section id="social" className="mb-16 pt-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-white">Social Links</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
            </div>
            
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-purple-400 mb-6">Main Platforms</h3>
              <div className="grid grid-cols-3 gap-4">
                {socialLinks.map((platform, index) => {
                  const Icon = platform.icon;
                  return (
                    <div key={index} className="flex flex-col items-center group">
                      <Button
                        onClick={() => window.open(platform.url, '_blank')}
                        className={`${platform.color} border transition-all duration-300 w-16 h-16 p-0 rounded-2xl shadow-lg hover:shadow-xl hover:scale-110 group-hover:shadow-2xl`}
                        variant="outline"
                      >
                        <Icon size={24} />
                      </Button>
                      <span className="text-xs text-slate-300 mt-2 text-center leading-tight max-w-[80px] group-hover:text-white transition-colors">
                        {platform.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-purple-400 mb-6">Telegram Folders</h3>
              <div className="grid grid-cols-3 gap-4">
                {telegramFolders.map((folder, index) => (
                  <div key={index} className="flex flex-col items-center group">
                    <Button
                      onClick={() => window.open(folder.url, '_blank')}
                      className="bg-blue-600/20 border-blue-500/20 text-blue-300 hover:bg-blue-600 border transition-all duration-300 w-16 h-16 p-0 rounded-2xl shadow-lg hover:shadow-xl hover:scale-110 group-hover:shadow-2xl"
                      variant="outline"
                    >
                      <MessageCircle size={24} />
                    </Button>
                    <span className="text-xs text-slate-300 mt-2 text-center leading-tight max-w-[80px] group-hover:text-white transition-colors">
                      {folder.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="text-center mt-8">
              <p className="text-slate-400 text-sm">
                Follow me across all platforms for updates, content, and collaboration opportunities
              </p>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="pt-16 pb-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-white">Contact</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
            </div>
            
            <Card className="bg-slate-800/50 border-purple-500/20 backdrop-blur-sm">
              <CardContent className="p-8">
                <ContactForm />
              </CardContent>
            </Card>
          </section>

        </div>
      </div>
    </div>
  );
};

export default Index;
