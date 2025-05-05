import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

export function Login() {
  return (
    <div className="flex h-screen">
      
      
      <div
        className="w-1/2 bg-cover bg-center"
        style={{ backgroundImage: "url('/carro_tela_login.png')" }}
      />

      
      <div className="w-1/2 flex items-center justify-center p-8 bg-white">
        <Tabs defaultValue="mecanico" className="w-full max-w-md">
          
          <TabsList className="grid w-full grid-cols-2 mb-4">
            <TabsTrigger value="mecanico">Mecânico</TabsTrigger>
            <TabsTrigger value="distribuidor">Distribuidor</TabsTrigger>
          </TabsList>

          <TabsContent value="mecanico">
            <Card>
              <CardHeader>
                <CardTitle>Login - Mecânico</CardTitle>
                <CardDescription>
                  Acesse sua conta como mecânico para comprar peças.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email-mec">Email</Label>
                  <Input id="email-mec" type="email" placeholder="exemplo@auto.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="senha-mec">Senha</Label>
                  <Input id="senha-mec" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cpf-mec">CPF</Label>
                  <Input id="cpf-mec" type="text" />
                </div>
              </CardContent>
              <CardFooter className="flex flex-col space-y-4">
                <div className="flex w-full gap-4">
                  <Button className="flex-1 bg-red-950 hover:bg-red-700 text-white">
                    Entrar
                  </Button>
                  <Link to="/" className="flex-1">
                    <Button variant="outline" className="w-full">
                      Voltar
                    </Button>
                  </Link>
                </div>
                <p className="text-center text-sm text-muted-foreground">
                  Não possui uma conta ainda?{" "}
                  <Link to="/cadastrar" className="text-red-700 hover:underline">
                    Vá para Cadastrar
                  </Link>
                </p>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="distribuidor">
            <Card>
              <CardHeader>
                <CardTitle>Login - Distribuidor</CardTitle>
                <CardDescription>
                  Faça login como distribuidor para gerenciar seu catálogo.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email-dist">Email</Label>
                  <Input id="email-dist" type="email" placeholder="distribuidor@auto.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="senha-dist">Senha</Label>
                  <Input id="senha-dist" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cnpj-dist">CNPJ</Label>
                  <Input id="cnpj-dist" type="text" />
                </div>
              </CardContent>
              <CardFooter className="flex flex-col space-y-4">
                <div className="flex w-full gap-4">
                  <Button className="flex-1 bg-red-950 hover:bg-red-700 text-white">
                    Entrar
                  </Button>
                  <Link to="/" className="flex-1">
                    <Button variant="outline" className="w-full">
                      Voltar
                    </Button>
                  </Link>
                </div>
                <p className="text-center text-sm text-muted-foreground">
                  Não possui uma conta ainda?{" "}
                  <Link to="/cadastrar" className="text-red-700 hover:underline">
                    Vá para Cadastrar
                  </Link>
                </p>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
