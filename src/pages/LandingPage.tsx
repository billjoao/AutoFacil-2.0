import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Link } from "react-router-dom";

export function LandingPage() {
  return (
    <>
      {/* Header */}
      <header className="flex justify-between items-center p-3 bg-red-950 text-white shadow-md">
        <h1 className="text-2xl font-bold">Autofacil</h1>
        <ul className="flex gap-6">
          <li><a href="/login" className="font-bold hover:text-red-400">Login</a></li>
          <li><a href="/cadastrar" className="font-bold hover:text-red-400">Cadastro</a></li>
          <li><a href="#sobre" className="font-bold hover:text-red-400">Sobre</a></li>
        </ul>
      </header>

      <section className="relative flex items-center justify-center bg-[url('/carro_tela_login.png')] bg-[center_-80%] bg-cover py-24">
        
        <div className="absolute inset-0 bg-black/40 z-0" />

        <div className="text-center text-white z-10">
          <h2 className="text-4xl font-bold mb-6">Sua plataforma de peças automobilísticas</h2>
          <p className="text-lg font-bold mb-8">Encontre as melhores peças para o seu carro, com qualidade e agilidade.</p>
          <Link to="/cadastrar">
            <Button className="bg-red-950 hover:bg-red-700 text-white cursor-pointer">Comece Agora</Button>
          </Link>
        </div>
      </section>


      {/* About Section */}
      <section id="sobre" className="py-24 px-6 bg-white">
        <h2 className="text-3xl font-bold text-center text-red-950 mb-12">Sobre nossa equipe</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle>Rafael</CardTitle>
              <CardDescription>Product Owner</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Interage com o cliente</p>
            </CardContent>
          </Card>
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle>Carlos Augusto</CardTitle>
              <CardDescription>Pesquisa de campo</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Realiza as pesquisas de campo</p>
            </CardContent>
          </Card>
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle>Hugo Castro</CardTitle>
              <CardDescription>Desenvolvedor Backend</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Especialista em SQL e por funcionalidades da pagina</p>
            </CardContent>
          </Card>
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle>Luiz</CardTitle>
              <CardDescription>Desenvolvedor Backend</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Com vasta experiência em Node.js e integrações, ele faz o motor da plataforma funcionar.</p>
            </CardContent>
          </Card>
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle>João Eduardo</CardTitle>
              <CardDescription>Desenvolvedor Frontend</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Especialista em React e Tailwind. Apaixonado por criar interfaces incríveis.</p>
            </CardContent>
          </Card>
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle>Iago</CardTitle>
              <CardDescription>Desenvolvedor Frontend</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Especialista em React e Tailwind. Apaixonado por criar interfaces incríveis.</p>
            </CardContent>
          </Card>
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle>Lucas Melare</CardTitle>
              <CardDescription>Designer UX/UI</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Responsável pela experiência visual e funcional dos nossos usuários.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="bg-gray-100 py-24 px-6">
        <h2 className="text-3xl font-bold text-center text-red-950 mb-12">Nossos Planos</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle>Plano Básico</CardTitle>
              <CardDescription>Ideal para quem está começando</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-xl font-semibold">R$ 99,99 / mês</p>
              <Button className="bg-red-950 hover:bg-red-700 text-white mt-4">Assine Agora</Button>
            </CardContent>
          </Card>
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle>Plano Intermediário</CardTitle>
              <CardDescription>Para quem precisa de mais funcionalidades</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-xl font-semibold">R$ 199,99 / mês</p>
              <Button className="bg-red-950 hover:bg-red-700 text-white mt-4">Assine Agora</Button>
            </CardContent>
          </Card>
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle>Plano Profissional</CardTitle>
              <CardDescription>Para empresas e grandes volumes</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-xl font-semibold">R$ 499,99 / mês</p>
              <Button className="bg-red-950 hover:bg-red-700 text-white mt-4">Assine Agora</Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-red-950 text-white py-6">
        <div className="text-center">
          <h3 className="text-lg">Entre em contato:</h3>
          <ul className="mt-2">
            <li><a href="mailto:contato@autofacil.com" className="hover:text-red-400">contato@autofacil.com</a></li>
            <li><a href="tel:+5511999999999" className="hover:text-red-400">+55 (11) 99999-9999</a></li>
            <li><a href="https://www.instagram.com/autofacil" className="hover:text-red-400">Instagram</a></li>
          </ul>
          <p className="mt-4 text-sm">© 2025 Autofacil - Todos os direitos reservados.</p>
        </div>
      </footer>
    </>
  );
}
